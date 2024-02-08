package pl.ravduda.slothapi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.ravduda.slothapi.model.Member;
import pl.ravduda.slothapi.model.Project;
import pl.ravduda.slothapi.model.Task;
import pl.ravduda.slothapi.repository.ProjectRepository;
import pl.ravduda.slothapi.responseObj.MemberWithUserInfo;
import pl.ravduda.slothapi.responseObj.ProjectWithTasksWithOwnerInfo;
import pl.ravduda.slothapi.responseObj.TaskWithOwnerInfo;
import pl.ravduda.slothapi.responseObj.UserInfo;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final TeamService teamService;
    public Project addProject(Project project) {
        return projectRepository.save(project);
    }

    public ProjectWithTasksWithOwnerInfo getProject(int id) {
        Project tempProjet = projectRepository.findById(id).orElseThrow();
        return ProjectWithTasksWithOwnerInfo.builder()
                .id(tempProjet.getId())
                .name(tempProjet.getName())
                .description(tempProjet.getDescription())
                .teamId(tempProjet.getTeamId())
                .tasks(getTasksWithUserInfo(tempProjet.getTasks()))
                .build();
    }
    private List<TaskWithOwnerInfo> getTasksWithUserInfo(List<Task> tasks){
        List<TaskWithOwnerInfo> tempTasks = new ArrayList<TaskWithOwnerInfo>();
        for(Task i : tasks){
            tempTasks.add(TaskWithOwnerInfo.builder()
                            .id(i.getId())
                            .name(i.getName())
                            .description(i.getDescription())
                            .deadline(i.getDeadline())
                            .projectId(i.getProjectId())
                            .owner(UserInfo.builder()
                                    .id(i.getMember().getUser().getId())
                                    .email(i.getMember().getUser().getEmail())
                                    .firstname(i.getMember().getUser().getFirstname())
                                    .lastname(i.getMember().getUser().getLastname())
                                    .build())
                            .status(i.getStatus())
                    .build());
        }
        return tempTasks;
    }

    public List<MemberWithUserInfo> getProjectMembers(int projectId) {
        int teamId = projectRepository.findById(projectId).orElseThrow().getTeamId();
        return teamService.getTeamMembers(teamId);
    }
}
