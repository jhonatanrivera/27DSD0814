<%@ Page Title="Venta de Armas" Language="C#" MasterPageFile="~/Site1.master" AutoEventWireup="true" 
CodeBehind="VentaArmas.aspx.cs" Inherits="Tienda.VentaArmas" %>

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
        <td style="width:100%" valign="top" align ="center">
            Ingrese DNI: &nbsp;&nbsp;&nbsp;<asp:TextBox ID="txtDNI" runat="server"></asp:TextBox>&nbsp;&nbsp;&nbsp;
            <asp:Button ID="btnBuscar" runat="server" Text="Buscar" 
                onclick="btnBuscar_Click" />
            <p>
            <asp:Label ID="lblMensaje" runat="server" ForeColor="#FF3300" Font-Bold="True"></asp:Label> 
            </p>
            <asp:GridView ID="grdArmas" runat="server" AutoGenerateColumns="False" 
                SkinID="GrillaLectura" DataKeyNames="CodRegistro" 
                onrowcommand="grdArmas_RowCommand">
                <Columns>
                    <asp:BoundField DataField="CodRegistro" HeaderText="Cod. Registro" />
                    <asp:BoundField DataField="Nombres" HeaderText="Nombre" />
                    <asp:BoundField DataField="ApellidoPaterno" HeaderText="Apellido Paterno" />
                    <asp:BoundField DataField="ApellidoMaterno" HeaderText="Apellido Materno" />
                    <asp:BoundField DataField="DNI" HeaderText="DNI" />
                    <asp:BoundField DataField="Descripcion" HeaderText="Descripción del arma" />
                    <asp:ButtonField CommandName="Seleccionar" HeaderText="Detalle" ShowHeader="True"
                        Text="Seleccionar" />
                </Columns>
            </asp:GridView>
        
        </td>        
    </tr>
        
    </table>
    
</asp:Content>