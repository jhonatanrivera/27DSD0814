using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using AccesoDatos;

namespace LogicaNegocios
{
    public class LogicaCiudadano
    {
        public List<EntidadCiudadano> ListarCiudadanos()
        {
            DatosCiudadano objDatosCiudadano = new DatosCiudadano();
            List<EntidadCiudadano> objListaCiudadanos = new List<EntidadCiudadano>();

            objListaCiudadanos = objDatosCiudadano.ListarCiudadanos();
            return objListaCiudadanos;
        }
    }
}
