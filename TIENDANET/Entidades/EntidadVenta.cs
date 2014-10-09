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
        public int CodVendedor { get; set; }
        public string Nombres { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string DNI { get; set; }
        public string Marca { get; set; }
        public string Descripcion { get; set; }
        public double Precio { get; set; }
        public string Sexo { get; set; }
        public string Email { get; set; }
        public string Celular { get; set; }
        public string Direccion { get; set; }
        public string DescripcionTipoPago { get; set; }
        public string AntecedentePolicial { get; set; }
        public string AntecedenteJudicial { get; set; }
        public string AntecedentePenal { get; set; }
        public string DescripcionEstado { get; set; }
    }
}
