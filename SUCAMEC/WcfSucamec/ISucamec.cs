using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using Entidades;

namespace WcfSucamec
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de interfaz "IService1" en el código y en el archivo de configuración a la vez.
    [ServiceContract]
    public interface ISucamec
    {
        [OperationContract]
        int RegistraTramite(int TipoTramite, int CodTienda, string Tienda, int CodSolicitud, string DNI,
                                   string SerieArma, int Estado, string Nombres, string ApellidoPaterno, string ApellidoMaterno,
                                   string Sexo, string Email, string Celular, string Direccion);
        
        
    }

    
}
