using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Entidades
{
    public class EntidadVenta
    {
        public int CodRegistro { get; set; }
        public int CodUsuario { get; set; }
        public string SerieArma { get; set; }
        public int TipoPago { get; set; }
        public string FechaRegistro { get; set; }
        public int Estado { get; set; }
        public string FechaRespuesta { get; set; }
        public int CodSucamec { get; set; }
        public string NumeroLicencia { get; set; }
        public string FechaEntrega { get; set; }
    }
}
