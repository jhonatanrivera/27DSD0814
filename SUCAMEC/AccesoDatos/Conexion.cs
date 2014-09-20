using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Configuration;

namespace AccesoDatos
{
    public class Conexion
    {
        public string DevuelveConexion()
        {
            string strCadena = ConfigurationManager.ConnectionStrings["Sucamec"].ConnectionString;
            return strCadena;
        }

        public string DevuelveConexionAntecedentes()
        {
            string strCadena = ConfigurationManager.ConnectionStrings["Antecedentes"].ConnectionString;
            return strCadena;
        }
    }
}
