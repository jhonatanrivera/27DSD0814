using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using System.Data.SqlClient;

namespace AccesoDatos
{
    public class DatosVenta:Conexion
    {
        public int RegistraPreVenta(string strSerieArma, int intEstado, string strDNI)
        {
            int intResultado = 0;
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("RegistraPreVenta", con);
            com.Parameters.Add(new SqlParameter("SerieArma", strSerieArma));
            com.Parameters.Add(new SqlParameter("Estado", intEstado));
            com.Parameters.Add(new SqlParameter("DNI", strDNI));            
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();
            intResultado = com.ExecuteNonQuery();
            con.Close();

            return intResultado;
        }

        public List<EntidadVenta> ArmasPorEstado(int intEstado)
        {
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("ArmasPorEstado", con);
            com.Parameters.Add(new SqlParameter("Estado", intEstado));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drArmasPorEstado = com.ExecuteReader();
            List<EntidadVenta> ArmasPorEstado = new List<EntidadVenta>();

            while (drArmasPorEstado.Read())
            {
                ArmasPorEstado.Add(CargarArmas(drArmasPorEstado));
            }

            drArmasPorEstado.Close();
            con.Close();
            return ArmasPorEstado;
        }

        public List<EntidadVenta> ArmasPorDNIEstado(int intEstado, string strDNI)
        {
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("ArmasPorDNIEstado", con);
            com.Parameters.Add(new SqlParameter("Estado", intEstado));
            com.Parameters.Add(new SqlParameter("DNI", strDNI));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drArmasPorEstado = com.ExecuteReader();
            List<EntidadVenta> ArmasPorEstado = new List<EntidadVenta>();

            while (drArmasPorEstado.Read())
            {
                ArmasPorEstado.Add(CargarArmas(drArmasPorEstado));
            }

            drArmasPorEstado.Close();
            con.Close();
            return ArmasPorEstado;
        }

        private EntidadVenta CargarArmas(SqlDataReader drArmas)
        {
            EntidadVenta Armas = new EntidadVenta();
            Armas.CodRegistro = int.Parse(drArmas["Cod_Registro"].ToString());
            Armas.CodUsuario = int.Parse(drArmas["Cod_Usuario"].ToString());
            Armas.SerieArma = drArmas["Serie_Arma"].ToString();
            Armas.TipoPago = int.Parse(drArmas["Tipo_Pago"].ToString());
            Armas.FechaRegistro = drArmas["Fe_Registro"].ToString();
            Armas.Estado = int.Parse(drArmas["Estado"].ToString());
            Armas.FechaRespuesta = drArmas["Fe_Respuesta"].ToString();
            Armas.CodSucamec = int.Parse(drArmas["Cod_Sucamec"].ToString());
            Armas.NumeroLicencia = drArmas["Nro_Licencia"].ToString();
            Armas.FechaEntrega = drArmas["Fe_Entrega"].ToString();
            Armas.CodVendedor = int.Parse(drArmas["Cod_Vendedor"].ToString());
            Armas.Nombres = drArmas["Nombres"].ToString();
            Armas.ApellidoPaterno = drArmas["Ap_Paterno"].ToString();
            Armas.ApellidoMaterno = drArmas["Ap_Materno"].ToString();
            Armas.DNI = drArmas["DNI"].ToString();
            Armas.Descripcion = drArmas["Descripcion"].ToString();

            return Armas;

        }

        public EntidadVenta DetallePreVenta(int CodRegistro)
        {
            EntidadVenta PreVenta = new EntidadVenta();
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("DetallePreVenta", con);
            com.Parameters.Add(new SqlParameter("CodRegistro", CodRegistro));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drPreVenta = com.ExecuteReader();

            if (drPreVenta.Read())
            {
                PreVenta.Nombres = drPreVenta["Nombres"].ToString();
                PreVenta.ApellidoPaterno = drPreVenta["Ap_Paterno"].ToString();
                PreVenta.ApellidoMaterno = drPreVenta["Ap_Materno"].ToString();
                PreVenta.DNI = drPreVenta["DNI"].ToString();
                PreVenta.Marca = drPreVenta["Marca"].ToString();
                PreVenta.Descripcion = drPreVenta["Descripcion"].ToString();
                PreVenta.Precio = double.Parse(drPreVenta["Precio"].ToString());
                PreVenta.SerieArma = drPreVenta["Serie_Arma"].ToString();
                PreVenta.Sexo = drPreVenta["Sexo"].ToString();
                PreVenta.Email = drPreVenta["Email"].ToString();
                PreVenta.Celular = drPreVenta["Celular"].ToString();
                PreVenta.Direccion = drPreVenta["Direccion"].ToString();
            }

            drPreVenta.Close();
            con.Close();
            return PreVenta;
        }

        public int RegistraVenta(int CodRegistro, int TipoPago, int Estado, int CodVendedor)
        {
            int intResultado = 0;
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("RegistrarVenta", con);
            com.Parameters.Add(new SqlParameter("CodRegistro", CodRegistro));
            com.Parameters.Add(new SqlParameter("TipoPago", TipoPago));
            com.Parameters.Add(new SqlParameter("Estado", Estado));
            com.Parameters.Add(new SqlParameter("CodVendedor", CodVendedor));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();
            intResultado = com.ExecuteNonQuery();
            con.Close();

            return intResultado;
        }

        public int RecibeSucamec(int intCodRegistro, int intEstado, string strFechaRespuesta, int intCodSucamec,
                                string strNumeroLicencia, string strEstadoAntecedentePolicial, 
                                string strEstadoAntecedenteJudicial, string strEstadoAntecedentePenal)
        {
            int intResultado = 0;
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("RecibeSucamec", con);
            com.Parameters.Add(new SqlParameter("CodRegistro", intCodRegistro));
            com.Parameters.Add(new SqlParameter("Estado", intEstado));
            com.Parameters.Add(new SqlParameter("FechaRespuesta", strFechaRespuesta));
            com.Parameters.Add(new SqlParameter("CodSucamec", intCodSucamec));
            com.Parameters.Add(new SqlParameter("NroLicencia", strNumeroLicencia));
            com.Parameters.Add(new SqlParameter("A_Policial", strEstadoAntecedentePolicial));
            com.Parameters.Add(new SqlParameter("A_Judicial", strEstadoAntecedenteJudicial));
            com.Parameters.Add(new SqlParameter("A_Penal", strEstadoAntecedentePenal));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();
            intResultado = com.ExecuteNonQuery();
            con.Close();

            return intResultado;
        }

        public List<EntidadVenta> BuscaLicenciaPorDNI(string strDNI, string strNumeroLicencia)
        {
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("BuscaLicenciaPorDNI", con);
            com.Parameters.Add(new SqlParameter("DNI", strDNI));
            com.Parameters.Add(new SqlParameter("NumeroLicencia", strNumeroLicencia));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drLicencias = com.ExecuteReader();
            List<EntidadVenta> Licencias = new List<EntidadVenta>();

            while (drLicencias.Read())
            {
                Licencias.Add(CargarLicencias(drLicencias));
            }

            drLicencias.Close();
            con.Close();
            return Licencias;
        }

        private EntidadVenta CargarLicencias(SqlDataReader drLicencias)
        {
            EntidadVenta Licencias = new EntidadVenta();
            Licencias.CodRegistro = int.Parse(drLicencias["Cod_Registro"].ToString());
            Licencias.NumeroLicencia = drLicencias["Nro_Licencia"].ToString();
            Licencias.Nombres = drLicencias["Nombres"].ToString();
            Licencias.ApellidoPaterno = drLicencias["Ap_Paterno"].ToString();
            Licencias.ApellidoMaterno = drLicencias["Ap_Materno"].ToString();
            Licencias.DNI = drLicencias["DNI"].ToString();

            return Licencias;

        }

        public EntidadVenta DetalleEntregaArma(int CodRegistro)
        {
            EntidadVenta DetalleArma = new EntidadVenta();
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("DetalleEntregaArma", con);
            com.Parameters.Add(new SqlParameter("CodRegistro", CodRegistro));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drDetalleArma = com.ExecuteReader();

            if (drDetalleArma.Read())
            {
                DetalleArma.Nombres = drDetalleArma["Nombres"].ToString();
                DetalleArma.ApellidoPaterno = drDetalleArma["Ap_Paterno"].ToString();
                DetalleArma.ApellidoMaterno = drDetalleArma["Ap_Materno"].ToString();
                DetalleArma.DNI = drDetalleArma["DNI"].ToString();
                DetalleArma.Marca = drDetalleArma["Marca"].ToString();
                DetalleArma.Descripcion = drDetalleArma["Descripcion"].ToString();                
                DetalleArma.SerieArma = drDetalleArma["Serie_Arma"].ToString();
                DetalleArma.Precio = double.Parse(drDetalleArma["Precio"].ToString());
                DetalleArma.DescripcionTipoPago = drDetalleArma["Tipo_Pago"].ToString();
                DetalleArma.CodSucamec = int.Parse(drDetalleArma["Cod_Sucamec"].ToString());
                DetalleArma.NumeroLicencia = drDetalleArma["Nro_Licencia"].ToString();
                DetalleArma.AntecedentePolicial = drDetalleArma["A_Policial"].ToString();
                DetalleArma.AntecedenteJudicial = drDetalleArma["A_Judicial"].ToString();
                DetalleArma.AntecedentePenal = drDetalleArma["A_Penal"].ToString();
                DetalleArma.DescripcionEstado = drDetalleArma["Estado"].ToString();                                
            }

            drDetalleArma.Close();
            con.Close();
            return DetalleArma;
        }

        public int ActualizaEntregaArma(int intCodRegistro, int intEstado)
        {
            int intResultado = 0;
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("ActualizaEntregaArma", con);
            com.Parameters.Add(new SqlParameter("CodRegistro", intCodRegistro));
            com.Parameters.Add(new SqlParameter("Estado", intEstado));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();
            intResultado = com.ExecuteNonQuery();
            con.Close();

            return intResultado;
        }
    }
}
