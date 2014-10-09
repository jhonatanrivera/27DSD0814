<%@ Page Title="Entrega de Armas" Language="C#" MasterPageFile="~/Site1.master" AutoEventWireup="true" 
CodeBehind="DetalleEntregaArma.aspx.cs" Inherits="Tienda.DetalleEntregaArma" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <h2>
        <center>ENTREGA DE ARMAS</center>
    </h2>

    <table style="width:100%">
    <tr>
        <td style="width:100%;height:50px;"></td>
    </tr>
    <tr>
        <td style="width:100%"><b><u>Datos del comprador</u></b></td>        
    </tr>
    </table>

    <table style="width:100%">
    <tr>
        <td style="width:40%">Nombre:</td>        
        <td style="width:60%">
            <asp:Label ID="lblNombre" runat="server" Text=""></asp:Label></td>        
    </tr>
    <tr>
        <td style="width:40%">Apellido Paterno:</td>        
        <td style="width:60%"><asp:Label ID="lblApellidoPaterno" runat="server" Text=""></asp:Label></td>
    </tr>
    <tr>
        <td style="width:40%">Apellido Materno:</td>        
        <td style="width:60%"><asp:Label ID="lblApellidoMaterno" runat="server" Text=""></asp:Label></td>
    </tr>
    <tr>
        <td style="width:40%">DNI:</td>        
        <td style="width:60%"><asp:Label ID="lblDNI" runat="server" Text=""></asp:Label></td>
    </tr>          
    </table>

    <table style="width:100%">
    <tr>
        <td style="width:100%;height:20px;"></td>
    </tr>
    <tr>
        <td style="width:100%"><b><u>Datos del arma</u></b></td>        
    </tr>
    </table>

    <table style="width:100%">
    <tr>
        <td style="width:40%">Marca:</td>        
        <td style="width:60%"><asp:Label ID="lblMarca" runat="server" Text=""></asp:Label></td>
    </tr>
    <tr>
        <td style="width:40%">Descripción:</td>        
        <td style="width:60%"><asp:Label ID="lblDescripcion" runat="server" Text=""></asp:Label></td>
    </tr>
    <tr>
        <td style="width:40%">Precio:</td>        
        <td style="width:60%"><asp:Label ID="lblPrecio" runat="server" Text=""></asp:Label></td>
    </tr>  
    <tr>
        <td style="width:40%">Serie Arma:</td>        
        <td style="width:60%"><asp:Label ID="lblSerieArma" runat="server" Text=""></asp:Label></td>
    </tr>  
     <tr>
        <td style="width:40%">Forma de Pago</td>        
        <td style="width:60%"><asp:Label ID="lblFormaPago" runat="server" Text=""></asp:Label></td>
    </tr>   
    </table>


    <table style="width:100%">
    <tr>
        <td style="width:100%;height:20px;"></td>
    </tr>
    <tr>
        <td style="width:100%"><b><u>Datos SUCAMEC</u></b></td>        
    </tr>
    </table>

    <table style="width:100%">
    <tr>
        <td style="width:40%">Código de trámite:</td>        
        <td style="width:60%"><asp:Label ID="lblCodigoTramite" runat="server" Text=""></asp:Label></td>
    </tr>
    <tr>
        <td style="width:40%">Número de licencia:</td>        
        <td style="width:60%"><asp:Label ID="lblNumeroLicencia" runat="server" Text=""></asp:Label></td>
    </tr>
    <tr>
        <td style="width:40%">Antecedentes Policiales:</td>        
        <td style="width:60%"><asp:Label ID="lblAntecendentesPoliciales" runat="server" Text=""></asp:Label></td>
    </tr>  
    <tr>
        <td style="width:40%">Antecedentes Judiciales:</td>        
        <td style="width:60%"><asp:Label ID="lblAntecendentesJudiciales" runat="server" Text=""></asp:Label></td>
    </tr>  
    <tr>
        <td style="width:40%">Antecedentes Penales:</td>        
        <td style="width:60%"><asp:Label ID="lblAntecendentesPenales" runat="server" Text=""></asp:Label></td>
    </tr>   
    <tr>
        <td style="width:40%">Estado:</td>        
        <td style="width:60%"><asp:Label ID="lblEstado" runat="server" Text=""></asp:Label></td>
    </tr> 
    </table>

    

    

    <table style="width:100%">
    <tr>
        <td style="width:100%;height:20px;"></td>
    </tr>
    <tr>
        <td style="width:100%"><center>
            <asp:Button ID="btnRegistrar" runat="server" 
                Text="Dar Conformidad" onclick="btnRegistrar_Click" />&nbsp;&nbsp;&nbsp;<asp:Button 
                ID="btnRechazar" runat="server" 
                Text="Rechazar" onclick="btnRechazar_Click" /></center>
                
        </td>        
    </tr>
        
    </table>
</asp:Content>


