package pl.ravduda.slothapi.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.ravduda.slothapi.model.Task;
import pl.ravduda.slothapi.requestObj.TaskRequest;
import pl.ravduda.slothapi.service.TaskService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/task")
public class TaskController {
    private final TaskService taskService;

    @PutMapping("")
    public Task addTask(@RequestBody TaskRequest task){
        return taskService.addTask(task);
    }
    @GetMapping("")
    public ResponseEntity<List<Task>> getTasks(@RequestParam Integer projectId){
        return ResponseEntity.ok(taskService.getTasks(projectId));
    }
}
