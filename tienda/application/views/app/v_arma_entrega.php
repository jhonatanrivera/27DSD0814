<div class="row">
    <?php echo form_open('','id="frmConsultar"'); ?>
    <div class="col-md-offset-1 col-md-5">
      <div class="form-group">
        <input type="text" class="form-control" id="FIND" name="FIND" />
        <input type="hidden" name="TYPE" id="TYPE" value="none">
      </div>    
    </div>
    <div class="col-md-4">
        <div class="btn-group">
          <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">
            Buscar por... <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu">
            <li><a href="javascript: void(0)" onclick="redirect('CODIGO')">Codigo de registro</a></li>
            <li><a href="javascript: void(0)" onclick="redirect('DNI')">DNI</a></li>
            <li class="divider"></li>
            <li><a href="javascript: void(0)" onclick="redirect('PENDIENTES')">Estado: Pendiente</a></li>
            <li><a href="javascript: void(0)" onclick="redirect('ENTREGADOS')">Estado: Entregados</a></li>
            <li><a href="javascript: void(0)" onclick="redirect('RECHAZADOS')">Estado: Rechazados</a></li>
          </ul>
        </div>  
    </div>
    <?php echo form_close(); ?>
</div>
<hr>
<div class="row">
  <div class="col-md-12">

    <?php if (isset($ventas) && count($ventas)>=1 ) { ?>
      <table class="table table-condensed">
        <tr>
          <th>COD. REGISTRO</th>
          <th>NOMBRE Y APELLIDOS</th>
          <th>DNI</th>
          <th>SERIE ARMA</th>
          <th>FECHA COMPRA</th>
          <th>ESTADO</th>

        </tr>
    
      </table>
    <?php } ?>

  </div>


</div>
<script type="text/javascript">



function redirect(v) {

   $("#TYPE").val(v);
   $("#frmConsultar").submit();
}

</script>