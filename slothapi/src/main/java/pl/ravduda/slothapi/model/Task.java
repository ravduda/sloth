package pl.ravduda.slothapi.model;

import jakarta.persistence.*;
import lombok.Data;
import pl.ravduda.slothapi.model.enumObj.Status;

import java.time.LocalDateTime;

@Entity
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private LocalDateTime deadline;
    private int projectId;
    @ManyToOne
    @JoinColumn(name = "owner")
    private Member member;
    @Enumerated(EnumType.STRING)
    private Status status;

}
