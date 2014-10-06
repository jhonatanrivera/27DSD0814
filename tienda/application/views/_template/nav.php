
<div id="wrapper">
  <!--<h1><strong>ClearNav</strong> responsive navigation</h1>-->
  <nav role="navigation" id="access">
    <a class="skip-link icon-reorder" title="Accéder au menu" href="#menu">Menu</a>
    <ul id="menu">
                <li <?php echo (isset($className) && $className == 'home') ? "class='active'" : ''; ?> ><a class="icon-home" href="<?php echo site_url(); ?>">Home</a></li>
                <li <?php echo (isset($className) && $className == 'usuario') ? "class='active'" : ''; ?> ><a class="icon-group" href="<?php echo site_url('registro-usuario'); ?>">Registro de Usuarios</a></li>
                <li <?php echo (isset($className) && $className == 'arma') ? "class='active'" : ''; ?> ><a class="icon-picture" href="<?php echo site_url('armas'); ?>">Catalogo de Armas</a></li>
                <li <?php echo (isset($className) && $className == '') ? "class='active'" : ''; ?> ><a class="icon-picture" href="<?php echo site_url(); ?>">Venta de Armas</a></li>
                <li <?php echo (isset($className) && $className == 'entrega') ? "class='active'" : ''; ?> ><a class="icon-envelope-alt" href="<?php echo site_url('entrega-armas'); ?>">Entrega de Armas</a></li>
                
          </ul>
      </nav>
</div>


