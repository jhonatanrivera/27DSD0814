using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using AccesoDatos;

namespace LogicaNegocios
{
    public class LogicaVenta
    {
        public int RegistraPreVenta(string strSerieArma, int intEstado, string strDNI)
        {
            DatosVenta objDatosVenta = new DatosVenta();
            int intResultado = 0;

            intResultado = objDatosVenta.RegistraPreVenta(strSerieArma, intEstado, strDNI);
            return intResultado;
        }

        public List<EntidadVenta> ArmasPorEstado(int intEstado)
        {
            DatosVenta objDatosVenta = new DatosVenta();
            List<EntidadVenta> objListaArmas = new List<EntidadVenta>();

            objListaArmas = objDatosVenta.ArmasPorEstado(intEstado);
            return objListaArmas;
        }

        public List<EntidadVenta> ArmasPorDNIEstado(int intEstado, string strDNI)
        {
            DatosVenta objDatosVenta = new DatosVenta();
            List<EntidadVenta> objListaArmas = new List<EntidadVenta>();

            objListaArmas = objDatosVenta.ArmasPorDNIEstado(intEstado, strDNI);
            return objListaArmas;
        }

        public EntidadVenta DetallePreVenta(int CodRegistro)
        {
            DatosVenta objDatosVenta = new DatosVenta();
            EntidadVenta objVenta = new EntidadVenta();

            objVenta = objDatosVenta.DetallePreVenta(CodRegistro);
            return objVenta;
        }

        public int RegistraVenta(int CodRegistro, int TipoPago, int Estado, int CodVendedor)
        {
            DatosVenta objDatosVenta = new DatosVenta();
            int intResultado = 0;

            intResultado = objDatosVenta.RegistraVenta(CodRegistro, TipoPago, Estado, CodVendedor);
            return intResultado;
        }

        public int RecibeSucamec(int intCodRegistro, int intEstado, string strFechaRespuesta, int intCodSucamec, 
                                string strNumeroLicencia, string strEstadoAntecedentePolicial, 
                                string strEstadoAntecedenteJudicial, string strEstadoAntecedentePenal)
        {
            DatosVenta objDatosVenta = new DatosVenta();
            int intResultado = 0;

            intResultado = objDatosVenta.RecibeSucamec(intCodRegistro, intEstado, strFechaRespuesta, intCodSucamec,
                           strNumeroLicencia, strEstadoAntecedentePolicial, strEstadoAntecedenteJudicial, strEstadoAntecedentePenal);
            return intResultado;
        }

        public List<EntidadVenta> BuscaLicenciaPorDNI(string strDNI, string strNumeroLicencia)
        {
            DatosVenta objDatosVenta = new DatosVenta();
            List<EntidadVenta> objLicencia = new List<EntidadVenta>();

            objLicencia = objDatosVenta.BuscaLicenciaPorDNI(strDNI, strNumeroLicencia);
            return objLicencia;
        }

        public EntidadVenta DetalleEntregaArma(int CodRegistro)
        {
            DatosVenta objDatosVenta = new DatosVenta();
            EntidadVenta objVenta = new EntidadVenta();

            objVenta = objDatosVenta.DetalleEntregaArma(CodRegistro);
            return objVenta;
        }

        public int ActualizaEntregaArma(int intCodRegistro, int intEstado)
        {
            DatosVenta objDatosVenta = new DatosVenta();
            int intResultado = 0;

            intResultado = objDatosVenta.ActualizaEntregaArma(intCodRegistro, intEstado);
            return intResultado;
        }
    }
}
