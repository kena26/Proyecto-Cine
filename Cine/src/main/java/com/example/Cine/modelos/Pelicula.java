package com.example.Cine.modelos;

import java.util.List;

public class Pelicula {

    private int idPelicula;
    private String titulo;
    private String sinopsis;
    private String genero;
    private String linkQR;
    private String linkInfo;
    private String clasificacion;
    private String duracion;
    private String fotoPoster;
    private Float calificacion;
    private List<Director> directores;
    private List<SucursalesPelicula> sucursales;
     private List<Actor> actores;

    public Pelicula() {
    }


    public Pelicula(int idPelicula, String titulo, String sinopsis, String genero, String linkQR, String linkInfo, String clasificacion, String duracion, String fotoPoster, Float calificacion) {
    this.idPelicula = idPelicula;
    this.titulo = titulo;
    this.sinopsis = sinopsis;
    this.genero = genero;
    this.linkQR = linkQR;
    this.linkInfo = linkInfo;
    this.clasificacion = clasificacion;
    this.duracion = duracion;
    this.fotoPoster = fotoPoster;
    this.calificacion = calificacion;
}


    public Pelicula(String titulo, String sinopsis, String genero, String linkQR, String linkInfo,
                    String clasificacion, String duracion, String fotoPoster, float calificacion) {
        this.titulo = titulo;
        this.sinopsis = sinopsis;
        this.genero = genero;
        this.linkQR = linkQR;
        this.linkInfo = linkInfo;
        this.clasificacion = clasificacion;
        this.duracion = duracion;
        this.fotoPoster = fotoPoster;
        this.calificacion=calificacion;

    }


    public int getIdPelicula() {
        return idPelicula;
    }

    public void setIdPelicula(int idPelicula) {
        this.idPelicula = idPelicula;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getSinopsis() {
        return sinopsis;
    }

    public void setSinopsis(String sinopsis) {
        this.sinopsis = sinopsis;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getLinkQR() {
        return linkQR;
    }

    public void setLinkQR(String linkQR) {
        this.linkQR = linkQR;
    }

    public String getLinkInfo() {
        return linkInfo;
    }

    public void setLinkInfo(String linkInfo) {
        this.linkInfo = linkInfo;
    }

    public String getClasificacion() {
        return clasificacion;
    }

    public void setClasificacion(String clasificacion) {
        this.clasificacion = clasificacion;
    }

    public String getDuracion() {
        return duracion;
    }

    public void setDuracion(String duracion) {
        this.duracion = duracion;
    }

    public String getFotoPoster() {
        return fotoPoster;
    }

    public void setFotoPoster(String fotoPoster) {
        this.fotoPoster = fotoPoster;
    }
    public Float getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(Float calificacion) {
        this.calificacion = calificacion;
    }
     public List<Actor> getActores() {
        return actores;
    }

    public void setActores(List<Actor> actores) {
        this.actores = actores;
    }

    public List<Director> getDirectores() {
        return directores;
    }

    public void setDirectores(List<Director> directores) {
        this.directores = directores;
    }

    public List<SucursalesPelicula> getSucursales() {
        return sucursales;
    }

    public void setSucursales(List<SucursalesPelicula> sucursales) {
        this.sucursales = sucursales;
    }
}



