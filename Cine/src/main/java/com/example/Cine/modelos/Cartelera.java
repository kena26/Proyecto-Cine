package com.example.Cine.modelos;

public class Cartelera {
    private String Provincia;
    private String hora;
    private String titulo;
    private String genero;
    private String cine;
    private String sala;
    private String duracion;
    private boolean estado;
    private String foto_poster;
    private String fechaEstreno;
    private int id_cartelera;
    private String clasificacion;
    private int id_pelicula;

    //CONSTRUCTORES//
    public Cartelera(String provincia, String hora, String titulo, String genero, String cine, String sala,
            String duracion, boolean estado, String foto_poster, String fechaEstreno,int id_cartelera, String clasificacion,
            int id_pelicula) {
        this.Provincia = provincia;
        this.hora = hora;
        this.titulo = titulo;
        this.genero = genero;
        this.cine = cine;
        this.sala = sala;
        this.duracion = duracion;
        this.estado = estado;
        this.foto_poster = foto_poster;
        this.fechaEstreno = fechaEstreno;
        this.id_cartelera = id_cartelera;
        this.clasificacion = clasificacion;
        this.id_pelicula = id_pelicula;
    }
    
    public Cartelera() {

    }

    public String getProvincia() {
        return this.Provincia;
    }
    
    public String getHora() {
        return this.hora;
    }    
      
    public String getSala() {
        return this.sala;
    }
    
    public String getDuracion() {
        return this.duracion;
    }
       
    public boolean getEstado() {
        return this.estado;
    }
    
    public String getFoto_poster() {
        return this.foto_poster;
    }

    public String getFechaEstreno() {
        return this.fechaEstreno;
    }

    public void setProvincia(String provincia) {
        Provincia = provincia;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getCine() {
        return this.cine;
    }

    public void setCine(String cine) {
        this.cine = cine;
    }

    public void setSala(String sala) {
        this.sala = sala;
    }

    public void setDuracion(String duracion) {
        this.duracion = duracion;
    }

    public void setEstado(boolean estado) {
        this.estado = estado;
    }

    public void setFoto_poster(String foto_poster) {
        this.foto_poster = foto_poster;
    }

    public void setFechaEstreno(String fechaEstreno) {
        this.fechaEstreno = fechaEstreno;
    }

    public int getId_cartelera() {
        return id_cartelera;
    }

    public void setId_cartelera(int id_cartelera) {
        this.id_cartelera = id_cartelera;
    }

    public String getClasificacion() {
        return clasificacion;
    }

    public int getId_pelicula() {
        return id_pelicula;
    }

    
}