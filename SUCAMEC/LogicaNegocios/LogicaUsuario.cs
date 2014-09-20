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
        public EntidadUsuario Login(string strUsuario, string strPassword)
        {
            DatosUsuario objDatosUsuario = new DatosUsuario();
            EntidadUsuario objLogin = new EntidadUsuario();

            objLogin = objDatosUsuario.Login(strUsuario, strPassword);
            return objLogin;
        }
    }
}
