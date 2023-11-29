package com.example.Cine.Services;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

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
}