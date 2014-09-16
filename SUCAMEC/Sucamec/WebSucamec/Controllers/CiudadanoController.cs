using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Entidades;
using LogicaNegocios;
using WebSucamec.Models;

namespace WebSucamec.Controllers
{
    public class CiudadanoController : Controller
    {
        //
        // GET: /Ciudadano/
        [HttpGet]
        public ActionResult Listado()
        {
            ListadoCiudadanoModel objModel = new ListadoCiudadanoModel();
            LogicaCiudadano objListado = new LogicaCiudadano();
            objModel.objListado = objListado.ListarCiudadanos();


            return View(objModel);
        }

        [HttpPost]
        public ActionResult Listado(ListadoCiudadanoModel objModel)
        {
             
            LogicaCiudadano objListado = new LogicaCiudadano();
            objModel.objListado = objListado.ListarCiudadanos();


            return View(objModel);
        }

    }
}
