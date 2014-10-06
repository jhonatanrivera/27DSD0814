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
    public partial class DetalleArma : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                LogicaArma objLogica = new LogicaArma();
                EntidadArma Arma = new EntidadArma();

                if (Request["Id"] != null)
                {
                    Arma = objLogica.DetalleArma(Request["Id"].ToString());
                    if (Arma != null)
                    {
                        imgArma.ImageUrl = "iconos/" + Arma.Url_Imagen2;
                        lblDescripcion.Text = "<b>Descripcion:</b> " + Arma.Descripcion;
                        lblCaracteristicas.Text = "<b>Caracteristicas:</b> " + Arma.Caracteristicas;
                        lblMarca.Text = "<b>Marca:</b> " + Arma.Marca;
                        lblPrecio.Text = "<b>Precio:</b> " + Arma.Precio.ToString();
                    }
                }
                else
                {
                    Response.Redirect("Default.aspx", false); 
                }

            }
        }

        protected void btnConfirmar_Click(object sender, EventArgs e)
        {
            LogicaUsuario objLogica = new LogicaUsuario();
            EntidadUsuario Usuario = new EntidadUsuario();
            Usuario = objLogica.ValidaUsuario(txtDNI.Text.Trim());
            if (Usuario.ApellidoMaterno == null)
            {
                lblMensaje.Text = "Usuario no existe"; 
            }
            else
            {
                LogicaVenta objLogicaVenta = new LogicaVenta();
                int intResultado = 0;
                intResultado = objLogicaVenta.RegistraPreVenta(Request["Id"].ToString(), (int)Enumeraciones.Estados.Pendiente, txtDNI.Text.Trim());
                Response.Redirect("ResultadoVenta.aspx?IdRespuesta=1", false); 
            }
        }
    }
}