﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using System.Data.SqlClient;

namespace AccesoDatos
{
    public class DatosUsuario:Conexion 
    {
        public EntidadUsuario ValidaUsuario(string strDNI)
        {
            EntidadUsuario Usuario = new EntidadUsuario();
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("ValidaUsuario", con);
            com.Parameters.Add(new SqlParameter("DNI", strDNI));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drUsuario = com.ExecuteReader();

            if (drUsuario.Read())
            {
                Usuario.CodUsuario = int.Parse(drUsuario["Cod_Usuario"].ToString());
                Usuario.DNI = drUsuario["DNI"].ToString();
                Usuario.Nombres = drUsuario["Nombres"].ToString();
                Usuario.ApellidoPaterno = drUsuario["Ap_Paterno"].ToString();
                Usuario.ApellidoMaterno = drUsuario["Ap_Materno"].ToString();                
            }

            drUsuario.Close();
            con.Close();
            return Usuario;
        }  
    }
}