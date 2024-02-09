package pl.ravduda.slothapi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.ravduda.slothapi.model.Member;
import pl.ravduda.slothapi.model.Team;
import pl.ravduda.slothapi.model.User;
import pl.ravduda.slothapi.model.enumObj.MemberRole;
import pl.ravduda.slothapi.repository.MemberRepository;
import pl.ravduda.slothapi.repository.TeamRepository;
import pl.ravduda.slothapi.repository.UserRepository;
import pl.ravduda.slothapi.requestObj.MemberRequest;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final UserRepository userRepository;
    private final TeamRepository teamRepository;

    public Member getMember(int id){
        return memberRepository.findById(id).orElseThrow();
    }
    public MemberRole getUserMemberRole(int userId, int memberId) {
        return memberRepository.findByUserIdAndId(userId, memberId).orElseThrow().getRole();
    }

    public Member addMember(MemberRequest member){
        User user = userRepository.findByEmail(member.getUsername()).orElseThrow();
        Team team = teamRepository.findById(member.getTeamId()).orElseThrow();
        return memberRepository.save(Member.builder()
                .team(Team.builder().id(team.getId()).build())
                .user(User.builder().id(user.getId()).build())
                .role(member.getRole())
                .build());
    }

}
