package com.example.Cine.modelos;

public class Actor {
    private String nombreActor;
    private String apellidoActor;
    private String perfil;

    public Actor() {

    }

    public Actor(String nombreActor, String apellidoActor, String perfil) {
        this.nombreActor = nombreActor;
        this.apellidoActor = apellidoActor;
        this.perfil = perfil;
    }

    public String getNombreActor() {
        return nombreActor;
    }

    public void setNombreActor(String nombreActor) {
        this.nombreActor = nombreActor;
    }

    public String getApellidoActor() {
        return apellidoActor;
    }

    public void setApellidoActor(String apellidoActor) {
        this.apellidoActor = apellidoActor;
    }

    public String getPerfil() {
        return perfil;
    }

    public void setPerfil(String perfil) {
        this.perfil = perfil;
    }
}