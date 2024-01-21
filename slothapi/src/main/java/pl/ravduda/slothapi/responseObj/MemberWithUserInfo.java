package pl.ravduda.slothapi.responseObj;

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
@NoArgsConstructor
@AllArgsConstructor
public class MemberWithUserInfo {
    private int id;
    private UserInfo user;
    private MemberRole role;
}
