<%@ Page Title="Registrarse" Language="C#"  MasterPageFile="~/Site.master" AutoEventWireup="true" 
CodeBehind="Resultado.aspx.cs" Inherits="Tienda.Account.Resultado" %>


<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <h2>
        <center>REGISTRO DE USUARIOS</center>
    </h2>

    <table style="width:100%">
    <tr>
        <td style="width:100%;height:50px;"></td>
    </tr>
    <tr>
        <td style="width:100%" valign="top" align ="center">
            
        <asp:Label ID="lblResultado" runat="server" 
                Text="Su registro en el sistema ha sido satisfactorio. A partir de estos momentos ya puede realizar la compra de armas"></asp:Label>    
        
        </td>        
    </tr>
    <tr>
        <td style="width:100%;height:100px;"></td>
    </tr>        
    </table>
    
</asp:Content>