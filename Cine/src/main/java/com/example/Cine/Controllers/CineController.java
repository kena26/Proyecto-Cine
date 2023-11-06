package com.example.Cine.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Cine.Services.CineDb;
import com.example.Cine.modelos.Productos;

@RestController
public class CineController {

    @GetMapping("/Cine/all")
    public List<Productos> ObtenerProductos() {
        return new CineDb().ObtenerProductos();
    }
}
