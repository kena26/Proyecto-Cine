package com.example.Cine.modelos;


public class Director {

    private int idDirector;
    private String nombre;
    private String apellido;
    private int id_pelicula;

    public Director() {

    }

    public Director(int idDirector, String nombre, String apellido) {
        this.idDirector = idDirector;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public Director(int idDirector, String nombre, String apellido, int id_pelicula) {
        this.idDirector = idDirector;
        this.nombre = nombre;
        this.apellido = apellido;
        this.id_pelicula=id_pelicula;
    }

	public int getIdDirector() {
        return idDirector;
    }

    public void setIdDirector(int idDirector) {
        this.idDirector = idDirector;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getIdPelicula(){
        return id_pelicula;
    }

    public void setIdPelicula(int id_pelicula) {
        this.id_pelicula = id_pelicula;
    }
}
