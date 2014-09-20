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

        #region "Licencias por Tramitar"
        
        [HttpGet]
        public ActionResult LicenciasPorTramitar()
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaTramite objLogicaTramite = new LogicaTramite();
            objModel.LicenciasPorTramitar = objLogicaTramite.LicenciasPorTramitar((int)Enumeraciones.EstadosTramite.Pendiente);
            if (TempData["MensajeTramite"] != null)
            {
                ViewBag.Mensaje = TempData["MensajeTramite"].ToString();
            }
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

        /*Nos lleva al detalle de la licencia por tramitar*/
        [HttpGet]
        public ActionResult ConformidadLicencia(int IdCodigo)
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaTramite objLogicaTramite = new LogicaTramite();
            EntidadAntecedente DatosAntecedentes = new EntidadAntecedente();
            objModel.DatosLicenciaPorTramitar = objLogicaTramite.DatosLicenciaPorTramitar(IdCodigo);            

            return View(objModel);
        }        


        #endregion

        #region "Conformidad o Rechazo del Trámite"

        
        [HttpPost]
        [HttpParamActionAttribute]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult BuscarAntecedentes(LicenciasPorTramitarModel model)
        {
            List<EntidadAntecedente> ListadoAntecedentes = new List<EntidadAntecedente>();
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaTramite objLogicaTramite = new LogicaTramite();
            ServicioAntecedentes.AntecedentesClient objServicios = new ServicioAntecedentes.AntecedentesClient();

            ListadoAntecedentes = objServicios.BuscarAntecedentes(model.DatosLicenciaPorTramitar.DNICiudadano).ToList();

            if (ListadoAntecedentes.Count == 0)
            {
                /*Aca se puede poner un codigo que diga que si no hay registros en la lista es que no ha iniciado los tramites
                de Antecedentes*/
                ViewBag.mensaje = "No hay antecendentes";
            }
            else
            {

                foreach (EntidadAntecedente lista in ListadoAntecedentes)
                {
                    if (lista.intCodigo == 1)
                    {
                        //objModel.DatosAntecedentes = (EntidadAntecedente)lista;
                        objModel.DatosAntecedentes.DNICiudadanoJudicial = lista.strDNI;
                        objModel.DatosAntecedentes.EstadoJudicial = lista.strEstado;
                        objModel.DatosAntecedentes.CodigoJudicial = lista.strCodigoAntecedente;
                    }

                    if (lista.intCodigo == 2)
                    {
                        objModel.DatosAntecedentes.DNICiudadanoPenal = lista.strDNI;
                        objModel.DatosAntecedentes.EstadoPenal = lista.strEstado;
                        objModel.DatosAntecedentes.CodigoPenal = lista.strCodigoAntecedente;
                    }

                    if (lista.intCodigo == 3)
                    {
                        objModel.DatosAntecedentes.DNICiudadanoPolicial = lista.strDNI;
                        objModel.DatosAntecedentes.EstadoPolicial = lista.strEstado;
                        objModel.DatosAntecedentes.CodigoPolicial = lista.strCodigoAntecedente;
                    }
                }
            }            
            objModel.DatosLicenciaPorTramitar = model.DatosLicenciaPorTramitar;
            return View(objModel);
        }

        [HttpPost]
        [HttpParamActionAttribute]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult DarConformidad(LicenciasPorTramitarModel model)
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaLicencia objLogicaLicencia = new LogicaLicencia();
            EntidadAntecedente DatosAntecedentes = new EntidadAntecedente();            
            string EstadoJudicial = string.Empty;
            string CodigoJudicial = string.Empty;            
            string EstadoPenal = string.Empty;
            string CodigoPenal = string.Empty;            
            string EstadoPolicial = string.Empty;
            string CodigoPolicial = string.Empty;
            int intResultado = 0;

            List<EntidadAntecedente> ListadoAntecedentes = new List<EntidadAntecedente>();
            ServicioAntecedentes.AntecedentesClient objServicios = new ServicioAntecedentes.AntecedentesClient();
            ListadoAntecedentes = objServicios.BuscarAntecedentes(model.DatosLicenciaPorTramitar.DNICiudadano).ToList();

            foreach (EntidadAntecedente lista in ListadoAntecedentes)
                {
                    if (lista.intCodigo == 1)
                    {               
                        EstadoJudicial = lista.strEstado;
                        CodigoJudicial = lista.strCodigoAntecedente;
                    }

                    if (lista.intCodigo == 2)
                    {                        
                        EstadoPenal = lista.strEstado;
                        CodigoPenal = lista.strCodigoAntecedente;
                    }

                    if (lista.intCodigo == 3)
                    {                     
                        EstadoPolicial = lista.strEstado;
                        CodigoPolicial = lista.strCodigoAntecedente;
                    }
                }

            intResultado = objLogicaLicencia.RegistraLicencia(int.Parse(model.DatosLicenciaPorTramitar.CodTramite.ToString()),
                                                                                   (int)Enumeraciones.EstadosLicencia.Vigente, 
                                                                                   (int)Enumeraciones.EstadosTramite.Aceptado,
                                                                                   EstadoPolicial, CodigoPolicial, EstadoJudicial,
                                                                                   CodigoJudicial, EstadoPenal, CodigoPenal);
            
            if (intResultado == -1)
            {
                TempData["MensajeTramite"] = "El trámite se realizo satisfactoriamente";
            }
            else
            {
                TempData["MensajeTramite"] = "No se pudo registrar el trámite";
            }

            return RedirectToAction("LicenciasPorTramitar", "Licencia");
        }

        [HttpPost]
        [HttpParamActionAttribute]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Rechazar(LicenciasPorTramitarModel model)
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaLicencia objLogicaLicencia = new LogicaLicencia();
            EntidadAntecedente DatosAntecedentes = new EntidadAntecedente();
            string EstadoJudicial = string.Empty;
            string CodigoJudicial = string.Empty;
            string EstadoPenal = string.Empty;
            string CodigoPenal = string.Empty;
            string EstadoPolicial = string.Empty;
            string CodigoPolicial = string.Empty;
            int intResultado = 0;

            List<EntidadAntecedente> ListadoAntecedentes = new List<EntidadAntecedente>();
            ServicioAntecedentes.AntecedentesClient objServicios = new ServicioAntecedentes.AntecedentesClient();
            ListadoAntecedentes = objServicios.BuscarAntecedentes(model.DatosLicenciaPorTramitar.DNICiudadano).ToList();

            foreach (EntidadAntecedente lista in ListadoAntecedentes)
            {
                if (lista.intCodigo == 1)
                {
                    EstadoJudicial = lista.strEstado;
                    CodigoJudicial = lista.strCodigoAntecedente;
                }

                if (lista.intCodigo == 2)
                {
                    EstadoPenal = lista.strEstado;
                    CodigoPenal = lista.strCodigoAntecedente;
                }

                if (lista.intCodigo == 3)
                {
                    EstadoPolicial = lista.strEstado;
                    CodigoPolicial = lista.strCodigoAntecedente;
                }
            }

            intResultado = objLogicaLicencia.RegistraLicencia(int.Parse(model.DatosLicenciaPorTramitar.CodTramite.ToString()),
                                                                                   (int)Enumeraciones.EstadosLicencia.Rechazado,
                                                                                   (int)Enumeraciones.EstadosTramite.Rechazado,
                                                                                   EstadoPolicial, CodigoPolicial, EstadoJudicial,
                                                                                   CodigoJudicial, EstadoPenal, CodigoPenal);

            if (intResultado == -1)
            {
                TempData["MensajeTramite"] = "El trámite fue rechazado";
            }
            else
            {
                TempData["MensajeTramite"] = "No se pudo registrar el trámite";
            }

            return RedirectToAction("LicenciasPorTramitar", "Licencia");
        }

        #endregion

        #region "Licencias Tramitadas"
        
        [HttpGet]
        public ActionResult LicenciasTramitadas()
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaTramite objLogicaTramite = new LogicaTramite();
            objModel.LicenciasPorTramitar = objLogicaTramite.LicenciasPorTramitar((int)Enumeraciones.EstadosTramite.Aceptado);

            return View(objModel);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult LicenciasTramitadas(LicenciasPorTramitarModel model)
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaTramite objLogicaTramite = new LogicaTramite();
            List<EntidadTramite> LicenciasPorTramitar = new List<EntidadTramite>();

            if (ModelState.IsValid)
            {
                LicenciasPorTramitar = objLogicaTramite.LicenciasPorTramitarPorDNI(model.DNI, (int)Enumeraciones.EstadosTramite.Aceptado);

                if (LicenciasPorTramitar.Count > 0)
                {
                    objModel.LicenciasPorTramitar = LicenciasPorTramitar;
                    return View(objModel);                    
                }

                objModel.LicenciasPorTramitar = LicenciasPorTramitar;
                ModelState.AddModelError("", "No existen licencias tramitadas");
                return View(objModel);
            }
            else
            {
                model.LicenciasPorTramitar = LicenciasPorTramitar;
                return View(model);
            }

        }

        /*Nos lleva al detalle de la licencia tramitada*/
        [HttpGet]
        public ActionResult LicenciaAceptada(int IdCodigo)
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaLicencia objLogicaLicencia = new LogicaLicencia();
            
            objModel.DatosLicenciaPorTramitar = objLogicaLicencia.DatosLicenciaTramitada(IdCodigo);

            return View(objModel);
        }        

        #endregion

        #region "Licencias Rechazadas"

        [HttpGet]
        public ActionResult LicenciasRechazadas()
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaTramite objLogicaTramite = new LogicaTramite();
            objModel.LicenciasPorTramitar = objLogicaTramite.LicenciasPorTramitar((int)Enumeraciones.EstadosTramite.Rechazado);

            return View(objModel);
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult LicenciasRechazadas(LicenciasPorTramitarModel model)
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaTramite objLogicaTramite = new LogicaTramite();
            List<EntidadTramite> LicenciasPorTramitar = new List<EntidadTramite>();

            if (ModelState.IsValid)
            {
                LicenciasPorTramitar = objLogicaTramite.LicenciasPorTramitarPorDNI(model.DNI, (int)Enumeraciones.EstadosTramite.Rechazado);

                if (LicenciasPorTramitar.Count > 0)
                {
                    objModel.LicenciasPorTramitar = LicenciasPorTramitar;
                    return View(objModel);
                }

                objModel.LicenciasPorTramitar = LicenciasPorTramitar;
                ModelState.AddModelError("", "No existen licencias rechazadas");
                return View(objModel);
            }
            else
            {
                model.LicenciasPorTramitar = LicenciasPorTramitar;
                return View(model);
            }

        }

        /*Nos lleva al detalle de la licencia rechazada*/
        [HttpGet]
        public ActionResult LicenciaRechazada(int IdCodigo)
        {
            LicenciasPorTramitarModel objModel = new LicenciasPorTramitarModel();
            LogicaLicencia objLogicaLicencia = new LogicaLicencia();

            objModel.DatosLicenciaPorTramitar = objLogicaLicencia.DatosLicenciaRechazada(IdCodigo);

            return View(objModel);
        }        

        #endregion

    }
}
