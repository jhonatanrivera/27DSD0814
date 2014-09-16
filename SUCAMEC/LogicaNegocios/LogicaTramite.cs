using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using AccesoDatos;

namespace LogicaNegocios
{
    public class LogicaTramite
    {
        public List<EntidadTramite> LicenciasPorTramitar(int intEstado)
        {
            DatosTramite objDatosTramite = new DatosTramite();
            List<EntidadTramite> objListaPorTramitar = new List<EntidadTramite>();

            objListaPorTramitar = objDatosTramite.LicenciasPorTramitar(intEstado);
            return objListaPorTramitar;
        }

        public List<EntidadTramite> LicenciasPorTramitarPorDNI(string strDNI, int intEstado)
        {
            DatosTramite objDatosTramite = new DatosTramite();
            List<EntidadTramite> objListaPorTramitar = new List<EntidadTramite>();

            objListaPorTramitar = objDatosTramite.LicenciasPorTramitarPorDNI(strDNI, intEstado);
            return objListaPorTramitar;
        }

        public EntidadTramite DatosLicenciaPorTramitar(int intCodTramite)
        {
            DatosTramite objDatosTramite = new DatosTramite();
            EntidadTramite objLicenciaPorTramitar = new EntidadTramite();

            objLicenciaPorTramitar = objDatosTramite.DatosLicenciaPorTramitar(intCodTramite);
            return objLicenciaPorTramitar;
        }
    }
}
