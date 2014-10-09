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
    public partial class DetalleEntregaArma : System.Web.UI.Page
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
                    DetalleArma();
                }
            }
        }

        private void DetalleArma()
        {
            EntidadVenta DetalleArma = new EntidadVenta();
            LogicaVenta objLogica = new LogicaVenta();

            DetalleArma = objLogica.DetalleEntregaArma(int.Parse(Session["CodRegistro"].ToString()));
            lblNombre.Text = DetalleArma.Nombres;
            lblApellidoPaterno.Text = DetalleArma.ApellidoPaterno;
            lblApellidoMaterno.Text = DetalleArma.ApellidoMaterno;
            lblDNI.Text = DetalleArma.DNI;
            lblMarca.Text = DetalleArma.Marca;
            lblDescripcion.Text = DetalleArma.Descripcion;
            lblPrecio.Text = DetalleArma.Precio.ToString();
            lblSerieArma.Text = DetalleArma.SerieArma;
            lblFormaPago.Text = DetalleArma.DescripcionTipoPago;
            lblCodigoTramite.Text = DetalleArma.CodSucamec.ToString();
            lblNumeroLicencia.Text = DetalleArma.NumeroLicencia;
            lblAntecendentesPoliciales.Text = DetalleArma.AntecedentePolicial;
            lblAntecendentesJudiciales.Text = DetalleArma.AntecedenteJudicial;
            lblAntecendentesPenales.Text = DetalleArma.AntecedentePenal;
            lblEstado.Text = DetalleArma.DescripcionEstado;
        }

        protected void btnRegistrar_Click(object sender, EventArgs e)
        {
            LogicaVenta objLogica = new LogicaVenta();
            int intResultado = 0;

            intResultado = objLogica.ActualizaEntregaArma(int.Parse(Session["CodRegistro"].ToString()), 
                (int)Enumeraciones.Estados.AceptadoTienda);

            if (intResultado == -1)
                Response.Redirect("EntregaArmas.aspx", false); 
        }

        protected void btnRechazar_Click(object sender, EventArgs e)
        {
            LogicaVenta objLogica = new LogicaVenta();
            int intResultado = 0;

            intResultado = objLogica.ActualizaEntregaArma(int.Parse(Session["CodRegistro"].ToString()),
                (int)Enumeraciones.Estados.RechazadoTienda);

            if (intResultado == -1)
                Response.Redirect("EntregaArmas.aspx", false);
        }
    }
}