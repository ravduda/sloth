package pl.ravduda.slothapi.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.ravduda.slothapi.service.ControllerService;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping("/project")
public class ProjectController {
    private final ControllerService controllerService;
}
