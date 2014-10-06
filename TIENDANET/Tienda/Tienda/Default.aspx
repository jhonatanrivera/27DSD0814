<%@ Page Title="Catalogo de Armas" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs" Inherits="Tienda._Default" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <h2>
        <center>CATALOGO DE ARMAS</center>
    </h2>

    <table style="width:100%">
    <tr>
        <td style="width:60%" valign="top" align ="center">
            
            <asp:Table ID="tblCatalogo" runat="server">
            </asp:Table>
        
        </td>        
    </tr>
    </table>
    
</asp:Content>
