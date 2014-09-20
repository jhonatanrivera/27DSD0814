using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using System.Data.SqlClient;

namespace AccesoDatos
{
    public class DatosUsuario:Conexion
    {
        public EntidadUsuario Login(string strUsuario, string strPassword)
        {
            EntidadUsuario Usuario = new EntidadUsuario();
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("LoginUsuario", con);
            com.Parameters.Add(new SqlParameter("Usuario", strUsuario));
            com.Parameters.Add(new SqlParameter("Password", strPassword));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drLogin = com.ExecuteReader();

            if (drLogin.Read())
            {
                Usuario.CodUsuario = int.Parse(drLogin["Cod_Usuario"].ToString()); 
                Usuario.Usuario = drLogin["Usuario"].ToString(); 
                Usuario.Password = drLogin["Password"].ToString(); 
                Usuario.Nombre = drLogin["Nombre"].ToString(); 
                Usuario.Estado = int.Parse(drLogin["Estado"].ToString());
            }            

            drLogin.Close();
            con.Close();
            return Usuario;
        }        
    }
}
