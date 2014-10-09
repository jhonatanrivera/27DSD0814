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

        public int RegistraTramite(int TipoTramite, int CodTienda, string Tienda, int CodSolicitud, string DNI,
                                   string SerieArma, int Estado, string Nombres, string ApellidoPaterno, string ApellidoMaterno,
                                   string Sexo, string Email, string Celular, string Direccion)
        {
            DatosTramite objDatosTramite = new DatosTramite();
            int intResultado = 0;

            intResultado = objDatosTramite.RegistraTramite(TipoTramite, CodTienda, Tienda, CodSolicitud, DNI, SerieArma, Estado, 
                                                            Nombres, ApellidoPaterno, ApellidoMaterno, Sexo, Email, Celular, 
                                                            Direccion);
            return intResultado;
        }
    }
}
