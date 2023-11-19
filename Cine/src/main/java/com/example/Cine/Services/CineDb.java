package com.example.Cine.Services;

import java.sql.Statement;
import java.sql.Connection;
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

  //pantalla de inicio de sesion
  public String login(String correo, String contraseña) {
    String resultado = "Iniciando Sesion...";
    try {
        Statement stmt = cn.createStatement();
        String query = "SELECT * FROM Usuario";
        ResultSet result = stmt.executeQuery(query);
        boolean usuarioEncontrado = false;

        while (result.next()) {
            Usuarios usuario = new Usuarios(
                    result.getString("email"),
                    result.getString("contrasena")
            );

            if (correo.equals(usuario.getEmail())) {
                usuarioEncontrado = true;

                if (contraseña.equals(usuario.getContraseña())) {
                    // Aquí puedes realizar acciones adicionales si el inicio de sesión es exitoso
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

  //pantalla de registro
  public String registro(Usuarios usuario) {
    String resultado = "Registrando cuenta de usuario...";
    try {
        Statement stmt = cn.createStatement();
        String query = "Call InsertarUsuario("
                + usuario.getId_usuario() + ",'"
                + usuario.getNombre() + "','" + usuario.getApellido() + "','" + usuario.getEmail() + "','"
                + usuario.getTelefono() + "','" + usuario.getTipoUsuario() + "','" + usuario.getContraseña() + "','"
                + usuario.getConfirmarContraseña() + "','" + usuario.getFechaNacimiento() + "')";

        stmt.executeUpdate(query);

        stmt.close();
        return "Registro exitoso";

    } catch (SQLException e) {
        e.printStackTrace();  
        resultado = "Error al registrar usuario";
    }
    return resultado;
  }

}
