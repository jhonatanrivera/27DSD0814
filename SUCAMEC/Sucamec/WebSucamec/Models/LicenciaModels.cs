using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Entidades;
using System.ComponentModel.DataAnnotations;

namespace WebSucamec.Models
{
    public class LicenciasPorTramitarModel
    {
        public List<EntidadTramite> LicenciasPorTramitar { get; set; }

        public EntidadTramite DatosLicenciaPorTramitar { get; set; }

        public EntidadAntecedente DatosAntecedentes { get; set; }



        [Required]
        [Display(Name = "Ingrese DNI")]
        public string DNI { get; set; }
    }
    
}