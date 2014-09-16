using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebSucamec.Models;
using LogicaNegocios;
using Recursos;
using Entidades;
using System.Reflection;

namespace WebSucamec.Controllers
{
    public class LicenciaController : Controller
    {
        //Para que direccione los múltiples submit que se maneja
        public class HttpParamActionAttribute : ActionNameSelectorAttribute
        {
            public override bool IsValidName(ControllerContext controllerContext, string actionName, MethodInfo methodInfo)
            {
                if (actionName.Equals(methodInfo.Name, StringComparison.InvariantCultureIgnoreCase))
                    return true;

                var request = controllerContext.RequestContext.HttpContext.Request;
                return request[methodInfo.Name] != null;
            }
        }

        [HttpGet]
        public ActionResult LicenciasPorTramitar()
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaTramite objLogicaTramite = new LogicaTramite();
            objModel.LicenciasPorTramitar = objLogicaTramite.LicenciasPorTramitar((int)Enumeraciones.EstadosTramite.Pendiente);

            return View(objModel);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]        
        public ActionResult LicenciasPorTramitar(LicenciasPorTramitarModel model)
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaTramite objLogicaTramite = new LogicaTramite();
            List<EntidadTramite> LicenciasPorTramitar = new List<EntidadTramite>();

            if (ModelState.IsValid)
            {
                LicenciasPorTramitar = objLogicaTramite.LicenciasPorTramitarPorDNI(model.DNI, (int)Enumeraciones.EstadosTramite.Pendiente);

                if (LicenciasPorTramitar.Count > 0)
                {
                    objModel.LicenciasPorTramitar = LicenciasPorTramitar;
                    return View(objModel);
                    //return RedirectToAction("LicenciasPorTramitar", "Licencia");
                }

                objModel.LicenciasPorTramitar = LicenciasPorTramitar;
                ModelState.AddModelError("", "No existen licencias por tramitar");
                return View(objModel);
            }
            else
            {
                model.LicenciasPorTramitar = LicenciasPorTramitar;
                return View(model);
            }

        }

        [HttpGet]
        public ActionResult ConformidadLicencia(int IdCodigo)
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaTramite objLogicaTramite = new LogicaTramite();            
            EntidadAntecedente DatosAntecedentes = new EntidadAntecedente();
            objModel.DatosLicenciaPorTramitar = objLogicaTramite.DatosLicenciaPorTramitar(IdCodigo);
            objModel.DatosAntecedentes = DatosAntecedentes;

            return View(objModel);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult ConformidadLicencia(LicenciasPorTramitarModel model)
        {   

            return View(model);
        }

        //[HttpPost]
        //[HttpParamActionAttribute]        
        //[AllowAnonymous]
        //[ValidateAntiForgeryToken]
        //public ActionResult BuscarAntecedentes(LicenciasPorTramitarModel model)
        //{            
        //    List<EntidadAntecedente> ListadoAntecedentes = new List<EntidadAntecedente>();
        //    LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
        //    LogicaTramite objLogicaTramite = new LogicaTramite();            
        //    ServicioAntecedentes.AntecedentesClient objServicios = new ServicioAntecedentes.AntecedentesClient();

        //    ListadoAntecedentes = objServicios.BuscarAntecedentes(model.DNI ).ToList();
        //    /*Aca se puede poner un codigo que diga que si no hay registros en la lista es que no ha iniciado los tramites
        //     de Antecedentes*/

        //    foreach (EntidadAntecedente lista in ListadoAntecedentes)
        //    {
        //        if (lista.intCodigo == 1)
        //        {
        //            objModel.DatosAntecedentes = (EntidadAntecedente)lista; 
        //            //objModel.DatosAntecedentes.DNICiudadanoJudicial = lista.strDNI;
        //            //objModel.DatosAntecedentes.EstadoJudicial = lista.strEstado;
        //            //objModel.DatosAntecedentes.CodigoJudicial = lista.strCodigoAntecedente;
        //        }

        //        /*if (lista.intCodigo == 2)
        //        {
        //            objModel.DatosLicenciaPorTramitar.DNICiudadanoPenal = lista.strDNI;
        //            objModel.DatosLicenciaPorTramitar.EstadoPenal = lista.strEstado;
        //            objModel.DatosLicenciaPorTramitar.CodigoPenal = lista.strCodigoAntecedente;
        //        }

        //        if (lista.intCodigo == 3)
        //        {
        //            objModel.DatosLicenciaPorTramitar.DNICiudadanoPolicial = lista.strDNI;
        //            objModel.DatosLicenciaPorTramitar.EstadoPolicial = lista.strEstado;
        //            objModel.DatosLicenciaPorTramitar.CodigoPolicial = lista.strCodigoAntecedente;
        //        }*/
        //    }

        //    //objModel.DatosLicenciaPorTramitar = objLogicaTramite.DatosLicenciaPorTramitar(model.);

        //    return View(objModel);
        //}

        /*ESTO ESTA POR IMPLEMENTAR*/
        [HttpGet]
        public ActionResult LicenciasTramitadas()
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaTramite objLogicaTramite = new LogicaTramite();
            objModel.LicenciasPorTramitar = objLogicaTramite.LicenciasPorTramitar((int)Enumeraciones.EstadosTramite.Pendiente);

            return View(objModel);
        }

    }
}
