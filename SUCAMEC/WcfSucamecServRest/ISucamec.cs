using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.ServiceModel.Web;
using Entidades;

namespace WcfSucamecServRest
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de interfaz "IService1" en el código y en el archivo de configuración a la vez.
    [ServiceContract]
    public interface ISucamec
    {
        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "Sucamec", ResponseFormat = WebMessageFormat.Json)]
        int RegistraTramite(EntidadTramiteRest Tramite);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "Sucamec2", ResponseFormat = WebMessageFormat.Json)]
        int RegistraTramite2(int TipoTramite, int CodTienda, string Tienda, int CodSolicitud, string DNI,
                                   string SerieArma, int Estado, string Nombres, string ApellidoPaterno, string ApellidoMaterno,
                                   string Sexo, string Email, string Celular, string Direccion);
    }

   
}
