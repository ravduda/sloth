package pl.ravduda.slothapi.requestObj;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TaskRequest {
    private String name;
    private String description;
    private LocalDate deadline;
    private int projectId;
    private int memberId;
}
