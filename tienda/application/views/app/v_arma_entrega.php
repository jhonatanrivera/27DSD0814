<div class="row">
    <?php echo form_open('','id="frmConsultar"'); ?>
    <div class="col-md-offset-1 col-md-5">
      <div class="form-group">
        <input type="text" class="form-control" id="FIND" name="FIND" value="<?php echo isset($FIND) ? $FIND : ''; ?>"/>
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
            <li class="divider"></li>
            <li><a href="javascript: void(0)" onclick="redirect('TODOS')">TODOS</a></li>
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
        <?php foreach ($ventas as $key => $row) {
            echo '<tr><td>'.$row->COD_REGISTRO.'</td>';
            echo '<td>'.$row->NOMBRES.' '.$row->AP_PATERNO.' '.$row->AP_MATERNO.'</td>';
            echo '<td>'.$row->DNI.'</td>';
            echo '<td>'.$row->SERIE_ARMA.'</td>';
            echo '<td>'.$row->FE_REGISTRO.'</td>';
            $estado = array(1 => 'info',2 => 'warning', 3 => 'success');
            $estadoM = array(1 => 'Pendiente',2 => 'Rechazado', 3 => 'Entregado');
            echo '<td><button class="btn btn-'.$estado[$row->ESTADO].' btn-lg" data-toggle="modal" data-target="#modalEntrega" onclick="entrega(\''.$row->COD_REGISTRO.'\')">'.$estadoM[$row->ESTADO].'</button></tr>';
        } ?>
    
      </table>
    <?php } ?>

  </div>


</div>


<!-- Modal -->
<div class="modal fade" id="modalEntrega" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <form id="frmConsulta">
        <input type="hidden" name="MODELO" id="MODELO" value="0">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title" id="divComprarTitle">COMPRAR</h4>
      </div>
      <div class="modal-body">
            <div>
                <div class="row" style="height:170px;margin:0 auto;">
                    <img id="imgComprar" height="160">
                </div>
            </div>
            <hr>
            <div class="row"><div class="col-md-3"><h5><b>Propietario</b></h5></div><div class="col-md-8" id="divUsuario"></div></div>
            <div class="row"><div class="col-md-3"><h5><b>DNI</b></h5></div><div class="col-md-8" id="divDNI"></div></div>
            <div class="row"><div class="col-md-3"><h5><b>Descripcion</b></h5></div><div class="col-md-8" id="divComprarDesc"></div></div>
            <div class="row"><div class="col-md-3"><h5><b>Caracteristicas</b></h5></div><div class="col-md-8" id="divComprarCarac"></div></div>
            <div class="row"><div class="col-md-3"><h5><b>Precio</b></h5></div><div class="col-md-8" id="divComprarPrec"></div></div>
            <div class="row"><div class="col-md-3"><h5><b>Autorizacion</b></h5></div><div class="col-md-8">Civil</div></div>
            <div class="row"><div class="col-md-3"><h5><b>Fecha de compra</b></h5></div><div class="col-md-8" id="divFecha"></div></div>
            <hr>
            <div class="row"><div class="col-md-3"><h5><b>Fecha Respuesta</b></h5></div><div class="col-md-8" id="divFechaRespuesta"></div></div>
            <div class="row"><div class="col-md-3"><h5><b>COD. SUCAMEC</b></h5></div><div class="col-md-8" id="divSucamec"></div></div>
            <div class="row"><div class="col-md-3"><h5><b>NRO LICENCIA</b></h5></div><div class="col-md-8" id="divLicencia">RECHAZADO</div></div>
            <hr>
            <div class="row"><div class="col-md-3"><h5><b>Fecha Entrega</b></h5></div><div class="col-md-8" id="divFechaEntrega">RECHAZADO</div></div>
      </div>

      <div class="modal-footer">
        <button id="btnCancelar" type="button" class="btn btn-default hide" data-dismiss="modal">Cancelar</button>
        <input id="btnConsultar" type="submit" class="btn btn-primary hide" value="Consultar SUCAMEC">
        <input id="btnOK" type="button" class="btn btn-primary hide" data-dismiss="modal" value="Aceptar">
      </div>
       </form>
    </div>
  </div>
</div>

<script type="text/javascript">
var ventas = <?php  echo ((isset($ventas) && count($ventas)>=1) ? json_encode($ventas) : '""'); ?>;

function entrega(argument) {
    var k=999;
    for (var i = ventas.length - 1; i >= 0; i--) {
        if(ventas[i].COD_REGISTRO == argument){
            k = i; break;
        };
    };
    if (k!=999) {
        $("#MODELO").val(argument);
        
        $("#divUsuario").html(ventas[k].NOMBRES+' '+ventas[k].AP_PATERNO+' '+ventas[k].AP_MATERNO);
        $("#divDNI").html(ventas[k].DNI);
        $("#divComprarDesc").html(ventas[k].CARACTERISTICAS);
        $("#divComprarPrec").html(ventas[k].PRECIO);
        $("#divFecha").html(ventas[k].FE_REGISTRO);
        
        $("#imgComprar").attr('src',CI.base_url+'resources/images/armas/'+ventas[k].URL_IMAGEN+'.jpg');
        if (ventas[k].ESTADO == 1) {
          $("#divComprarTitle").html('ESTADO | Pendiente permiso SUCAMEC');
          $("#divSucamec").html('PENDIENTE');
          $("#divFechaRespuesta").html('PENDIENTE');
          $("#divLicencia").html('PENDIENTE');
          $("#divFechaEntrega").html('PENDIENTE');
          $("#btnConsultar").removeClass('hide'); 
          $("#btnCancelar").removeClass('hide'); 
          $("#btnOK").addClass('hide'); }
        else if (ventas[k].ESTADO == 2){ 
          $("#divComprarTitle").html('Estado | Permiso rechazado');
          $("#divSucamec").html(ventas[k].COD_SUCAMEC);
          $("#divFechaRespuesta").html(ventas[k].FE_RESPUESTA);
          $("#divLicencia").html('RECHAZADO');
          $("#divFechaEntrega").html('RECHAZADO');
          $("#btnConsultar").addClass('hide'); $("#btnCancelar").addClass('hide'); $("#btnOK").removeClass('hide'); 
        }else if (ventas[k].ESTADO == 3){ 
          $("#divComprarTitle").html('Estado | Arma entregada');
          $("#divSucamec").html(ventas[k].COD_SUCAMEC);
          $("#divFechaRespuesta").html(ventas[k].FE_RESPUESTA);
          $("#divLicencia").html(ventas[k].NRO_LICENCIA);
          $("#divFechaEntrega").html(ventas[k].FE_ENTREGA);
          $("#btnConsultar").addClass('hide'); $("#btnCancelar").addClass('hide'); $("#btnOK").removeClass('hide'); 
        };
    };
}

function redirect(v) {

   $("#TYPE").val(v);
   $("#frmConsultar").submit();
}


  function ajax_btn(b,op){
      var btn = $("#"+b); 
      if (op == 1) {
          btn.css({'background-image':'url('+CI.base_url+'resources/images/loader-ajax.gif)','background-size':'100% 100%','background-position':'center center'});
          btn.val('Consultando SUCAMEC...');btn.attr('disabled','disabled');        
      }else{
          btn.removeAttr('disabled'); btn.css('background-image','none'); btn.val('VENDIDO'); 
      }
  }


  $("#frmConsulta").validate({

      submitHandler:function(){
              ajax_btn("btnConsultar",1);
              var formData = $("#frmConsulta").serializeArray();
              $.ajax({
                  url: CI.site_url+'registrar-venta',
                  type:'POST',
                  dataType:'JSON',
                  data:formData,
                  success:function (argument) {
                      ajax_btn("btnConsultar");
                      alert("Se obtuvo respuesta correctamente");
                      window.location = CI.site_url+'/armas';
                  }
              })  

      },

  })


</script>