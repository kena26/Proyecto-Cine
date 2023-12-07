package com.example.Cine.modelos;

public class PasoQr {
    private int codigoConfirmacion;
    private String Sede;
    private String Pelicula;
    private int Sala;
    private String Fecha;
    private String Hora;
    private int Boletos;
    private String Transaccion;
    private float totalCompra;
    private String link;

    // CONSTRUCTORES//
    public PasoQr(int codigoConfirmacion, String Sede, String Pelicula, int Sala, String Fecha, String Hora,
            int Boletos, String Transaccion, float totalCompra, String link) {
        this.codigoConfirmacion = codigoConfirmacion;
        this.Sede = Sede;
        this.Pelicula = Pelicula;
        this.Sala = Sala;
        this.Fecha = Fecha;
        this.Hora = Hora;
        this.Boletos = Boletos;
        this.Transaccion = Transaccion;
        this.totalCompra = totalCompra;
        this.link = link;
    }

    public PasoQr() {

    }

    // getter//
    public int getCodigoConfirmacion() {
        return codigoConfirmacion;
    }

    public String getSede() {
        return Sede;
    }

    public String getPelicula() {
        return Pelicula;
    }

    public int getSala() {
        return Sala;
    }

    public String getFecha() {
        return Fecha;
    }

    public String getHora() {
        return Hora;
    }

    public int getBoletos() {
        return Boletos;
    }

    public String getTransaccion() {
        return Transaccion;
    }

    public float getTotalCompra() {
        return totalCompra;
    }

    public String getLink() {
        return link;
    }
}
