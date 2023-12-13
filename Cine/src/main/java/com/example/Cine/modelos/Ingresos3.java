package com.example.Cine.modelos;

public class Ingresos3 {
    private int idSucursal;
    private int totVentas;

    public Ingresos3() {
    }

    public Ingresos3(int idSucursal, int totVentas) {
        this.idSucursal = idSucursal;
        this.totVentas = totVentas;
    }

    public int getIdSucursal() {
        return idSucursal;
    }

    public int getTotVentas() {
        return totVentas;
    }

}
