package com.example.Cine.Services;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.example.Cine.modelos.Productos;

public class CineDb {
  Connection cn;

  public CineDb() {
    cn = new Conexion().openDb();
  }
  

  public List<Productos> ObtenerProductos() {
    
    try {
      Statement stmt = cn.createStatement();
      String query = "SELECT * FROM Producto";

      List<Productos> productos = new ArrayList<>();
      ResultSet result = stmt.executeQuery(query);
      while (result.next()) {
        Productos producto = new Productos(
            result.getString("cod_Producto"),
            result.getString("nombre"),
            result.getString("idProv")
        );
        
        productos.add(producto);
      }

      result.close();
      stmt.close();
      return productos;

    } catch (Exception e) {
      int x = 1;
    }
    return null;
  }
}
