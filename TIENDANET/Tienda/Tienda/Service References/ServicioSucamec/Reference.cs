﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código fue generado por una herramienta.
//     Versión de runtime:4.0.30319.17929
//
//     Los cambios en este archivo podrían causar un comportamiento incorrecto y se perderán si
//     se vuelve a generar el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Tienda.ServicioSucamec {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="ServicioSucamec.ISucamec")]
    public interface ISucamec {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ISucamec/RegistraTramite", ReplyAction="http://tempuri.org/ISucamec/RegistraTramiteResponse")]
        int RegistraTramite(int TipoTramite, int CodTienda, string Tienda, int CodSolicitud, string DNI, string SerieArma, int Estado, string Nombres, string ApellidoPaterno, string ApellidoMaterno, string Sexo, string Email, string Celular, string Direccion);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface ISucamecChannel : Tienda.ServicioSucamec.ISucamec, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class SucamecClient : System.ServiceModel.ClientBase<Tienda.ServicioSucamec.ISucamec>, Tienda.ServicioSucamec.ISucamec {
        
        public SucamecClient() {
        }
        
        public SucamecClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public SucamecClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public SucamecClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public SucamecClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public int RegistraTramite(int TipoTramite, int CodTienda, string Tienda, int CodSolicitud, string DNI, string SerieArma, int Estado, string Nombres, string ApellidoPaterno, string ApellidoMaterno, string Sexo, string Email, string Celular, string Direccion) {
            return base.Channel.RegistraTramite(TipoTramite, CodTienda, Tienda, CodSolicitud, DNI, SerieArma, Estado, Nombres, ApellidoPaterno, ApellidoMaterno, Sexo, Email, Celular, Direccion);
        }
    }
}
