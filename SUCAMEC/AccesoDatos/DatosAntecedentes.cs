using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using System.Data.SqlClient;
using System.Data;

namespace AccesoDatos
{
    public class DatosAntecedentes:Conexion
    {
        public List<EntidadAntecedente> BuscarAntecedentes(string strDNI)
        {

            DataSet dsAntecedentes = new DataSet();
            List<EntidadAntecedente> ListaAntecedentes = new List<EntidadAntecedente>();
            string strCadenaConexion = DevuelveConexionAntecedentes();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("ListaAntecedentes", con);
            com.Parameters.Add(new SqlParameter("DNI", strDNI));
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataAdapter daAdapter = new SqlDataAdapter(com);
            daAdapter.Fill(dsAntecedentes);

            ListaAntecedentes = CargarAntecedentes(dsAntecedentes);

            daAdapter.Dispose();
            con.Close();
            return ListaAntecedentes;
        }

        private List<EntidadAntecedente> CargarAntecedentes(DataSet dsAntecedentes)
        {
            List<EntidadAntecedente> ListaFinalAntecedentes = new List<EntidadAntecedente>();
            EntidadAntecedente AntecedenteJudicial = new EntidadAntecedente();
            EntidadAntecedente AntecedentePenal = new EntidadAntecedente();
            EntidadAntecedente AntecedentePolicial = new EntidadAntecedente();

            AntecedenteJudicial.intCodigo = 1;
            AntecedenteJudicial.strDNI = dsAntecedentes.Tables[0].Rows[0]["DNI"].ToString();
            AntecedenteJudicial.strEstado = dsAntecedentes.Tables[0].Rows[0]["Estado"].ToString();
            AntecedenteJudicial.strCodigoAntecedente = dsAntecedentes.Tables[0].Rows[0]["Cod_Antecedente"].ToString();

            AntecedentePenal.intCodigo = 2;
            AntecedentePenal.strDNI = dsAntecedentes.Tables[1].Rows[0]["DNI"].ToString();
            AntecedentePenal.strEstado = dsAntecedentes.Tables[1].Rows[0]["Estado"].ToString();
            AntecedentePenal.strCodigoAntecedente = dsAntecedentes.Tables[1].Rows[0]["Cod_Antecedente"].ToString();

            AntecedentePolicial.intCodigo = 3;
            AntecedentePolicial.strDNI = dsAntecedentes.Tables[2].Rows[0]["DNI"].ToString();
            AntecedentePolicial.strEstado = dsAntecedentes.Tables[2].Rows[0]["Estado"].ToString();
            AntecedentePolicial.strCodigoAntecedente = dsAntecedentes.Tables[2].Rows[0]["Cod_Antecedente"].ToString();

            ListaFinalAntecedentes.Add(AntecedenteJudicial);
            ListaFinalAntecedentes.Add(AntecedentePenal);
            ListaFinalAntecedentes.Add(AntecedentePolicial);

            return ListaFinalAntecedentes;
        }
    }
}
