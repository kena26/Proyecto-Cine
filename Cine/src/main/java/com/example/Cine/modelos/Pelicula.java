package com.example.Cine.modelos;

public class Pelicula {
    private String id_pelicula;
    private String duracion;
    private String director;
    private Integer año;
    private String sinopsis;
    private String clasificacion;
    private String genero;
    private Float precio;
    private String nombrePelicula;
    private String trailer;
    private String id_tipoP;
    private String id_Qr;
    private String foto_poster;
    private String IDactor;


    public Pelicula() {
        
    }

    public Pelicula(String id_pelicula, String duracion, String director,  String sinopsis, String clasificacion, String genero, Float precio, String nombrePelicula,
                    String trailer, String id_tipoP, String id_Qr, String foto_poster, String IDactor) {
        this.id_pelicula = id_pelicula;
        this.duracion = duracion;
        this.director = director;
        this.sinopsis = sinopsis;
        this.clasificacion = clasificacion;
        this.genero = genero;
        this.precio = precio;
        this.nombrePelicula = nombrePelicula;
        this.trailer = trailer;
        this.id_tipoP = id_tipoP;
        this.id_Qr = id_Qr;
        this.foto_poster = foto_poster;
        this.IDactor = IDactor;
    }

	public String getId_pelicula() {
        return id_pelicula;
    }

    public void setId_pelicula(String id_pelicula) {
        this.id_pelicula = id_pelicula;
    }

    public String getDuracion() {
        return duracion;
    }

    public void setDuracion(String duracion) {
        this.duracion = duracion;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public Integer getAño() {
        return año;
    }

    public void setAño(String año) {
    try {
        this.año = Integer.parseInt(año);
    } catch (NumberFormatException e) {

            this.año = 0; 
        }
    }

    public String getSinopsis() {
        return sinopsis;
    }

    public void setSinopsis(String sinopsis) {
        this.sinopsis = sinopsis;
    }
    public String getClasificacion() {
        return clasificacion;
    }

    public void setClasificacion(String clasificacion) {
        this.clasificacion = clasificacion;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public Float getPrecio() {
        return precio != null ? precio : 0.0f;
    }

    public void setPrecio(Float precio) {
        this.precio = precio;
    }

    public String getNombrePelicula() {
        return nombrePelicula;
    }

    public void setNombrePelicula(String nombrePelicula) {
        this.nombrePelicula = nombrePelicula;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }

    public String getId_tipoP() {
        return id_tipoP;
    }

    public void setId_tipoP(String id_tipoP) {
        this.id_tipoP = id_tipoP;
    }

    public String getId_Qr() {
        return id_Qr;
    }

    public void setId_Qr(String id_Qr) {
        this.id_Qr = id_Qr;
    }

    public String getFoto_poster() {
        return foto_poster;
    }

    public void setFoto_poster(String foto_poster) {
        this.foto_poster = foto_poster;
    }

    public String getIDactor() {
        return IDactor;
    }

    public void setIDactor(String IDactor) {
        this.IDactor = IDactor;
    }
}
