using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Entidades;
using LogicaNegocios;
using Recursos;

namespace Tienda
{
    public partial class VentaArmas : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                if (Session["Usuario"] == null)
                {
                    Response.Redirect("Account/Login.aspx", false);
                }
                else
                {
                    ListaArmas();
                }                    
            }
        }

        private void ListaArmas()
        {
            List<EntidadVenta> Armas = new List<EntidadVenta>();
            LogicaVenta objLogica = new LogicaVenta();

            Armas = objLogica.ArmasPorEstado((int)Enumeraciones.Estados.Pendiente);
            grdArmas.DataSource = Armas;
            grdArmas.DataBind(); 
        }

        protected void grdArmas_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Seleccionar")
            {
                DataKey CodRegistro;
                CodRegistro = grdArmas.DataKeys[int.Parse(e.CommandArgument.ToString())];

                Session.Add("CodRegistro", CodRegistro.Value.ToString());
                Response.Redirect("DetalleVentaArma.aspx", false);
            }
        }

        protected void btnBuscar_Click(object sender, EventArgs e)
        {
            List<EntidadVenta> Armas = new List<EntidadVenta>();
            LogicaVenta objLogica = new LogicaVenta();

            Armas = objLogica.ArmasPorDNIEstado((int)Enumeraciones.Estados.Pendiente, txtDNI.Text.Trim());
            grdArmas.DataSource = Armas;
            grdArmas.DataBind(); 
        }
    }
}