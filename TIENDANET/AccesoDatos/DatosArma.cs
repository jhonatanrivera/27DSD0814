using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Entidades;
using System.Data.SqlClient;

namespace AccesoDatos
{
    public class DatosArma : Conexion
    {
        public List<EntidadArma> ListarCatalogo()
        {
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("CatalogoArmas", con);
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drCatalogo = com.ExecuteReader();
            List<EntidadArma> Catalogo = new List<EntidadArma>();

            while (drCatalogo.Read())
            {
                Catalogo.Add(CargarCatalogo(drCatalogo));
            }

            drCatalogo.Close();
            con.Close();
            return Catalogo;
        }

        private EntidadArma CargarCatalogo(SqlDataReader drCatalogo)
        {
            EntidadArma Catalogo = new EntidadArma();
            Catalogo.SerieArma = drCatalogo["Serie_Arma"].ToString();
            Catalogo.Descripcion = drCatalogo["Descripcion"].ToString();
            Catalogo.Caracteristicas = drCatalogo["Caracteristicas"].ToString();
            Catalogo.Marca = drCatalogo["Marca"].ToString();
            Catalogo.Precio = double.Parse(drCatalogo["Precio"].ToString());
            Catalogo.Categoria = int.Parse(drCatalogo["Categoria"].ToString());
            Catalogo.Autorizacion = int.Parse(drCatalogo["Autorizacion"].ToString());
            Catalogo.Url_Imagen = drCatalogo["Url_Imagen"].ToString();
            Catalogo.Url_Imagen2 = drCatalogo["Url_Imagen2"].ToString();
            Catalogo.FechaIngreso = drCatalogo["Fe_Ingreso"].ToString();

            return Catalogo;

        }

        public EntidadArma DetalleArma(string strSerieArma)
        {
            EntidadArma Arma = new EntidadArma();
            string strCadenaConexion = DevuelveConexion();
            SqlConnection con = new SqlConnection(strCadenaConexion);
            SqlCommand com = new SqlCommand("DetalleArma", con);
            com.Parameters.Add(new SqlParameter("SerieArma", strSerieArma));            
            com.CommandType = System.Data.CommandType.StoredProcedure;

            con.Open();

            SqlDataReader drArma = com.ExecuteReader();

            if (drArma.Read())
            {
                Arma.SerieArma = drArma["Serie_Arma"].ToString();
                Arma.Descripcion = drArma["Descripcion"].ToString();
                Arma.Caracteristicas = drArma["Caracteristicas"].ToString();
                Arma.Marca = drArma["Marca"].ToString();
                Arma.Precio = double.Parse(drArma["Precio"].ToString());
                Arma.Categoria = int.Parse(drArma["Categoria"].ToString());
                Arma.Autorizacion = int.Parse(drArma["Autorizacion"].ToString());
                Arma.Url_Imagen = drArma["Url_Imagen"].ToString();
                Arma.Url_Imagen2 = drArma["Url_Imagen2"].ToString();
                Arma.FechaIngreso = drArma["Fe_Ingreso"].ToString();
            }

            drArma.Close();
            con.Close();
            return Arma;
        }  
    }
}
