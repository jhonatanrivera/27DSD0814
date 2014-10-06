using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using System.Data.SqlClient;

namespace AccesoDatos
{
    public class DatosVenta:Conexion
    {
        public int RegistraPreVenta(string strSerieArma, int intEstado, string strDNI)
        {
            int intResultado = 0;
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("RegistraPreVenta", con);
            com.Parameters.Add(new SqlParameter("SerieArma", strSerieArma));
            com.Parameters.Add(new SqlParameter("Estado", intEstado));
            com.Parameters.Add(new SqlParameter("DNI", strDNI));            
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();
            intResultado = com.ExecuteNonQuery();
            con.Close();

            return intResultado;
        }
    }
}
