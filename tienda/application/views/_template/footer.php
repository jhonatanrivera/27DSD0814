
<div id="wrapper">
  <nav role="navigation" id="access">
    <a class="skip-link icon-reorder" title="Accéder au menu" href="#menu">Menu</a>
    <ul id="menu">
                <li <?php echo (isset($className) && $className == 'home') ? "class='active'" : ''; ?> ><a href="<?php echo site_url(); ?>">Home</a></li>
                <li <?php echo (isset($className) && $className == 'arma') ? "class='active'" : ''; ?> ><a href="<?php echo site_url('armas'); ?>">Armas</a></li>
                <li <?php echo (isset($className) && $className == '') ? "class='active'" : ''; ?> ><a href="<?php echo site_url(); ?>">Portfolio</a></li>
                <li <?php echo (isset($className) && $className == '') ? "class='active'" : ''; ?> ><a href="<?php echo site_url(); ?>">Contact</a></li>
                <li <?php echo (isset($className) && $className == '') ? "class='active'" : ''; ?> ><a href="<?php echo site_url(); ?>">Usuario</a></li>
          </ul>
      </nav>
</div>
<div style="color:#FFFFFF; align:left;">Derechos reservados (c) 2014</div>
<script src="<?php echo base_url('resources/js/main_footer.js'); ?>"></script>
</body>
</html>