using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Entidades
{
    public class EntidadTramite
    {
        public int CodTramite { get; set; }
        public int CodCiudadano { get; set; }
        public string NombreCiudadano { get; set; }
        public string ApellidoPaternoCiudadano { get; set; }
        public string ApellidoMaternoCiudadano { get; set; }
        public string DNICiudadano { get; set; }
        public string SerieArma { get; set; }
        public string Tienda { get; set; }
        public int CodSolicitud { get; set; }
        public string DNICiudadanoJudicial { get; set; }
        public string EstadoJudicial { get; set; }
        public string CodigoJudicial { get; set; }
        public string DNICiudadanoPenal { get; set; }
        public string EstadoPenal { get; set; }
        public string CodigoPenal { get; set; }
        public string DNICiudadanoPolicial { get; set; }
        public string EstadoPolicial { get; set; }
        public string CodigoPolicial { get; set; }
        public string NumeroLicencia { get; set; }
        public string FechaEmision { get; set; }
        public string Fechavencimiento { get; set; }

    }
}
