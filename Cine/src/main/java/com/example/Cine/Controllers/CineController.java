package com.example.Cine.Controllers;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.Cine.Services.CineDb;
import com.example.Cine.modelos.Actor;
import com.example.Cine.modelos.Pelicula;
import com.example.Cine.modelos.Usuarios;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class CineController {

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final CineDb cineDb = new CineDb();  // Instantiate CineDb

    // Inicio de sesion
    @PostMapping("/Cine/login")
    public ResponseEntity<String> login(@RequestBody Usuarios usuario) {
        try {
            Usuarios userData = cineDb.obtenerDatosUsuario(usuario.getEmail(), usuario.getContrasena());

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
            String resultado = cineDb.registro(usuario);
            return ResponseEntity.ok(resultado);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al registrar usuario");
        }
    }

    // Obtener información de registro
    @GetMapping("/Cine/registro")
    public ResponseEntity<List<Usuarios>> obtenerInformacionRegistro() {
        List<Usuarios> usuarios = cineDb.obtenerUsuarios();
        return ResponseEntity.ok(usuarios);
    }

    @PatchMapping("/Cine/actualizarUsuario")
    public ResponseEntity<String> actualizarUsuario(@RequestBody Usuarios nuevoUsuario) {
        try {
            cineDb.actualizarDatosUsuario(nuevoUsuario);
            return ResponseEntity.ok("Actualización exitosa");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar usuario");
        }
    }



    @PostMapping("Cine/agregar")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Void> agregarPelicula(@RequestBody Pelicula pelicula) {
        CineDb cineDb = new CineDb();
        cineDb.agregarPelicula(pelicula);
        return ResponseEntity.ok().build();
    }
    @GetMapping("Cine/peliculas")
    public List<Pelicula> cargarTodasLasPeliculas() {
        CineDb cineDb = new CineDb();
        return cineDb.obtenerTodasLasPeliculas();
    }

    @GetMapping("Cine/{id_pelicula}")
    public Pelicula buscarPeli(@PathVariable("id_pelicula") int idPelicula) {
        CineDb cineDb = new CineDb();
        return cineDb.BuscarPelicula(idPelicula);
    }

    @PostMapping("/Cine/agregarActor")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Void> agregarActor(@RequestBody Actor actor) {
        CineDb cineDb = new CineDb();
        boolean resultado = cineDb.agregarActor(actor);

        if (resultado) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/Cine/eliminarPelicula/{idPelicula}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> eliminarPelicula(@PathVariable String idPelicula) {
        CineDb cineDb = new CineDb();
        cineDb.eliminarPelicula(idPelicula);
        return ResponseEntity.noContent().build();
    }
    
    @PutMapping("/Cine/actualizarPelicula/{idPeli}")
    public ResponseEntity<String> actualizarPelicula(@PathVariable String idPeli, @RequestBody Pelicula peliculaActualizada) {
        CineDb cineDb = new CineDb();
        boolean resultado = cineDb.actualizarPelicula(idPeli, peliculaActualizada);

        if (resultado) {
            return new ResponseEntity<>("Película actualizada con éxito", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Error: Película no encontrada", HttpStatus.NOT_FOUND);
        }
    }
 
}
