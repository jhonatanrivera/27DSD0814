using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Recursos
{
    public class Enumeraciones
    {
        public enum EstadosTramite
        {
            Pendiente = 1,
            Rechazado = 2,
            Aceptado = 3            
        }

        public enum EstadosLicencia
        {            
            Vigente = 1,
            Vencido = 2,
            Anulado = 3,
            Rechazado = 4
        }
    }
}
