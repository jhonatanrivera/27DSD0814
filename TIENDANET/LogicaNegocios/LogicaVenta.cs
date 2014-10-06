using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using AccesoDatos;

namespace LogicaNegocios
{
    public class LogicaVenta
    {
        public int RegistraPreVenta(string strSerieArma, int intEstado, string strDNI)
        {
            DatosVenta objDatosVenta = new DatosVenta();
            int intResultado = 0;

            intResultado = objDatosVenta.RegistraPreVenta(strSerieArma, intEstado, strDNI);
            return intResultado;
        }
    }
}
