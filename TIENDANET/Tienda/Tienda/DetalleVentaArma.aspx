<%@ Page Title="Venta de Armas" Language="C#" MasterPageFile="~/Site1.master" AutoEventWireup="true" 
CodeBehind="DetalleVentaArma.aspx.cs" Inherits="Tienda.DetalleVentaArma" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <h2>
        <center>VENTA DE ARMAS</center>
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
    <tr>
        <td style="width:40%">Sexo:</td>        
        <td style="width:60%"><asp:Label ID="lblSexo" runat="server" Text=""></asp:Label></td>
    </tr>  
    <tr>
        <td style="width:40%">Email:</td>        
        <td style="width:60%"><asp:Label ID="lblEmail" runat="server" Text=""></asp:Label></td>
    </tr>
    <tr>
        <td style="width:40%">Celular:</td>        
        <td style="width:60%"><asp:Label ID="lblCelular" runat="server" Text=""></asp:Label></td>
    </tr>
    <tr>
        <td style="width:40%">Direccion:</td>        
        <td style="width:60%"><asp:Label ID="lblDireccion" runat="server" Text=""></asp:Label></td>
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
    </table>

    <table style="width:100%">
    <tr>
        <td style="width:100%;height:20px;"></td>
    </tr>
    <tr>
        <td style="width:100%"><b><u>Forma de pago</u></b></td>        
    </tr>
    </table>
    
    <table style="width:100%">
    <tr>
        <td style="width:100%">
            <asp:RadioButtonList ID="rbTipoPago" runat="server" 
                RepeatDirection="Horizontal">
                <asp:ListItem Value="0" Selected="True">En efectivo</asp:ListItem>
                <asp:ListItem Value="1">Cheque</asp:ListItem>
                <asp:ListItem Value="2">Tarjeta de crédito</asp:ListItem>
            </asp:RadioButtonList>
        </td>                
    </tr>    
    </table>

    <table style="width:100%">
    <tr>
        <td style="width:100%;height:20px;"></td>
    </tr>
    <tr>
        <td style="width:100%"><center><asp:Button ID="btnRegistrar" runat="server" 
                Text="Registrar Venta" onclick="btnRegistrar_Click" /></center></td>        
    </tr>
        
    </table>
</asp:Content>


