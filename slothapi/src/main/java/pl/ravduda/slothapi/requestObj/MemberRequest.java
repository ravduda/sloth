package pl.ravduda.slothapi.requestObj;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.ravduda.slothapi.model.Team;
import pl.ravduda.slothapi.model.User;
import pl.ravduda.slothapi.model.enumObj.MemberRole;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberRequest {
    private int teamId;
    private String username;
    private MemberRole role;
}
