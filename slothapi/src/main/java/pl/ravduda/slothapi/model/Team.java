package pl.ravduda.slothapi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @OneToMany(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "teamId", updatable = false, insertable = false)
    private List<Project> projects;
}
