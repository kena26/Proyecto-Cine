package com.example.Cine.Services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public Connection openDb() {
        try {
            Class.forName("org.mariadb.jdbc.Driver");
            String user = "db_a937a5_123_admin";
            String contraseña = "*PicoroGohan74_";
            return DriverManager.getConnection("jdbc:mariadb:/http://sql8006.site4now.net:3306/db_a937a5_123", user, contraseña);
          } catch (SQLException e) {
            System.out.println("conexion exitosa");
            int x = 1;
          } catch (ClassNotFoundException cnfex) {
            System.out.println("ERROR");
            int x = 1;
          }
          return null;
    }
}