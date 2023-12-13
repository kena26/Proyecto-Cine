package com.example.Cine.modelos;

public class Boletos2 {
    private int cantidad;
    private int mes;
    private int cantidadTicket;
    private int totalXSucursal;

    public Boletos2() {
    }

    public Boletos2(int cantidad, int mes, int cantidadTicket, int totalXSucursal) {
        this.cantidad = cantidad;
        this.mes = mes;
        this.cantidadTicket = cantidadTicket;
        this.totalXSucursal = totalXSucursal;
    }

    public int getCantidad() {
        return cantidad;
    }

    public int getMes() {
        return mes;
    }

    public int getCantidadTicket() {
        return cantidadTicket;
    }

    public int getTotalXSucursal() {
        return totalXSucursal;
    }

}
