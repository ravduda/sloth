package pl.ravduda.slothapi.responseObj;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserInfo {
    private int id;
    private String firstname;
    private String lastname;
    private String email;
}
