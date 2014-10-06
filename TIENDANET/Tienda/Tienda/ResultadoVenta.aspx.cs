using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Tienda
{
    public partial class ResultadoVenta : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {

                if (Request["IdRespuesta"] != null)
                {
                    switch (Request["IdRespuesta"].ToString())
                    {
                        case "1":
                            lblResultado.Text = "Su solicitud de compra ha sido registrada. Por favor acercarse a caja para realizar el pago";
                            break;
                    }
                }
                else
                {
                    Response.Redirect("Default.aspx", false); 
                }

            }
        }
    }
}