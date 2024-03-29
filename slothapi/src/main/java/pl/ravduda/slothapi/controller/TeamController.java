package pl.ravduda.slothapi.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.ravduda.slothapi.model.Member;
import pl.ravduda.slothapi.model.Team;
import pl.ravduda.slothapi.responseObj.MemberWithUserInfo;
import pl.ravduda.slothapi.service.TeamService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/team")
public class TeamController {
    private final TeamService teamService;
    @PostMapping("")
    public Team addTeam(@RequestBody Team team){
        return teamService.addTeam(team);
    }
//    @CrossOrigin
    @GetMapping("")
    public ResponseEntity<List<Member>> getTeams(){
        return ResponseEntity.ok(teamService.getUserTeams());
    }

    @GetMapping("/members/{id}")
    public ResponseEntity<List<MemberWithUserInfo>> getMembers(@PathVariable int id) {return ResponseEntity.ok(teamService.getTeamMembers(id));}
}
