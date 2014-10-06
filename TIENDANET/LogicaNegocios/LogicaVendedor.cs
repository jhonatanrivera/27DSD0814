using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using AccesoDatos;

namespace LogicaNegocios
{
    public class LogicaVendedor
    {
        public EntidadVendedor Login(string strUsuario, string strContrasena)
        {
            DatosVendedor objDatosVendedor = new DatosVendedor();
            EntidadVendedor objVendedor = new EntidadVendedor();

            objVendedor = objDatosVendedor.Login(strUsuario, strContrasena);
            return objVendedor;
        }
    }
}
