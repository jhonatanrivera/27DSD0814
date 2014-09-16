using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using Entidades;

namespace WcfAntecedentes
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de interfaz "IService1" en el código y en el archivo de configuración a la vez.
    [ServiceContract]
    public interface IAntecedentes
    {
        [OperationContract]
        List<EntidadAntecedente> BuscarAntecedentes(string strDNI);       
    }

   
}
