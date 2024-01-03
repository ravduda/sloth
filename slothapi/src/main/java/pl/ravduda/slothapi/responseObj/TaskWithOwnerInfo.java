package pl.ravduda.slothapi.responseObj;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.ravduda.slothapi.model.Member;
import pl.ravduda.slothapi.model.enumObj.Status;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TaskWithOwnerInfo {
    private int id;
    private String name;
    private String description;
    private LocalDate deadline;
    private int projectId;
    private UserInfo owner;
    private Status status;
}
