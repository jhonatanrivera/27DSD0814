<%@ Page Title="Catalogo de Armas" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" 
CodeBehind="DetalleArma.aspx.cs" Inherits="Tienda.DetalleArma" %>


<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <h2>
        <center>CATALOGO DE ARMAS</center>
    </h2>

    <table style="width:100%">
    <tr>
        <td style="width:10%"></td>        
        <td style="width:80%">
            
            <table style="width:100%">
            <tr>
                <td style="width:100%" align="center"><asp:Image ID="imgArma" runat="server" /></td>
            </tr>
            <tr>
                <td style="width:100%">
                    <asp:Label ID="lblDescripcion" runat="server" Text=""></asp:Label></td>
            </tr>
            <tr>
                <td style="width:100%">
                    <asp:Label ID="lblCaracteristicas" runat="server" Text=""></asp:Label></td>
            </tr>                
            <tr>
                <td style="width:100%">
                    <asp:Label ID="lblMarca" runat="server" Text=""></asp:Label></td>
            </tr>
            <tr>
                <td style="width:100%">
                    <asp:Label ID="lblPrecio" runat="server" Text=""></asp:Label></td>
            </tr>
            <tr><td style="width:100%;height:20px;"></td></tr>
            <tr>
                <td style="width:100%"><hr /></td>
            </tr>
            <tr><td style="width:100%;height:20px;"></td></tr>
            <tr>
                <td style="width:100%">
                Para comprar el arma debe ser usuario registrado, sino lo es seleccione el link <b>Registro de Usuarios</b>.<br />
                Si ya es usuario registrado, confirme la compra del arma ingresando su DNI.
                </td>
            </tr>
            <tr><td style="width:100%;height:20px;"></td></tr>
             <tr>
                <td style="width:100%">Ingrese DNI: &nbsp;&nbsp;&nbsp;
                    <asp:TextBox ID="txtDNI" runat="server"></asp:TextBox>&nbsp;&nbsp;&nbsp;
                    <asp:Button ID="btnConfirmar" runat="server" Text="Confirmar Compra" 
                        onclick="btnConfirmar_Click" />
                        &nbsp;&nbsp;&nbsp;
                        <asp:Label ID="lblMensaje" runat="server" ForeColor="#FF3300" 
                        Font-Bold="True"></asp:Label>  
                    </td>               
                 
            </tr>
            <tr><td style="width:100%;height:100px;"></td></tr>
            </table> 

        </td>
        <td style="width:10%"></td>
    </tr>
    </table>
    
</asp:Content>
