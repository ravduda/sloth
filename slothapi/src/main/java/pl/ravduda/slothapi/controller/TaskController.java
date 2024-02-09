package pl.ravduda.slothapi.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import pl.ravduda.slothapi.model.Task;
import pl.ravduda.slothapi.model.enumObj.MemberRole;
import pl.ravduda.slothapi.repository.UserRepository;
import pl.ravduda.slothapi.requestObj.TaskRequest;
import pl.ravduda.slothapi.service.ProjectService;
import pl.ravduda.slothapi.service.TaskService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/task")
public class TaskController {
    private final TaskService taskService;
    private final ProjectService projectService;
    private final UserRepository userRepository;

    @PostMapping("")
    public Task addTask(@RequestBody TaskRequest task){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        int userId = userRepository.findByEmail(username).orElseThrow().getId();
        MemberRole role = projectService.getUserMemberRole(userId, task.getProjectId());
        if(role.equals(MemberRole.OWNER) || role.equals(MemberRole.MEMBER))
            return taskService.addTask(task);
        return null;
    }
    @GetMapping("/{id}")
    public Task changeStatusToDone(@PathVariable int id){
        return taskService.changeStatusToDone(id);
    }
}
