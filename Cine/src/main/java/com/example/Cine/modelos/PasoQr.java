package com.example.Cine.modelos;

public class PasoQr {
    private String sede;
    private String pelicula;
    private int sala;    
    private String fecha;
    private String hora;
    private int boletos;
    private String nombreSala;    


    // CONSTRUCTORES//
    public PasoQr(String Sede, String Pelicula, int Sala, String Fecha, String Hora,
            int Boletos, String nombreSala) {

        this.sede = Sede;
        this.pelicula = Pelicula;
        this.sala = Sala;
        this.fecha = Fecha;
        this.hora = Hora;
        this.boletos = Boletos;
        this.nombreSala = nombreSala;        
    }

    public PasoQr() {}

    // getter//

    public String getSede() {
        return sede;
    }

    public String getPelicula() {
        return pelicula;
    }

    public int getSala() {
        return sala;
    }

    public String getFecha() {
        return fecha;
    }

    public String getHora() {
        return hora;
    }

    public int getBoletos() {
        return boletos;
    }

    public String getNombreSala(){
        return nombreSala;
    }

}
