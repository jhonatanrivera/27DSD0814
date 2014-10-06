<?php 


$DNI = array(
	'id' => 'DNI',
	'name' => 'DNI',
	'class' => 'form-control',
	'style'=>"width: 160px",
	'maxlength' => '8',
);
$NOMBRES = array(
	'id' => 'NOMBRES',
	'name' => 'NOMBRES',
	'class' => 'form-control',
	'style'=>"width: 260px",
);
$AP_PATERNO = array(
	'id' => 'AP_PATERNO',
	'name' => 'AP_PATERNO',
	'class' => 'form-control',
);
$AP_MATERNO = array(
	'id' => 'AP_MATERNO',
	'name' => 'AP_MATERNO',
	'class' => 'form-control',
);
$SEXO = array(
	'id' => 'SEXO',
	'name' => 'SEXO',
	'class' => 'form-control',
);
$FE_NACIMIENTO = array(
	'id' => 'FE_NACIMIENTO',
	'name' => 'FE_NACIMIENTO',
	'class' => 'form-control ',
	'readonly' => 'readonly',
	'style'=>"width: 160px",
	'maxlength' => '12',	
);
$EMAIL = array(
	'id' => 'EMAIL',
	'name' => 'EMAIL',
	'class' => 'form-control',
	'type'=> 'email',
	'style'=>"width: 260px",	
);
$CELULAR = array(
	'id' => 'CELULAR',
	'name' => 'CELULAR',
	'class' => 'form-control',
	'style'=>"width: 160px",
	'maxlength' => '9',
);
$DIRECCION = array(
	'id' => 'DIRECCION',
	'name' => 'DIRECCION',
	'class' => 'form-control',
);


?>

<div class="col-md-offset-2 col-md-6">
<?php if(isset($msg)){ 
	echo '<div class="alert alert-'.$msg['type'].' alert-dismissible" role="alert">
	  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">x</span></button>
	  <strong>'.$msg['title'].'!</strong>&nbsp;&nbsp;'. $msg['msg'].
	'</div>';
} ?>
<h2>Registro de nuevo usuario</h2><hr>
<?php echo form_open('registro-usuario','frmRegistro'); ?>
  <div class="form-group">
    <?php echo form_label('N° D.N.I',$DNI['id']);?>
    <?php echo form_input($DNI);?>
  </div>
  <div class="form-group">
    <?php echo form_label('Nombres',$NOMBRES['id']);?>
    <?php echo form_input($NOMBRES);?>
  </div>
  <div class="form-group">
    <?php echo form_label('Apellido paterno',$AP_PATERNO['id']);?>
    <?php echo form_input($AP_PATERNO);?>
  </div>
  <div class="form-group">
    <?php echo form_label('Apellido Materno',$AP_MATERNO['id']);?>
    <?php echo form_input($AP_MATERNO);?>
  </div>
  <div class="form-group">
  	<?php echo form_label('Sexo',$AP_MATERNO['id']);?><br>
	<label class="radio-inline">
	  <input type="radio" name="SEXO" id="SEXO1" value="1"> Masculino
	</label>
	<label class="radio-inline">
	  <input type="radio" name="SEXO" id="SEXO2" value="2"> Femenino
	</label>
  </div>
  <div class="form-group">
    <?php echo form_label('Fecha de nacimiento',$FE_NACIMIENTO['id']);?>
    <?php echo form_input($FE_NACIMIENTO);?>
  </div>
  <div class="form-group">
    <?php echo form_label('E-mail',$EMAIL['id']);?>
    <?php echo form_input($EMAIL);?>
  </div>
  <div class="form-group">
    <?php echo form_label('N° Celular',$CELULAR['id']);?>
    <?php echo form_input($CELULAR);?>
  </div>
      <div class="form-group">
    <?php echo form_label('Dirección',$DIRECCION['id']);?>
    <?php echo form_input($DIRECCION);?>
  </div>
  <button type="submit" class="btn btn-success">Registrar</button>
<?php echo form_close(); ?>


</div>
  <script>
  $(function() {
    $( "#FE_NACIMIENTO" ).datepicker();
  });
  </script>

