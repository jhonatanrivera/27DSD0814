using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using System.Data.SqlClient;

namespace AccesoDatos
{
    public class DatosVendedor:Conexion 
    {
        public EntidadVendedor Login(string strUsuario, string strContrasena)
        {
            EntidadVendedor Vendedor = new EntidadVendedor();
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("Login", con);
            com.Parameters.Add(new SqlParameter("Usuario", strUsuario));
            com.Parameters.Add(new SqlParameter("Contrasena", strContrasena));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drVendedor = com.ExecuteReader();

            if (drVendedor.Read())
            {
                Vendedor.CodVendedor = int.Parse(drVendedor["Cod_Vendedor"].ToString());
                Vendedor.Usuario = drVendedor["Usuario"].ToString();
                Vendedor.Contrasena = drVendedor["Contrasena"].ToString();
                Vendedor.Nombres = drVendedor["Nombres"].ToString();
                Vendedor.ApellidoPaterno = drVendedor["ApellidoPaterno"].ToString();
                Vendedor.ApellidoMaterno = drVendedor["ApellidoMaterno"].ToString();
            }

            drVendedor.Close();
            con.Close();
            return Vendedor;
        }  
    }
}
