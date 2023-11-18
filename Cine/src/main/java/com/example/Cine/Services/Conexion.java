package com.example.Cine.Services;

import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Component
public class Conexion {
    public Connection openDb() {
        try {
            Class.forName("org.mariadb.jdbc.Driver");
            String usuario = "peter_parker";
            String contraseña = "0ct0plus85*";
            return DriverManager.getConnection("jdbc:mariadb://mariadb-17648-0.cloudclusters.net:17664/cine123", usuario, contraseña);
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("Error en la conexión a la base de datos");
        } catch (ClassNotFoundException cnfex) {
            cnfex.printStackTrace();
            System.out.println("Error de clase no encontrada");
        }
        return null;
    }
}
