package pl.ravduda.slothapi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.ravduda.slothapi.model.Member;
import pl.ravduda.slothapi.model.enumObj.MemberRole;
import pl.ravduda.slothapi.repository.MemberRepository;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public Member getMember(int id){
        return memberRepository.findById(id).orElseThrow();
    }
    public MemberRole getUserMemberRole(int userId, int memberId) {
        return memberRepository.findByUserIdAndId(userId, memberId).orElseThrow().getRole();
    }

}
