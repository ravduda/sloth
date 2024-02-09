package pl.ravduda.slothapi.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import pl.ravduda.slothapi.model.Project;
import pl.ravduda.slothapi.model.enumObj.MemberRole;
import pl.ravduda.slothapi.repository.UserRepository;
import pl.ravduda.slothapi.responseObj.MemberWithUserInfo;
import pl.ravduda.slothapi.responseObj.ProjectWithTasksWithOwnerInfo;
import pl.ravduda.slothapi.service.ProjectService;
import pl.ravduda.slothapi.service.TeamService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/project")
public class ProjectController {
    private final ProjectService projectService;
    private final UserRepository userRepository;
    private final TeamService teamService;

    @PutMapping("")
    public Project addProject(@RequestBody Project project){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        int userId = userRepository.findByEmail(username).orElseThrow().getId();
        MemberRole role = teamService.getUserMemberRole(userId, project.getTeamId());
        if(role.equals(MemberRole.OWNER) || role.equals(MemberRole.MEMBER))
            return projectService.addProject(project);
        return null;
    }

    @GetMapping("/{id}")
    public ProjectWithTasksWithOwnerInfo getProjectWithTasks(@PathVariable int id, @RequestParam boolean onlyToDo, @RequestParam int page, @RequestParam int onPage){
        return projectService.getProject(id, onlyToDo, page, onPage);
    }
    @GetMapping("/members/{id}")
    public ResponseEntity<List<MemberWithUserInfo>> getMembers(@PathVariable int id) {return ResponseEntity.ok(projectService.getProjectMembers(id));}
}
