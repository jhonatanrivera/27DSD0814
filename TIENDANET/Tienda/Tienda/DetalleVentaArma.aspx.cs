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
    public partial class DetalleVentaArma : System.Web.UI.Page
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
                    DetallePreVenta();
                }
            }
        }

        private void DetallePreVenta()
        {
            EntidadVenta DetalleArma = new EntidadVenta();
            LogicaVenta objLogica = new LogicaVenta();

            DetalleArma = objLogica.DetallePreVenta(int.Parse(Session["CodRegistro"].ToString()));
            lblNombre.Text = DetalleArma.Nombres;
            lblApellidoPaterno.Text = DetalleArma.ApellidoPaterno;
            lblApellidoMaterno.Text = DetalleArma.ApellidoMaterno;
            lblDNI.Text = DetalleArma.DNI;
            lblMarca.Text = DetalleArma.Marca;
            lblDescripcion.Text = DetalleArma.Descripcion;
            lblPrecio.Text = DetalleArma.Precio.ToString();
            lblSerieArma.Text = DetalleArma.SerieArma;
            lblSexo.Text = DetalleArma.Sexo;
            lblEmail.Text = DetalleArma.Email;
            lblCelular.Text = DetalleArma.Celular;
            lblDireccion.Text = DetalleArma.Direccion;
            
        }

        protected void btnRegistrar_Click(object sender, EventArgs e)
        {
            LogicaVenta objLogica = new LogicaVenta();
            int intResultado = 0;
            int intResultado2 = 0;
            intResultado = objLogica.RegistraVenta(int.Parse(Session["CodRegistro"].ToString()), int.Parse(rbTipoPago.SelectedItem.Value.ToString()), (int)Enumeraciones.Estados.Tramitado, int.Parse(Session["CodVendedor"].ToString()));
            if (intResultado == -1)
            {
                //Registra en SUCAMEC 1
                //ServicioSucamec.SucamecClient objServicio = new ServicioSucamec.SucamecClient();
                //intResultado2 = objServicio.RegistraTramite(1, 1, "ARMAQ SA", int.Parse(Session["CodRegistro"].ToString()), lblDNI.Text,
                //                            lblSerieArma.Text, (int)Enumeraciones.Estados.Pendiente, lblNombre.Text,
                //                            lblApellidoPaterno.Text, lblApellidoMaterno.Text, lblSexo.Text, lblEmail.Text,
                //                            lblCelular.Text, lblDireccion.Text);
                //if (intResultado2 == -1)
                //{
                //    Response.Redirect("VentaArmas.aspx", false);
                //}                

                //Registra en SUCAMEC 2
                ServicioSucamecRest.SucamecClient objServicio = new ServicioSucamecRest.SucamecClient();
                intResultado2 = objServicio.RegistraTramite2(1, 1, "ARMAQ SA", int.Parse(Session["CodRegistro"].ToString()), lblDNI.Text,
                                            lblSerieArma.Text, (int)Enumeraciones.Estados.Pendiente, lblNombre.Text,
                                            lblApellidoPaterno.Text, lblApellidoMaterno.Text, lblSexo.Text, lblEmail.Text,
                                            lblCelular.Text, lblDireccion.Text);
                if (intResultado2 == -1)
                {
                    Response.Redirect("VentaArmas.aspx", false);
                }                

            }
            
        }
    }
}