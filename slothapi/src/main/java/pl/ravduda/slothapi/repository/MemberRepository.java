package pl.ravduda.slothapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.ravduda.slothapi.model.Member;

import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

    List<Member> findByUserId(int userId);
    Optional<Member> findById(int id);

    List<Member> findByTeamId(int teamId);

    Optional<Member> findByUserIdAndId(int userId, int id);
    Optional<Member> findByUserIdAndTeamId(int userId, int teamId);
}
