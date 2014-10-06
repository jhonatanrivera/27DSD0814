<?php !isset($this->header) ? $this->load->view('_template/header') : FALSE; ?>	
<div style="width:1200px;margin:0px  auto;">


<?php !isset($this->nav) ? $this->load->view('_template/nav') : FALSE; ?>	
	<div class="container-fluid">
		<div class="row main" style="padding-top:30px; padding-bottom:30px;">
			<!-- 
				width por defecto del template
				<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"> 
			-->
			<!--<div class="">-->

				<?php 

					if ($main_content != null) {
						$this->load->view($main_content); 	
					}
					
				?>
			<!--</div>-->
		</div>
	</div>


<?php !isset($this->footer) ? $this->load->view('_template/footer') : FALSE; ?>		

</div>


