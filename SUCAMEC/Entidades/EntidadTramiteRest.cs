using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.Serialization;

namespace Entidades
{
    [DataContract]
    public class EntidadTramiteRest
    {
        [DataMember]
        public int TipoTramite { get; set; }
        [DataMember]
        public int CodTienda { get; set; }
        [DataMember]
        public string Tienda { get; set; }
        [DataMember]
        public int CodSolicitud { get; set; }
        [DataMember]
        public string DNI { get; set; }
        [DataMember]
        public string SerieArma { get; set; }
        [DataMember]
        public int Estado { get; set; }
        [DataMember]
        public string Nombres { get; set; }
        [DataMember]
        public string ApellidoPaterno { get; set; }
        [DataMember]
        public string ApellidoMaterno { get; set; }
        [DataMember]
        public string Sexo { get; set; }
        [DataMember]
        public string Email { get; set; }
        [DataMember]
        public string Celular { get; set; }
        [DataMember]
        public string Direccion { get; set; }        
    }
}
