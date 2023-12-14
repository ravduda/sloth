package pl.ravduda.slothapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.ravduda.slothapi.model.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {
}
