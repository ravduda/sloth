package pl.ravduda.slothapi.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pl.ravduda.slothapi.model.Project;
import pl.ravduda.slothapi.responseObj.ProjectWithTasksWithOwnerInfo;
import pl.ravduda.slothapi.service.ProjectService;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/project")
public class ProjectController {
    private final ProjectService projectService;

    @PutMapping("")
    public Project addProject(@RequestBody Project project){
        return projectService.addProject(project);
    }

    @GetMapping("/{id}")
    public ProjectWithTasksWithOwnerInfo getProjectWithTasks(@PathVariable int id){
        return projectService.getProject(id);
    }
}
