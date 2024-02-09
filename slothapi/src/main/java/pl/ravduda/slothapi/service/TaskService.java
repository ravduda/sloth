package pl.ravduda.slothapi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.ravduda.slothapi.model.Member;
import pl.ravduda.slothapi.model.Task;
import pl.ravduda.slothapi.model.enumObj.MemberRole;
import pl.ravduda.slothapi.model.enumObj.Status;
import pl.ravduda.slothapi.repository.MemberRepository;
import pl.ravduda.slothapi.repository.TaskRepository;
import pl.ravduda.slothapi.requestObj.TaskRequest;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final MemberService memberService;
    private final ProjectService projectService;
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
    public MemberRole getUserMemberRole(int userId, int taskId){
        return projectService.getUserMemberRole(userId, taskRepository.findById(taskId).orElseThrow().getProjectId());
    }

    public Task changeStatusToDone(int id){
        Task task = taskRepository.findById(id).orElseThrow();
        Task savedTask = Task.builder()
                .id(task.getId())
                .name(task.getName())
                .description(task.getDescription())
                .deadline(task.getDeadline())
                .projectId(task.getProjectId())
                .status(Status.DONE)
                        .build();
        return taskRepository.save(savedTask);
    }

}
