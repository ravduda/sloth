package pl.ravduda.slothapi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.ravduda.slothapi.model.enumObj.Status;

import java.time.LocalDateTime;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
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
