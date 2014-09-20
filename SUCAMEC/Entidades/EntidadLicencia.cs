using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Entidades
{
    public class EntidadLicencia
    {
        public string strDNI { get; set; }
        public string strNombres { get; set; }
        public string strApellidoPaterno { get; set; }
        public int intCodTramite { get; set; }
        public int intEstadoLicencia { get; set; }
        public int intEstadoTramite { get; set; }
        public string strEstadoAntecedentePolicial { get; set; }
        public string strCodigoAntecedentePolicial { get; set; }
        public string strEstadoAntecedenteJudicial { get; set; }
        public string strCodigoAntecedenteJudicial { get; set; }
        public string strEstadoAntecedentePenal { get; set; }
        public string strCodigoAntecedentePenal { get; set; }

    }
}
