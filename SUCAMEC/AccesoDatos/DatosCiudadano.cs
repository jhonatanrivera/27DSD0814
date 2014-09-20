using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using System.Data.SqlClient;

namespace AccesoDatos
{
    public class DatosCiudadano:Conexion
    {
        public List<EntidadCiudadano> ListarCiudadanos()
        {
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("DevuelveCiudadanos", con);
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drCiudadanos = com.ExecuteReader();
            List<EntidadCiudadano> Ciudadanos = new List<EntidadCiudadano>();

            while (drCiudadanos.Read())
            {
                Ciudadanos.Add(CargarCiudadano(drCiudadanos));
            }

            drCiudadanos.Close();
            con.Close();
            return Ciudadanos;            
        }

        private EntidadCiudadano CargarCiudadano(SqlDataReader drCiudadanos)
        {
            EntidadCiudadano Ciudadano = new EntidadCiudadano();
            Ciudadano.strDNI = drCiudadanos["DNI"].ToString();
            Ciudadano.strNombres = drCiudadanos["Nombres"].ToString();
            Ciudadano.strApellidoPaterno = drCiudadanos["Ap_Paterno"].ToString();

            return Ciudadano;

        }

    }
}
