using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using System.Data.SqlClient;

namespace AccesoDatos
{
    public class DatosLicencia:Conexion
    {
        public int RegistraLicencia(int intCodTramite, int intEstadoLicencia, int intEstadoTramite,
                                                          string strEstadoAntecedentePolicial, string strCodigoAntecedentePolicial,
                                                          string strEstadoAntecedenteJudicial, string strCodigoAntecedenteJudicial,
                                                          string strEstadoAntecedentePenal, string strCodigoAntecedentePenal)
        {
            int intResultado = 0;
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("RegistraLicencia", con);
            com.Parameters.Add(new SqlParameter("CodTramite", intCodTramite));
            com.Parameters.Add(new SqlParameter("EstadoLicencia", intEstadoLicencia));
            com.Parameters.Add(new SqlParameter("EstadoTramite", intEstadoTramite));
            com.Parameters.Add(new SqlParameter("APolicial", strEstadoAntecedentePolicial));
            com.Parameters.Add(new SqlParameter("APolicialCod", strCodigoAntecedentePolicial));
            com.Parameters.Add(new SqlParameter("AJudicial", strEstadoAntecedenteJudicial));
            com.Parameters.Add(new SqlParameter("AJudicialCod", strCodigoAntecedenteJudicial));
            com.Parameters.Add(new SqlParameter("APenal", strEstadoAntecedentePenal));
            com.Parameters.Add(new SqlParameter("APenalCod", strCodigoAntecedentePenal));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();
            intResultado = com.ExecuteNonQuery();
            con.Close();

            return intResultado;
        }

        public EntidadTramite DatosLicenciaTramitada(int intCodTramite)
        {
            EntidadTramite Licencia = new EntidadTramite();
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("DatosLicenciaTramitada", con);
            com.Parameters.Add(new SqlParameter("CodTramite", intCodTramite));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drLicencia = com.ExecuteReader();

            if (drLicencia.Read())
            {
                Licencia.CodTramite = int.Parse(drLicencia["Cod_Tramite"].ToString());
                Licencia.CodCiudadano = int.Parse(drLicencia["Cod_Ciudadano"].ToString());
                Licencia.SerieArma = drLicencia["Serie_Arma"].ToString();
                Licencia.Tienda = drLicencia["Tienda"].ToString();
                Licencia.CodSolicitud = int.Parse(drLicencia["Cod_Solicitud"].ToString());
                Licencia.NombreCiudadano = drLicencia["Nombres"].ToString();
                Licencia.ApellidoPaternoCiudadano = drLicencia["Ap_Paterno"].ToString();
                Licencia.ApellidoMaternoCiudadano = drLicencia["Ap_Materno"].ToString();
                Licencia.DNICiudadano = drLicencia["DNI"].ToString();
                Licencia.NumeroLicencia = drLicencia["Nro_Licencia"].ToString();
                Licencia.FechaEmision = drLicencia["Fe_Emision"].ToString();
                Licencia.Fechavencimiento = drLicencia["Fe_Vencimiento"].ToString();
            }

            drLicencia.Close();
            con.Close();
            return Licencia;
        }

        public EntidadTramite DatosLicenciaRechazada(int intCodTramite)
        {
            EntidadTramite Licencia = new EntidadTramite();
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("DatosLicenciaRechazada", con);
            com.Parameters.Add(new SqlParameter("CodTramite", intCodTramite));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drLicencia = com.ExecuteReader();

            if (drLicencia.Read())
            {
                Licencia.CodTramite = int.Parse(drLicencia["Cod_Tramite"].ToString());
                Licencia.CodCiudadano = int.Parse(drLicencia["Cod_Ciudadano"].ToString());
                Licencia.SerieArma = drLicencia["Serie_Arma"].ToString();
                Licencia.Tienda = drLicencia["Tienda"].ToString();
                Licencia.CodSolicitud = int.Parse(drLicencia["Cod_Solicitud"].ToString());
                Licencia.NombreCiudadano = drLicencia["Nombres"].ToString();
                Licencia.ApellidoPaternoCiudadano = drLicencia["Ap_Paterno"].ToString();
                Licencia.ApellidoMaternoCiudadano = drLicencia["Ap_Materno"].ToString();
                Licencia.DNICiudadano = drLicencia["DNI"].ToString();
                Licencia.EstadoPolicial = drLicencia["A_Policial"].ToString();
                Licencia.CodigoPolicial = drLicencia["A_Policial_Cod"].ToString();
                Licencia.EstadoJudicial = drLicencia["A_Judicial"].ToString();
                Licencia.CodigoJudicial = drLicencia["A_Judicial_Cod"].ToString();
                Licencia.EstadoPenal = drLicencia["A_Penal"].ToString();
                Licencia.CodigoPenal = drLicencia["A_Penal_Cod"].ToString();
            }

            drLicencia.Close();
            con.Close();
            return Licencia;
        }  
    }
}
