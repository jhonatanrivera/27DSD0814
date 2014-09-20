using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebSucamec.Models;
using LogicaNegocios;
using Entidades;
using System.Web.Security;
using WebMatrix.WebData;

namespace WebSucamec.Controllers
{
    public class LoginController : Controller
    {
        //
        // GET: /Login/

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult Index(Login model, string returnUrl)
        {
            LogicaUsuario objLogin = new LogicaUsuario();

            
            if (ModelState.IsValid && objLogin.Login(model.UserName, model.Password).CodUsuario > 0)
            {
                FormsAuthentication.SetAuthCookie(model.UserName, false);                  
                return RedirectToAction("LicenciasPorTramitar", "Licencia");
            }

            // If we got this far, something failed, redisplay form
            ModelState.AddModelError("", "El usuario o password ingresados es incorrecto.");
            return View(model);            
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LogOff()
        {
            //WebSecurity.Logout();
            FormsAuthentication.SignOut(); 

            return RedirectToAction("Index", "Login");
        }
    }
}
