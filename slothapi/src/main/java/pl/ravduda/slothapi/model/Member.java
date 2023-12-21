package pl.ravduda.slothapi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.ravduda.slothapi.model.enumObj.MemberRole;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "teamId")
    private Team team;
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;
    @Enumerated(EnumType.STRING)
    private MemberRole role;
}
