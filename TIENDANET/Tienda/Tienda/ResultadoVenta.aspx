<%@ Page Title="Catalogo de Armas" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" 
CodeBehind="ResultadoVenta.aspx.cs" Inherits="Tienda.ResultadoVenta" %>


<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <h2>
        <center>CATALOGO DE ARMAS</center>
    </h2>

    <table style="width:100%">
    <tr>
        <td style="width:100%;height:100px;"></td>
    </tr>
    <tr>
        <td style="width:100%" valign="top" align ="center">
            
        <asp:Label ID="lblResultado" runat="server" Text=""></asp:Label>    
        
        </td>        
    </tr>
        
    </table>
    
</asp:Content>
