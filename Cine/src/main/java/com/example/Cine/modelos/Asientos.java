package com.example.Cine.modelos;

public class Asientos {
    private java.lang.String id_Asiento;
    private int Estado;
    
        public Asientos(java.lang.String id_Asiento, int Estado) {
            this.id_Asiento = id_Asiento;
            this.Estado = Estado;
        }

        public java.lang.String getid_Asiento() {
            return id_Asiento;
        }

        public void setid_asiento(java.lang.String id_Asiento) {
            this.id_Asiento = id_Asiento;
        }

        public int getEstado() {
            return Estado;
        }

        public void setEstado(int Estado) {
            this.Estado = Estado;
        }

}
