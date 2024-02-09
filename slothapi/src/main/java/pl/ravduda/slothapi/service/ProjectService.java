package pl.ravduda.slothapi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import pl.ravduda.slothapi.model.Member;
import pl.ravduda.slothapi.model.Project;
import pl.ravduda.slothapi.model.Task;
import pl.ravduda.slothapi.model.enumObj.Status;
import pl.ravduda.slothapi.repository.ProjectRepository;
import pl.ravduda.slothapi.repository.TaskRepository;
import pl.ravduda.slothapi.responseObj.MemberWithUserInfo;
import pl.ravduda.slothapi.responseObj.ProjectWithTasksWithOwnerInfo;
import pl.ravduda.slothapi.responseObj.TaskWithOwnerInfo;
import pl.ravduda.slothapi.responseObj.UserInfo;

import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final TeamService teamService;
    private final TaskRepository taskRepository;
    public Project addProject(Project project) {
        return projectRepository.save(project);
    }

    public ProjectWithTasksWithOwnerInfo getProject(int id, boolean onlyToDo, int page, int onPage) {
        Project tempProjet = projectRepository.findById(id).orElseThrow();
        List<Task> tempTasks;
        int totalTasks;
        if(onlyToDo){
            tempTasks = taskRepository.findByProjectIdAndStatus(id, Status.TODO, PageRequest.of(page,onPage));
            totalTasks = taskRepository.findByProjectIdAndStatus(id, Status.TODO).size();
        }
        else{
            tempTasks = taskRepository.findByProjectId(id, PageRequest.of(page,onPage));
            totalTasks = taskRepository.findByProjectId(id).size();
        }
        return ProjectWithTasksWithOwnerInfo.builder()
                .id(tempProjet.getId())
                .name(tempProjet.getName())
                .description(tempProjet.getDescription())
                .teamId(tempProjet.getTeamId())
                .tasks(getTasksWithUserInfo(tempTasks))
                .total(totalTasks)
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
