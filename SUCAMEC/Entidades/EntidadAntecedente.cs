using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.Serialization; 

namespace Entidades
{
    [DataContract]
    public class EntidadAntecedente
    {
        [DataMember]
        public int intCodigo { get; set; }
        [DataMember]
        public string strDNI { get; set; }
        [DataMember]
        public string strEstado { get; set; }
        [DataMember]
        public string strCodigoAntecedente { get; set; }

        public string DNICiudadanoJudicial { get; set; }
        public string EstadoJudicial { get; set; }
        public string CodigoJudicial { get; set; }
        public string DNICiudadanoPenal { get; set; }
        public string EstadoPenal { get; set; }
        public string CodigoPenal { get; set; }
        public string DNICiudadanoPolicial { get; set; }
        public string EstadoPolicial { get; set; }
        public string CodigoPolicial { get; set; }
    }
}
