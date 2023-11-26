package com.example.Cine.Controllers;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.example.Cine.Services.CineDb;
import com.example.Cine.modelos.Usuarios;

@RestController
public class CineController {

    private final ObjectMapper objectMapper = new ObjectMapper();

    // Inicio de sesion
    @PostMapping("/Cine/login")
    public ResponseEntity<String> login(@RequestBody Usuarios usuario) {
        try {
            // Simulación de obtener datos del usuario desde una base de datos
            Usuarios userData = new CineDb().obtenerDatosUsuario(usuario.getEmail(), usuario.getContrasena());

            if (userData != null) {
                String jsonResponse = objectMapper.writeValueAsString(userData);
                return ResponseEntity.ok(jsonResponse);
            } else {
                String jsonResponse = objectMapper.writeValueAsString(Map.of("error", "Usuario no encontrado"));
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(jsonResponse);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error durante el inicio de sesión: " + e.getMessage());
        }
    }

    // Registro
    @PostMapping("/Cine/registro")
    public ResponseEntity<String> registrarUsuario(@RequestBody Usuarios usuario) {
        try {
            String resultado = new CineDb().registro(usuario);
            return ResponseEntity.ok(resultado);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al registrar usuario");
        }
    }

    // Obtener información de registro
    @GetMapping("/Cine/registro")
    public ResponseEntity<List<Usuarios>> obtenerInformacionRegistro() {
        List<Usuarios> usuarios = new CineDb().obtenerUsuarios();
        return ResponseEntity.ok(usuarios);
    }
}
