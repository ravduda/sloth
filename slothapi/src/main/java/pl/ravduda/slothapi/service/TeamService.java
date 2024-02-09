package pl.ravduda.slothapi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import pl.ravduda.slothapi.model.Member;
import pl.ravduda.slothapi.model.Project;
import pl.ravduda.slothapi.model.Team;
import pl.ravduda.slothapi.model.User;
import pl.ravduda.slothapi.model.enumObj.MemberRole;
import pl.ravduda.slothapi.repository.MemberRepository;
import pl.ravduda.slothapi.repository.TeamRepository;
import pl.ravduda.slothapi.repository.UserRepository;
import pl.ravduda.slothapi.responseObj.MemberWithUserInfo;
import pl.ravduda.slothapi.responseObj.UserInfo;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TeamService {
    private final TeamRepository teamRepository;
    private final UserRepository userRepository;
    private final MemberRepository memberRepository;
    private final MemberService memberService;
    public Team addTeam(Team team) {
        Team createdTeam = teamRepository.save(team);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(authentication.getName()).orElseThrow();
        Member member = Member.builder()
                .team(createdTeam)
                .user(user)
                .role(MemberRole.OWNER)
                .build();
        memberRepository.save(member);
        return createdTeam;
    }
    public List<Member> getUserTeams(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(authentication.getName()).orElseThrow();
        List<Member> members = memberRepository.findByUserId(user.getId());
        List<Member> membersWithNoUser = new ArrayList<Member>();
        for(Member i : members){
            membersWithNoUser.add(Member.builder()
                    .id(i.getId())
                    .team(getTeamWithoutTasks(i.getTeam()))
                    .role(i.getRole())
                    .build());
        }
        return membersWithNoUser;
    }
    public Team getTeamWithoutTasks(Team team){
        List<Project> projectList = new ArrayList<Project>();
        for(Project i : team.getProjects()){
            projectList.add(Project.builder()
                    .id(i.getId())
                    .name(i.getName())
                    .description(i.getDescription())
                    .build());
        }
        return Team.builder()
                .id(team.getId())
                .name(team.getName())
                .projects(projectList)
                .build();
    }

    public List<MemberWithUserInfo> getTeamMembers(int id) {
        List<Member> memberList= memberRepository.findByTeamId(id);
        List<MemberWithUserInfo> memberListWithoutTeamData = new ArrayList<MemberWithUserInfo>();
        for(Member i : memberList){
            memberListWithoutTeamData.add(MemberWithUserInfo.builder()
                    .id(i.getId())
                    .user(UserInfo.builder()
                            .id(i.getUser().getId())
                            .firstname(i.getUser().getFirstname())
                            .lastname(i.getUser().getLastname())
                            .email(i.getUser().getEmail())
                            .build()
                    )
                    .role(i.getRole())
                    .build()
            );
        }
        return memberListWithoutTeamData;
    }
    public MemberRole getUserMemberRole(int userId, int teamId){
        return memberRepository.findByUserIdAndTeamId(userId, teamId).orElseThrow().getRole();
    }
}
