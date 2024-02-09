package pl.ravduda.slothapi.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.ravduda.slothapi.model.Task;
import pl.ravduda.slothapi.model.enumObj.Status;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {


    List<Task> findByProjectIdAndStatus(int projectId, Status status, Pageable pageable);
    List<Task> findByProjectIdAndStatus(int projectId, Status status);
    List<Task> findByProjectId(int projectId, Pageable pageable);
    List<Task> findByProjectId(int projectId);

}
