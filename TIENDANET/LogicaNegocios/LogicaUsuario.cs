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

        public int RegistraUsuario(string strNombres, string strApellidoPaterno, string strApellidoMaterno,
                                   string strDNI, string strSexo, string strFechaNacimiento, string strEmail,
                                   string strCelular, string strDireccion)
        {
            DatosUsuario objDatosUsuario = new DatosUsuario();
            int intResultado = 0;

            intResultado = objDatosUsuario.RegistraUsuario(strNombres, strApellidoPaterno, strApellidoMaterno,
                                                           strDNI, strSexo, strFechaNacimiento, strEmail, strCelular, 
                                                           strDireccion);
            return intResultado;
        }
    }
}
