using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using System.Data.SqlClient;

namespace AccesoDatos
{
    public class DatosTramite:Conexion
    {
        public List<EntidadTramite> LicenciasPorTramitar(int intEstado)
        {
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("LicenciasPorTramitar", con);
            com.Parameters.Add(new SqlParameter("Estado", intEstado));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drLicenciasPorTramitar = com.ExecuteReader();
            List<EntidadTramite> LicenciasPorTramitar = new List<EntidadTramite>();

            while (drLicenciasPorTramitar.Read())
            {
                LicenciasPorTramitar.Add(CargarLicencias(drLicenciasPorTramitar));
            }

            drLicenciasPorTramitar.Close();
            con.Close();
            return LicenciasPorTramitar;
        }

        public List<EntidadTramite> LicenciasPorTramitarPorDNI(string strDNI, int intEstado)
        {
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("BuscaLicenciasPorDNI", con);
            com.Parameters.Add(new SqlParameter("DNI", strDNI));
            com.Parameters.Add(new SqlParameter("Estado", intEstado));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drLicenciasPorTramitar = com.ExecuteReader();
            List<EntidadTramite> LicenciasPorTramitar = new List<EntidadTramite>();

            while (drLicenciasPorTramitar.Read())
            {
                LicenciasPorTramitar.Add(CargarLicencias(drLicenciasPorTramitar));
            }

            drLicenciasPorTramitar.Close();
            con.Close();
            return LicenciasPorTramitar;
        }

        public EntidadTramite DatosLicenciaPorTramitar(int intCodTramite)
        {
            EntidadTramite Licencia = new EntidadTramite();
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("DatosLicenciaPorTramitar", con);
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
            }

            drLicencia.Close();
            con.Close();
            return Licencia;
        }        

        private EntidadTramite CargarLicencias(SqlDataReader drLicencia)
        {
            EntidadTramite Licencia = new EntidadTramite();
            Licencia.CodTramite = int.Parse(drLicencia["Cod_Tramite"].ToString());
            Licencia.CodCiudadano = int.Parse(drLicencia["Cod_Ciudadano"].ToString());
            Licencia.NombreCiudadano = drLicencia["Nombres"].ToString();
            Licencia.ApellidoPaternoCiudadano = drLicencia["Ap_Paterno"].ToString();
            Licencia.ApellidoMaternoCiudadano = drLicencia["Ap_Materno"].ToString();
            Licencia.DNICiudadano = drLicencia["DNI"].ToString();

            return Licencia;

        }

        public int RegistraTramite(int TipoTramite, int CodTienda, string Tienda, int CodSolicitud, string DNI,
                                   string SerieArma, int Estado, string Nombres, string ApellidoPaterno, string ApellidoMaterno,
                                   string Sexo, string Email, string Celular, string Direccion)
        {
            int intResultado = 0;
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("RegistraTramite", con);
            com.Parameters.Add(new SqlParameter("TipoTramite", TipoTramite));
            com.Parameters.Add(new SqlParameter("CodTienda", CodTienda));
            com.Parameters.Add(new SqlParameter("Tienda", Tienda));
            com.Parameters.Add(new SqlParameter("CodSolicitud", CodSolicitud));
            com.Parameters.Add(new SqlParameter("DNI", DNI));
            com.Parameters.Add(new SqlParameter("SerieArma", SerieArma));
            com.Parameters.Add(new SqlParameter("Estado", Estado));
            com.Parameters.Add(new SqlParameter("Nombres", Nombres));
            com.Parameters.Add(new SqlParameter("ApellidoPaterno", ApellidoPaterno));
            com.Parameters.Add(new SqlParameter("ApellidoMaterno", ApellidoMaterno));
            com.Parameters.Add(new SqlParameter("Sexo", Sexo));
            com.Parameters.Add(new SqlParameter("Email", Email));
            com.Parameters.Add(new SqlParameter("Celular", Celular));
            com.Parameters.Add(new SqlParameter("Direccion", Direccion));

            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();
            intResultado = com.ExecuteNonQuery();
            con.Close();

            return intResultado;
        }
    }
}
