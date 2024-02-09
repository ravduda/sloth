package pl.ravduda.slothapi.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.ravduda.slothapi.model.Project;
import pl.ravduda.slothapi.responseObj.MemberWithUserInfo;
import pl.ravduda.slothapi.responseObj.ProjectWithTasksWithOwnerInfo;
import pl.ravduda.slothapi.service.ProjectService;

import java.util.List;

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
    public ProjectWithTasksWithOwnerInfo getProjectWithTasks(@PathVariable int id, @RequestParam boolean onlyToDo, @RequestParam int page, @RequestParam int onPage){
        return projectService.getProject(id, onlyToDo, page, onPage);
    }
    @GetMapping("/members/{id}")
    public ResponseEntity<List<MemberWithUserInfo>> getMembers(@PathVariable int id) {return ResponseEntity.ok(projectService.getProjectMembers(id));}
}
