package pl.ravduda.slothapi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.ravduda.slothapi.model.Project;
import pl.ravduda.slothapi.repository.ProjectRepository;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepository projectRepository;
    public Project addProject(Project project) {
        return projectRepository.save(project);
    }
}
