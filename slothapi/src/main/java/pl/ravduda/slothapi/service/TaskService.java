package pl.ravduda.slothapi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.ravduda.slothapi.model.Member;
import pl.ravduda.slothapi.model.Task;
import pl.ravduda.slothapi.model.enumObj.Status;
import pl.ravduda.slothapi.repository.MemberRepository;
import pl.ravduda.slothapi.repository.TaskRepository;
import pl.ravduda.slothapi.requestObj.TaskRequest;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final MemberService memberService;
    public Task addTask(TaskRequest task){
        Member tempMember = Member.builder()
                .id(task.getMemberId())
                .build();
        return taskRepository.save(Task.builder()
                        .name(task.getName())
                        .description(task.getDescription())
                        .deadline(task.getDeadline())
                        .projectId(task.getProjectId())
                        .member(tempMember)
                        .status(Status.TODO)
                        .build()
        );
    }

    public List<Task> getTasks(Integer projectId) {
        return taskRepository.findByProjectId(projectId);
    }
}
