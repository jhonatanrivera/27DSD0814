using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using Entidades;
using LogicaNegocios;

namespace WcfAntecedentes
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de clase "Service1" en el código y en el archivo de configuración a la vez.
    public class Antecedentes : IAntecedentes
    {        
        public List<EntidadAntecedente> BuscarAntecedentes(string strDNI)
        {
            LogicaAntecedentes objLogica = new LogicaAntecedentes();
            List<EntidadAntecedente> ListaAntecedentes = new List<EntidadAntecedente>();
            ListaAntecedentes = objLogica.BuscarAntecedentes(strDNI);
            return ListaAntecedentes;
        }        
    }
}
