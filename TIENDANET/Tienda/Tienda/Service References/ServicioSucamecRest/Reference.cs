﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código fue generado por una herramienta.
//     Versión de runtime:4.0.30319.17929
//
//     Los cambios en este archivo podrían causar un comportamiento incorrecto y se perderán si
//     se vuelve a generar el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Tienda.ServicioSucamecRest {
    using System.Runtime.Serialization;
    using System;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="EntidadTramiteRest", Namespace="http://schemas.datacontract.org/2004/07/Entidades")]
    [System.SerializableAttribute()]
    public partial class EntidadTramiteRest : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged {
        
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string ApellidoMaternoField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string ApellidoPaternoField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string CelularField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int CodSolicitudField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int CodTiendaField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string DNIField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string DireccionField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string EmailField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int EstadoField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string NombresField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string SerieArmaField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string SexoField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string TiendaField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int TipoTramiteField;
        
        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData {
            get {
                return this.extensionDataField;
            }
            set {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string ApellidoMaterno {
            get {
                return this.ApellidoMaternoField;
            }
            set {
                if ((object.ReferenceEquals(this.ApellidoMaternoField, value) != true)) {
                    this.ApellidoMaternoField = value;
                    this.RaisePropertyChanged("ApellidoMaterno");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string ApellidoPaterno {
            get {
                return this.ApellidoPaternoField;
            }
            set {
                if ((object.ReferenceEquals(this.ApellidoPaternoField, value) != true)) {
                    this.ApellidoPaternoField = value;
                    this.RaisePropertyChanged("ApellidoPaterno");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Celular {
            get {
                return this.CelularField;
            }
            set {
                if ((object.ReferenceEquals(this.CelularField, value) != true)) {
                    this.CelularField = value;
                    this.RaisePropertyChanged("Celular");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int CodSolicitud {
            get {
                return this.CodSolicitudField;
            }
            set {
                if ((this.CodSolicitudField.Equals(value) != true)) {
                    this.CodSolicitudField = value;
                    this.RaisePropertyChanged("CodSolicitud");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int CodTienda {
            get {
                return this.CodTiendaField;
            }
            set {
                if ((this.CodTiendaField.Equals(value) != true)) {
                    this.CodTiendaField = value;
                    this.RaisePropertyChanged("CodTienda");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string DNI {
            get {
                return this.DNIField;
            }
            set {
                if ((object.ReferenceEquals(this.DNIField, value) != true)) {
                    this.DNIField = value;
                    this.RaisePropertyChanged("DNI");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Direccion {
            get {
                return this.DireccionField;
            }
            set {
                if ((object.ReferenceEquals(this.DireccionField, value) != true)) {
                    this.DireccionField = value;
                    this.RaisePropertyChanged("Direccion");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Email {
            get {
                return this.EmailField;
            }
            set {
                if ((object.ReferenceEquals(this.EmailField, value) != true)) {
                    this.EmailField = value;
                    this.RaisePropertyChanged("Email");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int Estado {
            get {
                return this.EstadoField;
            }
            set {
                if ((this.EstadoField.Equals(value) != true)) {
                    this.EstadoField = value;
                    this.RaisePropertyChanged("Estado");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Nombres {
            get {
                return this.NombresField;
            }
            set {
                if ((object.ReferenceEquals(this.NombresField, value) != true)) {
                    this.NombresField = value;
                    this.RaisePropertyChanged("Nombres");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string SerieArma {
            get {
                return this.SerieArmaField;
            }
            set {
                if ((object.ReferenceEquals(this.SerieArmaField, value) != true)) {
                    this.SerieArmaField = value;
                    this.RaisePropertyChanged("SerieArma");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Sexo {
            get {
                return this.SexoField;
            }
            set {
                if ((object.ReferenceEquals(this.SexoField, value) != true)) {
                    this.SexoField = value;
                    this.RaisePropertyChanged("Sexo");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Tienda {
            get {
                return this.TiendaField;
            }
            set {
                if ((object.ReferenceEquals(this.TiendaField, value) != true)) {
                    this.TiendaField = value;
                    this.RaisePropertyChanged("Tienda");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int TipoTramite {
            get {
                return this.TipoTramiteField;
            }
            set {
                if ((this.TipoTramiteField.Equals(value) != true)) {
                    this.TipoTramiteField = value;
                    this.RaisePropertyChanged("TipoTramite");
                }
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="ServicioSucamecRest.ISucamec")]
    public interface ISucamec {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ISucamec/RegistraTramite", ReplyAction="http://tempuri.org/ISucamec/RegistraTramiteResponse")]
        int RegistraTramite(Tienda.ServicioSucamecRest.EntidadTramiteRest Tramite);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ISucamec/RegistraTramite2", ReplyAction="http://tempuri.org/ISucamec/RegistraTramite2Response")]
        int RegistraTramite2(int TipoTramite, int CodTienda, string Tienda, int CodSolicitud, string DNI, string SerieArma, int Estado, string Nombres, string ApellidoPaterno, string ApellidoMaterno, string Sexo, string Email, string Celular, string Direccion);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface ISucamecChannel : Tienda.ServicioSucamecRest.ISucamec, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class SucamecClient : System.ServiceModel.ClientBase<Tienda.ServicioSucamecRest.ISucamec>, Tienda.ServicioSucamecRest.ISucamec {
        
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
        
        public int RegistraTramite(Tienda.ServicioSucamecRest.EntidadTramiteRest Tramite) {
            return base.Channel.RegistraTramite(Tramite);
        }
        
        public int RegistraTramite2(int TipoTramite, int CodTienda, string Tienda, int CodSolicitud, string DNI, string SerieArma, int Estado, string Nombres, string ApellidoPaterno, string ApellidoMaterno, string Sexo, string Email, string Celular, string Direccion) {
            return base.Channel.RegistraTramite2(TipoTramite, CodTienda, Tienda, CodSolicitud, DNI, SerieArma, Estado, Nombres, ApellidoPaterno, ApellidoMaterno, Sexo, Email, Celular, Direccion);
        }
    }
}
