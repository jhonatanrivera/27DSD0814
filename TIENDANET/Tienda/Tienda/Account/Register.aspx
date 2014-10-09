<%@ Page Title="Registrarse" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Register.aspx.cs" Inherits="Tienda.Account.Register" %>

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
    </table>

    <table style="width:100%">
    <tr>
        <td style="width:20%"></td>
        <td style="width:20%">Nombre:</td>        
        <td style="width:40%">
        <asp:TextBox ID="txtNombres" runat="server" Width="411px" MaxLength="60"></asp:TextBox>
            </td>        
        <td style="width:20%">
            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                ControlToValidate="txtNombres" ErrorMessage="*" ForeColor="#CC3300"></asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr><td style="width:100%;height:10px;" colspan="4"></td></tr>
    <tr>
        <td style="width:20%"></td>
        <td style="width:20%">Apellido Paterno:</td>        
        <td style="width:40%">
        <asp:TextBox ID="txtApellidoPaterno" runat="server" Width="411px" MaxLength="60"></asp:TextBox>
            </td>        
        <td style="width:20%">
            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                ControlToValidate="txtApellidoPaterno" ErrorMessage="*" ForeColor="#CC3300"></asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr><td style="width:100%;height:10px;" colspan="4"></td></tr>
    <tr>
        <td style="width:20%"></td>
        <td style="width:20%">Apellido Materno:</td>        
        <td style="width:40%">
        <asp:TextBox ID="txtApellidoMaterno" runat="server" Width="411px" MaxLength="60"></asp:TextBox>
            </td>        
        <td style="width:20%">
            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
                ControlToValidate="txtApellidoMaterno" ErrorMessage="*" ForeColor="#CC3300"></asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr><td style="width:100%;height:10px;" colspan="4"></td></tr>
    <tr>
        <td style="width:20%"></td>
        <td style="width:20%">DNI:</td>        
        <td style="width:40%">
        <asp:TextBox ID="txtDNI" runat="server" Width="89px" MaxLength="8"></asp:TextBox>
            </td>        
        <td style="width:20%">
            <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" 
                ControlToValidate="txtDNI" ErrorMessage="*" ForeColor="#CC3300"></asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr><td style="width:100%;height:10px;" colspan="4"></td></tr>
    <tr>
        <td style="width:20%"></td>        
        <td style="width:20%">Sexo:</td>        
        <td style="width:40%">
            <asp:RadioButtonList ID="rbSexo" runat="server" RepeatDirection="Horizontal" 
                Width="270px">
                <asp:ListItem Selected="True" Value="M">Masculino</asp:ListItem>
                <asp:ListItem Value="F">Femenino</asp:ListItem>
        </asp:RadioButtonList>
            </td>        
        <td style="width:20%">            
        </td>
        
    </tr>
    <tr><td style="width:100%;height:10px;" colspan="4"></td></tr>
    <tr>
        <td style="width:20%"></td>
        <td style="width:20%">Fecha de Nacimiento:</td>        
        <td style="width:40%">
        <asp:TextBox ID="txtFechaNacimiento" runat="server" Width="89px" MaxLength="10"></asp:TextBox>
            </td>        
        <td style="width:20%">
            <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" 
                ControlToValidate="txtFechaNacimiento" ErrorMessage="*" ForeColor="#CC3300"></asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr><td style="width:100%;height:10px;" colspan="4"></td></tr>
    <tr>
        <td style="width:20%"></td>
        <td style="width:20%">Email:</td>        
        <td style="width:40%">
        <asp:TextBox ID="txtEmail" runat="server" Width="184px" MaxLength="60"></asp:TextBox>
            </td>        
        <td style="width:20%">
            <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" 
                ControlToValidate="txtEmail" ErrorMessage="*" ForeColor="#CC3300"></asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr><td style="width:100%;height:10px;" colspan="4"></td></tr>
    <tr>
        <td style="width:20%"></td>
        <td style="width:20%">Celular:</td>        
        <td style="width:40%">
        <asp:TextBox ID="txtCelular" runat="server" Width="182px" MaxLength="9"></asp:TextBox>
            </td>        
        <td style="width:20%">
            <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" 
                ControlToValidate="txtCelular" ErrorMessage="*" ForeColor="#CC3300"></asp:RequiredFieldValidator>
        </td>
    </tr>
    <tr><td style="width:100%;height:10px;" colspan="4"></td></tr>
    <tr>
        <td style="width:20%"></td>
        <td style="width:20%">Direccion:</td>        
        <td style="width:40%">
        <asp:TextBox ID="txtDireccion" runat="server" Width="411px" MaxLength="60"></asp:TextBox>
            </td>        
        <td style="width:20%">
            <asp:RequiredFieldValidator ID="RequiredFieldValidator8" runat="server" 
                ControlToValidate="txtDireccion" ErrorMessage="*" ForeColor="#CC3300"></asp:RequiredFieldValidator>
        </td>
    </tr>    
    </table>    

    <table style="width:100%">
    <tr>
        <td style="width:100%;height:20px;" colspan="3"></td>
    </tr>
    <tr>
        <td style="width:20%"></td>
        <td style="width:60%">            
        <center>
        <asp:Button ID="btnGrabar" runat="server" Text="Grabar" onclick="btnGrabar_Click" />        
        </center>
        </td>        
        <td style="width:20%"></td>
    </tr>
    </table>

    <table style="width:100%">
    <tr>
        <td style="width:100%;height:50px;"></td>
    </tr>
    </table>


</asp:Content>
