using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Entidades;
using LogicaNegocios;

namespace Tienda
{
    public partial class _Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
              CatalogoArmas();
            }
        }

        private void CatalogoArmas()
        {
            List<EntidadArma> Catalogo = new List<EntidadArma>();
            LogicaArma objLogicaArma = new LogicaArma();
            Catalogo = objLogicaArma.ListarCatalogo();
          
            foreach (EntidadArma drArma in Catalogo)
            {
                TableRow tblFilaCatalogo1 = new TableRow();
                TableRow tblFilaCatalogo2 = new TableRow();
                TableCell tblCeldaCatalogo1 = new TableCell();
                TableCell tblCeldaCatalogo2 = new TableCell();
                TableCell tblCeldaCatalogo3 = new TableCell();

                tblCeldaCatalogo1.Text = drArma.Descripcion + "<br/> Marca: " + drArma.Marca + "<p><a href='DetalleArma.aspx?Id=" + drArma .SerieArma + "'>Ver más</a>";
                tblCeldaCatalogo1.VerticalAlign = VerticalAlign.Top; 
                tblCeldaCatalogo2.Text = "<img src='iconos/" + drArma.Url_Imagen + "'  border='0'/>";
                tblCeldaCatalogo3.Text = "<hr/>";
                tblCeldaCatalogo3.ColumnSpan = 2;                

                tblFilaCatalogo1.Cells.Add(tblCeldaCatalogo1); 
                tblFilaCatalogo1.Cells.Add(tblCeldaCatalogo2);
                tblFilaCatalogo2.Cells.Add(tblCeldaCatalogo3);                     

                tblCatalogo.Rows.Add(tblFilaCatalogo1);
                tblCatalogo.Rows.Add(tblFilaCatalogo2);
                
            }
             
        }
    }
}
