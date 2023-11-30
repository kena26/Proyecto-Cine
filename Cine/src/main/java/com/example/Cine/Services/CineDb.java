package com.example.Cine.Services;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.Cine.modelos.Actor;
import com.example.Cine.modelos.Pelicula;
import com.example.Cine.modelos.Usuarios;

public class CineDb {
  Connection cn;

    public CineDb() {
        cn = new Conexion().openDb();
    }

    // Pantalla de inicio de sesion
    public String login(String correo, String contrasena) {
        String resultado = "Iniciando Sesion...";
        try {
            Statement stmt = cn.createStatement();
            String query = "SELECT * FROM Usuario";
            ResultSet result = stmt.executeQuery(query);
            boolean usuarioEncontrado = false;

            while (result.next()) {
                Usuarios usuario = new Usuarios(result.getString("email"), result.getString("contrasena"));

                if (correo != null && correo.equals(usuario.getEmail())) {
                    usuarioEncontrado = true;

                    if (contrasena.equals(usuario.getContrasena())) {
                        
                        return "Inicio de sesión exitoso";
                    } else {
                        return "Error de contraseña";
                    }
                }
            }

            // Verificar si se encontró un usuario con el correo proporcionado
            if (!usuarioEncontrado) {
                return "El correo no está registrado";
            }

            result.close();
            stmt.close();

        } catch (SQLException e) {
            resultado = "Error en el inicio de sesión";
        }
        return resultado;
    }

    // Obtener datos del usuario por email y contraseña
    public Usuarios obtenerDatosUsuario(String email, String contrasena) {
        String query = "SELECT id_usuario, nombre, apellido, email, telefono, tipoUsuario, fechaNacimiento FROM Usuario WHERE email = ? AND contrasena = ?";
        try (PreparedStatement pstmt = cn.prepareStatement(query)) {
            pstmt.setString(1, email);
            pstmt.setString(2, contrasena);

            try (ResultSet resultSet = pstmt.executeQuery()) {
                if (resultSet.next()) {
                    Usuarios usuario = new Usuarios();
                    usuario.setId_usuario(resultSet.getInt("id_usuario"));
                    usuario.setNombre(resultSet.getString("nombre"));
                    usuario.setApellido(resultSet.getString("apellido"));
                    usuario.setEmail(resultSet.getString("email")); 
                    usuario.setTelefono(resultSet.getString("telefono"));
                    usuario.setTipoUsuario(resultSet.getString("tipoUsuario"));
                    usuario.setFechaNacimiento(resultSet.getString("fechaNacimiento"));

                    return usuario;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    // Pantalla de registro
    public String registro(Usuarios usuario) {
        String resultado = "Registrando cuenta de usuario...";
        try {
            String query = "CALL InsertarUsuario(?, ?, ?, ?, ?, ?, ?, ?)";

            try (PreparedStatement pstmt = cn.prepareStatement(query)) {
                pstmt.setString(1, usuario.getNombre());
                pstmt.setString(2, usuario.getApellido());
                pstmt.setString(3, usuario.getEmail());
                pstmt.setString(4, usuario.getTelefono());
                pstmt.setString(5, usuario.getTipoUsuario());
                pstmt.setString(6, usuario.getContrasena());
                pstmt.setString(7, usuario.getConfirmarContrasena());
                pstmt.setString(8, usuario.getFechaNacimiento());

                pstmt.executeUpdate();
                cn.commit();
            }

            return "Registro exitoso";
        } catch (SQLException e) {
            e.printStackTrace();
            resultado = "Error en el inicio de sesión: " + e.getMessage();
        }
        return resultado;
    }
    

    // Obtener lista de usuarios
    public List<Usuarios> obtenerUsuarios() {
        List<Usuarios> usuarios = new ArrayList<>();
        try {
            Statement stmt = cn.createStatement();
            String query = "SELECT * FROM Usuario";
            ResultSet result = stmt.executeQuery(query);

            while (result.next()) {
                Usuarios usuario = new Usuarios(result.getInt("id_usuario"), result.getString("nombre"),
                        result.getString("apellido"), result.getString("email"), result.getString("telefono"),
                        result.getString("tipoUsuario"), result.getString("contrasena"),
                        result.getString("confirmarContrasena"), result.getString("fechaNacimiento"),
                        result.getBytes("peliculas_Vistas"));
                usuarios.add(usuario);
            }

            result.close();
            stmt.close();

        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error al obtener información de registro");
        }
        return usuarios;
    }

    // Obtener usuario por correo
    public Usuarios obtenerUsuarioPorCorreo(String correo) {
        String query = "SELECT * FROM Usuario WHERE email = ?";
        try (PreparedStatement pstmt = cn.prepareStatement(query)) {
            pstmt.setString(1, correo);
            ResultSet result = pstmt.executeQuery();

            if (result.next()) {
                return new Usuarios(result.getInt("id_usuario"), result.getString("nombre"),
                        result.getString("apellido"), result.getString("email"), result.getString("telefono"),
                        result.getString("tipoUsuario"), result.getString("contrasena"),
                        result.getString("confirmarContrasena"), result.getString("fechaNacimiento"),
                        result.getBytes("peliculas_Vistas"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    public void actualizarDatosUsuario(Usuarios usuario) {
    try {
        String query = "UPDATE Usuario SET nombre = ?, apellido = ?, fechaNacimiento = ?, email = ?, telefono = ? WHERE id_usuario = ?";
        try (PreparedStatement pstmt = cn.prepareStatement(query)) {
                pstmt.setString(1, usuario.getNombre());
                pstmt.setString(2, usuario.getApellido());
                pstmt.setString(3, usuario.getFechaNacimiento());
                pstmt.setString(4, usuario.getEmail());
                pstmt.setString(5, usuario.getTelefono());
                pstmt.setInt(6, usuario.getId_usuario());

                pstmt.executeUpdate();
                cn.commit();
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error al actualizar los datos del usuario");
        }
    }

    public boolean agregarPelicula(Pelicula pelicula) {
    try {
        String query = "INSERT INTO Pelicula(duracion, director, sinopsis, clasificacion, genero, nombrePelicula, trailer, id_tipoP, foto_poster) " +
                       "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (PreparedStatement pstmt = cn.prepareStatement(query)) {
            pstmt.setString(1, pelicula.getDuracion());
            pstmt.setString(2, pelicula.getDirector());
            pstmt.setString(3, pelicula.getSinopsis());
            pstmt.setString(4, pelicula.getClasificacion());
            pstmt.setString(5, pelicula.getGenero());
            pstmt.setString(6, pelicula.getNombrePelicula());
            pstmt.setString(7, pelicula.getTrailer());
            pstmt.setString(8, pelicula.getId_tipoP());
            pstmt.setString(9, pelicula.getFoto_poster());


            int rowsAffected = pstmt.executeUpdate();
            cn.commit();

            return rowsAffected > 0;
        }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error al agregar la película a la base de datos: " + e.getMessage());
            return false;
        }
    }



	public List<Pelicula> obtenerTodasLasPeliculas() {
    List<Pelicula> peliculas = new ArrayList<>();
    try {
        Statement stmt = cn.createStatement();
        String query = "SELECT * FROM Pelicula";
        ResultSet result = stmt.executeQuery(query);

        while (result.next()) {
            Pelicula pelicula = new Pelicula(
                    result.getString("id_pelicula"),
                    result.getString("duracion"),
                    result.getString("director"),
                    result.getString("sinopsis"),
                    result.getString("clasificacion"),
                    result.getString("genero"),  
                    result.getFloat("precio"),
                    result.getString("nombrePelicula"),
                    result.getString("trailer"),
                    result.getString("id_tipoP"),
                    result.getString("id_Qr"),
                    result.getString("foto_poster"),
                    result.getString("IDactor")
            );
            peliculas.add(pelicula);
        }

        result.close();
        stmt.close();
    } catch (SQLException e) {
        e.printStackTrace();
        System.out.println("Error al obtener todas las películas: " + e.getMessage());
    }
    return peliculas;
}

	public Pelicula BuscarPelicula(int idPelicula) {
    try {
        String query = "SELECT * FROM Pelicula WHERE id_pelicula = ?";
        try (PreparedStatement pstmt = cn.prepareStatement(query)) {
            pstmt.setInt(1, idPelicula);
            ResultSet resultSet = pstmt.executeQuery();

            if (resultSet.next()) {
                Pelicula pelicula = new Pelicula(
                    resultSet.getString("id_pelicula"),
                    resultSet.getString("duracion"),
                    resultSet.getString("director"),
                    resultSet.getString("sinopsis"),
                    resultSet.getString("clasificacion"),
                    resultSet.getString("genero"),
                    resultSet.getFloat("precio"),
                    resultSet.getString("nombrePelicula"),
                    resultSet.getString("trailer"),
                    resultSet.getString("id_tipoP"),
                    resultSet.getString("id_Qr"),
                    resultSet.getString("foto_poster"),
                    resultSet.getString("IDactor")
                );

                return pelicula;
            }
        }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error al buscar la película en la base de datos: " + e.getMessage());
        }
        return null;
    }

	public boolean agregarActor(Actor actor) {
		try {
        String query = "INSERT INTO Actor(nombreActor, apellidoActor, perfil) VALUES (?, ?, ?)";
        
            try (PreparedStatement pstmt = cn.prepareStatement(query)) {
                pstmt.setString(1, actor.getNombreActor());
                pstmt.setString(2, actor.getApellidoActor());
                pstmt.setString(3, actor.getPerfil());

                int rowsAffected = pstmt.executeUpdate();
                cn.commit();

                return rowsAffected > 0;
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error al agregar el actor a la base de datos: " + e.getMessage());
            return false;
        }
	}

    public void eliminarPelicula(String idPelicula) {
    System.out.println("ID de película a eliminar: " + idPelicula);
    try {
        String query = "DELETE FROM Pelicula WHERE id_pelicula = ?";

            try (PreparedStatement pstmt = cn.prepareStatement(query)) {
                pstmt.setString(1, idPelicula);
                pstmt.executeUpdate();
            }

            System.out.println("Película eliminada exitosamente");
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error al eliminar la película: " + e.getMessage());
        }
    }

    public boolean actualizarPelicula(String idPeli, Pelicula peliculaActualizada) {
        try {
            if (existePelicula(idPeli)) {
                
                String query = "UPDATE Pelicula SET duracion=?, director=?, sinopsis=?, clasificacion=?, genero=?, "
                        + "nombrePelicula=?, trailer=?, id_tipoP=?, foto_poster=? WHERE id_pelicula=?";

                try (PreparedStatement pstmt = cn.prepareStatement(query)) {
                    pstmt.setString(1, peliculaActualizada.getDuracion());
                    pstmt.setString(2, peliculaActualizada.getDirector());
                    pstmt.setString(3, peliculaActualizada.getSinopsis());
                    pstmt.setString(4, peliculaActualizada.getClasificacion());
                    pstmt.setString(5, peliculaActualizada.getGenero());
                    pstmt.setString(6, peliculaActualizada.getNombrePelicula());
                    pstmt.setString(7, peliculaActualizada.getTrailer());
                    pstmt.setString(8, peliculaActualizada.getId_tipoP());
                    pstmt.setString(9, peliculaActualizada.getFoto_poster());
                    pstmt.setString(10, idPeli);

                    
                    int rowsAffected = pstmt.executeUpdate();

                    
                    return rowsAffected > 0;
                }
            } else {
                
                return false;
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error al actualizar la película en la base de datos: " + e.getMessage());
            return false;
        }
    }

    private boolean existePelicula(String idPeli) throws SQLException {
        
        String query = "SELECT id_pelicula FROM Pelicula WHERE id_pelicula = ?";
        try (PreparedStatement pstmt = cn.prepareStatement(query)) {
            pstmt.setString(1, idPeli);
            ResultSet resultSet = pstmt.executeQuery();

            
            return resultSet.next();
        }
    }
}