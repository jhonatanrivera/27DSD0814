using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using AccesoDatos;

namespace LogicaNegocios
{
    public class LogicaUsuario
    {
        public EntidadUsuario ValidaUsuario(string strDNI)
        {
            DatosUsuario objDatosUsuario = new DatosUsuario();
            EntidadUsuario objUsuario = new EntidadUsuario();

            objUsuario = objDatosUsuario.ValidaUsuario(strDNI);
            return objUsuario;
        }
    }
}
