using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Recursos
{
    public class Enumeraciones
    {
        public enum Estados
        {
            Pendiente = 1,            
            Tramitado = 2,
            AceptadoSucamec = 3,
            RechazadoSucamec = 4,
            AceptadoTienda = 5,
            RechazadoTienda = 6

        }
    }
}
