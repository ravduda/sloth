package pl.ravduda.slothapi.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.ravduda.slothapi.model.Member;
import pl.ravduda.slothapi.model.Project;
import pl.ravduda.slothapi.model.User;
import pl.ravduda.slothapi.model.enumObj.MemberRole;
import pl.ravduda.slothapi.repository.UserRepository;
import pl.ravduda.slothapi.requestObj.MemberRequest;
import pl.ravduda.slothapi.service.MemberService;
import pl.ravduda.slothapi.service.TeamService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {
    private final MemberService memberService;
    private final UserRepository userRepository;
    private final TeamService teamService;
    @PostMapping("")
    public ResponseEntity<String> addProject(@RequestBody MemberRequest member){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User user = userRepository.findByEmail(username).orElseThrow();
        int userId = user.getId();
        MemberRole role = teamService.getUserMemberRole(userId, member.getTeamId());
        if(role.equals(MemberRole.OWNER)){
            if(memberService.addMember(member) != null)
                return ResponseEntity.ok("Ok");
        }

        return null;
    }

}
