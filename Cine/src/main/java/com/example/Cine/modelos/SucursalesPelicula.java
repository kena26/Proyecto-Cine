package com.example.Cine.modelos;


public class SucursalesPelicula {


    private int idSucursal;
    private int idPelicula;


    public SucursalesPelicula() {
        
    }

    public SucursalesPelicula(int idSucursal, int idPelicula) {
        this.idSucursal = idSucursal;
        this.idPelicula = idPelicula;
    }



    public SucursalesPelicula(boolean b) {
    }

    public int getIdSucursal() {
        return idSucursal;
    }

    public void setIdSucursal(int idSucursal) {
        this.idSucursal = idSucursal;
    }

    public int getIdPelicula() {
        return idPelicula;
    }

    public void setIdPelicula(int idPelicula) {
        this.idPelicula = idPelicula;
    }

}
