package com.example.Cine.modelos;

public class Boletos {
    private int cantidad;
    private int mes;
    private int cantidadTicket;

    public Boletos() {
    }

    public Boletos(int cantidad, int mes, int cantidadTicket) {
        this.cantidad = cantidad;
        this.mes = mes;
        this.cantidadTicket = cantidadTicket;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getMes() {
        return mes;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }

    public int getCantidadTicket() {
        return cantidadTicket;
    }

    public void setCantidadTicket(int cantidadTicket) {
        this.cantidadTicket = cantidadTicket;
    }

}
