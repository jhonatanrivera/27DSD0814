using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using LogicaNegocios;

namespace WcfSucamec
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de clase "Service1" en el código y en el archivo de configuración a la vez.
    public class Sucamec : ISucamec
    {
        public int RegistraTramite(int TipoTramite, int CodTienda, string Tienda, int CodSolicitud, string DNI,
                                   string SerieArma, int Estado, string Nombres, string ApellidoPaterno, string ApellidoMaterno,
                                   string Sexo, string Email, string Celular, string Direccion)
        {
            LogicaTramite objLogica = new LogicaTramite();
            int intResultado = 0;

            intResultado = objLogica.RegistraTramite(TipoTramite, CodTienda, Tienda, CodSolicitud, DNI, SerieArma, Estado, Nombres,
                                                    ApellidoPaterno, ApellidoMaterno, Sexo, Email, Celular, Direccion);

            return intResultado;
        }       
    }
}
