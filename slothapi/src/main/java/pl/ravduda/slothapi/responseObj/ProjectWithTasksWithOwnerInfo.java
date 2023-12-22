package pl.ravduda.slothapi.responseObj;

import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.ravduda.slothapi.model.Task;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectWithTasksWithOwnerInfo {
    private int id;
    private String name;
    private String description;
    private int teamId;
    private List<TaskWithOwnerInfo> tasks;
}
