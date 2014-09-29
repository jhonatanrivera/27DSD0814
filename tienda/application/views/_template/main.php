<?php !isset($this->header) ? $this->load->view('_template/header') : FALSE; ?>	
<?php !isset($this->nav) ? $this->load->view('_template/nav') : FALSE; ?>	
	<div class="container-fluid">
		<div class="row main">
			<!-- 
				width por defecto del template
				<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"> 
			-->
			<div class="">

				<?php 

					if ($main_content != null) {
						$this->load->view($main_content); 	
					}
					
				?>
			</div>
		</div>
	</div>


<?php !isset($this->footer) ? $this->load->view('_template/footer') : FALSE; ?>		