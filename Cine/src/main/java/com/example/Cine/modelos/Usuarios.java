package com.example.Cine.modelos;

public class Usuarios {
    private int id_usuario; 
    private String nombre; 
    private String apellido;  
    private String email;  
    private String telefono;  
    private String tipoUsuario;  
    private String contraseña;  
    private String confirmarContraseña;   
    private String fechaNacimiento; 
    private byte[] peliculas_Vistas;
    
    //Constructor para iniciar sesion
    public Usuarios(String email, String contraseña) {
        this.email = email;
        this.contraseña = contraseña;
    }
    
    public int getId_usuario() {
        return id_usuario;
    }
    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public String getTipoUsuario() {
        return tipoUsuario;
    }
    public void setTipoUsuario(String tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }
    public String getContraseña() {
        return contraseña;
    }
    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }
    public String getConfirmarContraseña() {
        return confirmarContraseña;
    }
    public void setConfirmarContraseña(String confirmarContraseña) {
        this.confirmarContraseña = confirmarContraseña;
    }
    public String getFechaNacimiento() {
        return fechaNacimiento;
    }
    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
    public byte[] getPeliculas_Vistas() {
        return peliculas_Vistas;
    }
    public void setPeliculas_Vistas(byte[] peliculas_Vistas) {
        this.peliculas_Vistas = peliculas_Vistas;
    }  

    
}

