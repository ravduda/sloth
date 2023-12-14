package pl.ravduda.slothapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.ravduda.slothapi.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
