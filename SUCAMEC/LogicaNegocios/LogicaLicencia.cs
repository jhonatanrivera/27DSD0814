using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AccesoDatos;
using Entidades;

namespace LogicaNegocios
{
    public class LogicaLicencia
    {
        public string RegistraLicencia(int intCodTramite, int intEstadoLicencia, int intEstadoTramite,
                                                          string strEstadoAntecedentePolicial, string strCodigoAntecedentePolicial,
                                                          string strEstadoAntecedenteJudicial, string strCodigoAntecedenteJudicial,
                                                          string strEstadoAntecedentePenal, string strCodigoAntecedentePenal)
        {
            DatosLicencia objDatosLicencia = new DatosLicencia();
            string strNumeroLicencia = "";

            strNumeroLicencia = objDatosLicencia.RegistraLicencia(intCodTramite, intEstadoLicencia, intEstadoTramite,
                                                          strEstadoAntecedentePolicial, strCodigoAntecedentePolicial,
                                                          strEstadoAntecedenteJudicial, strCodigoAntecedenteJudicial,
                                                          strEstadoAntecedentePenal, strCodigoAntecedentePenal);
            return strNumeroLicencia;
        }

        public EntidadTramite DatosLicenciaTramitada(int intCodTramite)
        {
            DatosLicencia objDatosTramite = new DatosLicencia();
            EntidadTramite objLicenciaTramitada = new EntidadTramite();

            objLicenciaTramitada = objDatosTramite.DatosLicenciaTramitada(intCodTramite);
            return objLicenciaTramitada;
        }

        public EntidadTramite DatosLicenciaRechazada(int intCodTramite)
        {
            DatosLicencia objDatosTramite = new DatosLicencia();
            EntidadTramite objLicenciaRechazada = new EntidadTramite();

            objLicenciaRechazada = objDatosTramite.DatosLicenciaRechazada(intCodTramite);
            return objLicenciaRechazada;
        }

        public int RechazarLicencia(int intCodTramite, int intEstadoTramite, string strEstadoAntecedentePolicial,
                                    string strCodigoAntecedentePolicial, string strEstadoAntecedenteJudicial,
                                    string strCodigoAntecedenteJudicial, string strEstadoAntecedentePenal,
                                    string strCodigoAntecedentePenal)
        {
            DatosLicencia objDatosLicencia = new DatosLicencia();
            int intResultado = 0;

            intResultado = objDatosLicencia.RechazarLicencia(intCodTramite, intEstadoTramite, strEstadoAntecedentePolicial,
                                                            strCodigoAntecedentePolicial, strEstadoAntecedenteJudicial,                                                                
                                                            strCodigoAntecedenteJudicial, strEstadoAntecedentePenal, 
                                                            strCodigoAntecedentePenal);
            return intResultado;
        }
    }
}
