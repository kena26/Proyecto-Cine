package com.example.Cine.modelos;

public class Actor {
    private int idActor;
    private String nombre;
    private String apellido;
    private String foto;
    private int id_pelicula;

    public Actor() {

    }

    public Actor(String nombre, String apellido, String foto, int id_pelicula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.foto = foto;
        this.id_pelicula=id_pelicula;
    }

    public Actor(int idActor, String nombre, String apellido, String foto, int id_pelicula) {
        this.idActor=idActor;
        this.nombre = nombre;
        this.apellido = apellido;
        this.foto = foto;
        this.id_pelicula=id_pelicula;
    }

    public int getIdActor() {
        return idActor;
    }

    public void setIdActor(int idActor) {
        this.idActor = idActor;
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

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public int getIdPelicula(){
        return id_pelicula;
    }

    public void setIdPelicula(int id_pelicula) {
        this.id_pelicula = id_pelicula;
    }
}
