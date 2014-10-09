using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Entidades;
using LogicaNegocios;

namespace Tienda.Account
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        protected void LoginButton_Click(object sender, EventArgs e)
        {
            if (Page.IsValid)
            {
                LogicaVendedor objLogica = new LogicaVendedor();
                EntidadVendedor Vendedor = new EntidadVendedor();

                Vendedor = objLogica.Login(UserName.Text.Trim(), Password.Text.Trim());
                if (Vendedor.ApellidoMaterno == null)
                {
                    lblMensaje.Text = "Usuario no existe";                    
                }
                else
                {
                    Session.Add("CodVendedor", Vendedor.CodVendedor);
                    Session.Add("Usuario", Vendedor.Usuario); 
                    Response.Redirect("../VentaArmas.aspx", false);
                }
            }
        }
    }
}
