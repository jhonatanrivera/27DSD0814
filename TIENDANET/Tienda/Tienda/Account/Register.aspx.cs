using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using LogicaNegocios;

namespace Tienda.Account
{
    public partial class Register : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

       

        protected void btnGrabar_Click(object sender, EventArgs e)
        {
            if (Page.IsValid)
            {
                LogicaUsuario objLogica = new LogicaUsuario();
                int intResultado = 0;
                intResultado = objLogica.RegistraUsuario(txtNombres.Text.Trim(), txtApellidoPaterno.Text.Trim(), txtApellidoMaterno.Text.Trim(),
                                         txtDNI.Text.Trim(), rbSexo.SelectedItem.Value.ToString(), txtFechaNacimiento.Text.Trim(),
                                         txtEmail.Text.Trim(), txtCelular.Text.Trim(), txtDireccion.Text.Trim());

                if (intResultado == -1)
                    Response.Redirect("Resultado.aspx", false); 

            }
        }

    }
}
