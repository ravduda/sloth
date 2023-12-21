package pl.ravduda.slothapi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private int teamId;
    @OneToMany(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "projectId", updatable = false, insertable = false)
    private List<Task> tasks;
}
