package com.example.Cine.modelos;

public class Cartelera {
    private String Provincia;
    private String hora;
    private String NombrePelicula;
    private String Sede;
    private String Sala;
    private String duracion;
    private String fecha;
    private boolean disponibilidad;
    private String link;

    //CONSTRUCTORES//
    public Cartelera(String Provincia, String hora, String NombrePelicula, String Sede, String sala, String duracion, String fecha, String link, boolean disponibilidad) {
        
        this.Provincia = Provincia;
        this.hora = hora;
        this.NombrePelicula = NombrePelicula;
        this.Sede = Sede;
        this.Sala = sala;
        this.duracion = duracion;
        this.Sede = fecha;
        this.disponibilidad = disponibilidad;
        this.link = link;
        
    }
   
    public Cartelera() {

    }
        
    public String getProvincia() {
        return this.Provincia;
    }
    
    public String getHora() {
        return this.hora;
    }
    
    public String getNombrePelicula() {
        return this.NombrePelicula;
    }
    
    public String getSede() {
        return this.Sede;
    }
    
    public String getSala() {
        return this.Sala;
    }
    
    public String getDuracion() {
        return this.duracion;
    }
    
    public String getFecha() {
        return this.fecha;
    }
    
    public boolean getDisponibilidad() {
        return this.disponibilidad;
    }
    
    public String getLink() {
        return this.link;
    }
}