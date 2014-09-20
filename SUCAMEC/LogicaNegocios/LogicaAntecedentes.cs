using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using AccesoDatos;

namespace LogicaNegocios
{
    public class LogicaAntecedentes
    {
        public List<EntidadAntecedente> BuscarAntecedentes(string strDNI)
        {
            DatosAntecedentes objDatosAntecedentes = new DatosAntecedentes();
            List<EntidadAntecedente> objAntecedentes = new List<EntidadAntecedente>();

            objAntecedentes = objDatosAntecedentes.BuscarAntecedentes(strDNI);
            return objAntecedentes;
        }
    }
}
