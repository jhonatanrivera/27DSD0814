﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Recursos;
using Entidades;
using LogicaNegocios;

namespace Tienda
{
    public partial class EntregaArmas : System.Web.UI.Page
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

            Armas = objLogica.ArmasPorEstado((int)Enumeraciones.Estados.AceptadoSucamec);
            grdArmas.DataSource = Armas;
            grdArmas.DataBind();
        }

        protected void btnBuscar_Click(object sender, EventArgs e)
        {
            List<EntidadVenta> Licencia = new List<EntidadVenta>();
            LogicaVenta objLogica = new LogicaVenta();

            Licencia = objLogica.BuscaLicenciaPorDNI(txtDNI.Text.Trim(), txtLicencia.Text.Trim());
            grdArmas.DataSource = Licencia;
            grdArmas.DataBind();
        }

        protected void grdArmas_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Seleccionar")
            {
                DataKey CodRegistro;
                CodRegistro = grdArmas.DataKeys[int.Parse(e.CommandArgument.ToString())];

                Session.Add("CodRegistro", CodRegistro.Value.ToString());
                Response.Redirect("DetalleEntregaArma.aspx", false);
            }
        }
    }
}