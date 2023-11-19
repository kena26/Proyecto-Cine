package com.example.Cine.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Cine.Services.CineDb;
import com.example.Cine.modelos.Usuarios;

@RestController
public class CineController {

    //inicio de sesion
    @PostMapping("/Cine/login")
    public String login(@RequestBody String correo, @RequestParam String contraseña) {
        return new CineDb().login(correo, contraseña);
    }

    //registro
    @PostMapping("/Cine/registro")
    public String registro(@RequestBody Usuarios usuario) {
        return new CineDb().registro(usuario);
    }
        
}
