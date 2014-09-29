<?php
$login = array(
	'name'	=> 'login',
	'id'	=> 'login',
	'value' => set_value('login'),
	'maxlength'	=> 8,
	'size'	=> 8,
	'class'	=> 'form-control',
	'required' => 'required',
	'placeholder' => 'Usuario',
);
if ($login_by_username AND $login_by_email) {
	$login_label = 'Email or login';
} else if ($login_by_username) {
	$login_label = 'Login';
} else {
	$login_label = 'Email';
}
$password = array(
	'name'	=> 'password',
	'id'	=> 'password',
	'class'	=> 'form-control',
	'size'	=> 8,
	'required' => 'required',
	'placeholder' => 'Constraseña',
);
$remember = array(
	'name'	=> 'remember',
	'id'	=> 'remember',
	'value'	=> 1,
	'checked'	=> set_value('remember'),
	'style' => 'margin:0;padding:0',
);
$captcha = array(
	'name'	=> 'captcha',
	'id'	=> 'captcha',
	'maxlength'	=> 8,
);
?>

<br><br>




<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <h1 class="text-center login-title">ARMAQ S.A</h1><hr>
            <h1 class="text-center login-title">Acceso al sistema</h1><br>
            <div class="account-wall">
                <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                    alt="">
                 <?php echo form_open($this->uri->uri_string(),'class="form-signin"'); ?>
                <!--<form class="form-signin">-->
                <?php echo form_input($login); ?>
                <div class="error"><?php echo form_error($login['name']); ?><?php echo isset($errors[$login['name']])?$errors[$login['name']]:''; ?></div>

                <?php echo form_password($password); ?>
                <div class="error"><?php echo form_error($password['name']); ?><?php echo isset($errors[$password['name']])?$errors[$password['name']]:''; ?></div>
                <?php echo form_submit('submit', 'Ingresar', 'class="btn btn-lg btn-primary btn-block"'); ?>
                <!--<button class="btn btn-lg btn-primary btn-block" type="submit">
                    Sign in</button>-->
                <label class="checkbox pull-left">
                    <input type="checkbox" value="remember-me">
                    Recuerdame
                </label>
                <a href="#" class="pull-right need-help">¿Necesita ayuda? </a><span class="clearfix"></span>
                <!--</form>-->
                <?php echo form_close(); ?>
            </div>

        </div>
    </div>
</div>

