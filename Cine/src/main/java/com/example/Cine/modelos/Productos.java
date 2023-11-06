package com.example.Cine.modelos;

public class Productos {
    private String id_producto;
    private String nombre;
    private String id_Prov;

    public Productos() {

        }

    public Productos(String id_producto, String nombre, String id_Prov) {
        this.id_producto = id_producto;
        this.nombre = nombre;
        this.id_Prov = id_Prov;
    }

    public String getId_producto() {
        return id_producto;
    }
    public void setId_producto(String id_producto) {
        this.id_producto = id_producto;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getId_Prov() {
        return id_Prov;
    }
    public void setId_Prov(String id_Prov) {
        this.id_Prov = id_Prov;
    }
}


