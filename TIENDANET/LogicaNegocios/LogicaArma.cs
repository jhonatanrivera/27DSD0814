using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using AccesoDatos;

namespace LogicaNegocios
{
    public class LogicaArma
    {
        public List<EntidadArma> ListarCatalogo()
        {
            DatosArma objDatosCatalogo = new DatosArma();
            List<EntidadArma> objListaCatalogo = new List<EntidadArma>();

            objListaCatalogo = objDatosCatalogo.ListarCatalogo();
            return objListaCatalogo;
        }

        public EntidadArma DetalleArma(string strSerieArma)
        {
            DatosArma objDatosArma = new DatosArma();
            EntidadArma objArma = new EntidadArma();

            objArma = objDatosArma.DetalleArma(strSerieArma);
            return objArma;
        }
    }
}
