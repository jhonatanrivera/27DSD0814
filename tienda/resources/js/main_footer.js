	$('#S1_A_1').change(function () {
		var S1_A_1_val = $('#S1_A_1').val();
		if(S1_A_1_val == 1) {return};
		if(S1_A_1_val>1 && S1_A_1_val<=20){
			$.ajax({
				url:CI.site_url+'consultar-miembros',
				type:'POST',
				dataType:'JSON',
				data:{'NUM_VIV':$('#NUM_VIV').val()},
				success:function (num) {
					var totRow = $("#table1 tbody tr").length;
					
					if (S1_A_1_val > totRow) {
						for (var i = totRow+1; i <= S1_A_1_val; i++) {
							addRow(i);
						};
					}else if(parseInt(S1_A_1_val) < totRow){
						for (var i = totRow; i >= S1_A_1_val; i--) {
							if (i>=num) {
								removeRow(i);
							}else{
								$('#S1_A_1').val(num)
							};
						};					
					};
				}
			}) 			
		}else{
			$('#S1_A_1').val('')
		}
	});


	$("#PTANUM").change(function () {
		if($(this).val() == ""){
			$("#MZ").removeAttr('disabled');$("#LOTE").removeAttr('disabled');
		}else{
			$("#MZ").attr('disabled','disabled');$("#LOTE").attr('disabled','disabled');
		}
	});


$("#S1_F_48").change(function () {
	var sel = $("#S1_49 input,#S1_F_48_A");
	if($(this).val() == 2){
		sel.attr('disabled','disabled'); sel.val('');
	}else{
		sel.removeAttr('disabled');
	}
});

$("#S1_F_50").change(function () {
	var sel = $("#S1_50 input:not(#S1_F_50),#S1_51 input");
	if($(this).val() == 2){
		sel.attr('disabled','disabled'); sel.val('');
	}else{
		sel.removeAttr('disabled');
	}
});

$("#S1_J_78").change(function  (argument) {
	var sel = $("#Parte_J input:not(#S1_J_78)");
	if($(this).val() == 2){
		sel.attr('disabled','disabled'); sel.val('');
	}else{
		sel.removeAttr('disabled');
	}
})





/************************************************************************************************
/************************************************************************************************
*
*  GUARDADO TAB1
*
/************************************************************************************************
*************************************************************************************************/
$("#frmTab1").validate({
    success: function  (label,element) {
    	$(element).prev('div.message').remove();
    	$(element).removeClass('hgError');
    },
    errorElement: "div",
    wrapper: "div",  // a wrapper around the error message
   errorPlacement: function(error, element) {
        offset = element.offset();
        $(element).addClass('hgError');
        error.append('<div class="arrow-down"></div>')
        error.insertBefore(element);
        error.addClass('message');  // add a class to the wrapper
        error.css('position', 'absolute');
        error.css('left', offset.left );
        error.css('top', offset.top - element.outerHeight());
    },	
	submitHandler:function(){
			ajax_btn("btnTab1",1);
			var frmTab = ["#frmTab1",1];
	    	var formData = $(frmTab[0]).serializeArray(); formData.push({name:'NUM_VIV', value:$('#NUM_VIV').val()});
	    	$.ajax({
	    		url: CI.site_url+'guardar/'+frmTab[1],
	    		type:'POST',
	    		dataType:'JSON',
	    		data:formData,
	    		success:function (argument) {
	    			ajax_btn("btnTab1");
	    			ajax_msg('EXITOSO','Se insertó satisfactoriamente',1);
	    			$("#tabsHogar li").removeClass('hide');
	    		}
	    	})  

	},

})



/************************************************************************************************
/************************************************************************************************
*
*  GUARDADO TAB2
*
/************************************************************************************************
*************************************************************************************************/
$("#frmTab2").validate({
	//rules:{'S1_A_1_NOM[1]':{required:true},},
    success: function  (label,element) {
    	$(element).prev('div.message').remove();
    	$(element).removeClass('hgError');
    },
    errorElement: "div",
    wrapper: "div",  // a wrapper around the error message
   errorPlacement: function(error, element) {
        offset = element.offset();
        $(element).addClass('hgError');
        error.append('<div class="arrow-down"></div>')
        error.insertBefore(element);
        error.addClass('message');  // add a class to the wrapper
        error.css('position', 'absolute');
        error.css('left', offset.left );
        error.css('top', offset.top - element.outerHeight());
    },

	submitHandler:function(){
			ajax_btn("btnTab2",1);
			var frmTab = ["#frmTab2",2];
	    	var formData = $(frmTab[0]).serializeArray(); formData.push({name:'NUM_VIV', value:$('#NUM_VIV').val()});
	    	$.ajax({
	    		url: CI.site_url+'guardar/'+frmTab[1],
	    		type:'POST',
	    		dataType:'JSON',
	    		data:formData,
	    		success:function (argument) {
	    			ajax_btn("btnTab2");
	    			ajax_msg('EXITOSO','Se insertó satisfactoriamente',1);
	    		},
	    		error:function function_name (argument) {
	    			ajax_btn("btnTab2");
	    			ajax_msg('ERROR','Al consultar al servidor',3);
	    		}
	    	})  

	},

})



/************************************************************************************************
/************************************************************************************************
*
*  GUARDADO TAB3
*
/************************************************************************************************
*************************************************************************************************/
$("#frmTab3").validate({
    success: function  (label,element) {
    	$(element).prev('div.message').remove();
    	$(element).removeClass('hgError');
    },
    errorElement: "div",
    wrapper: "div",  // a wrapper around the error message
   errorPlacement: function(error, element) {
        offset = element.offset();
        $(element).addClass('hgError');
        error.append('<div class="arrow-down"></div>')
        error.insertBefore(element);
        error.addClass('message');  // add a class to the wrapper
        error.css('position', 'absolute');
        error.css('left', offset.left );
        error.css('top', offset.top - element.outerHeight());
    },	
	submitHandler:function(){
			ajax_btn("btnTab3",1);
			var frmTab = ["#frmTab3",3];
	    	var formData = $(frmTab[0]).serializeArray(); formData.push({name:'NUM_VIV', value:$('#NUM_VIV').val()});
	    	$.ajax({
	    		url: CI.site_url+'guardar/'+frmTab[1],
	    		type:'POST',
	    		dataType:'JSON',
	    		data:formData,
	    		success:function (argument) {
	    			ajax_btn("btnTab3");
	    			ajax_msg('EXITOSO','Se insertó satisfactoriamente',1);
	    		}
	    	})  

	},
})




	$(window).load(function(){	
		$.ajax({
    		url: CI.site_url+'get',
    		type:'POST',
    		dataType:'JSON',
    		data:{NUM_VIV:$("#NUM_VIV").val()},
    		success:function (r) {
	    			$.each(r.hg1_localizacion, function (fieldName,fieldValue) {
						$("#"+fieldName).val(fieldValue); 
						if($("#"+fieldName).hasClass('setEspecificar')){$("#"+fieldName).trigger('change')};
					});

	    			$.each(r.hg2_seccion1_2, function (fieldName,fieldValue) {
						$("#"+fieldName).val(fieldValue); 
						if(!$("#"+fieldName).prop('disabled') && ($("#"+fieldName).hasClass('setFlujo') || $("#"+fieldName).hasClass('setEspecificar'))){$("#"+fieldName).trigger('change')};
					});

	    			$.each(r.hg3_seccion2a, function (fieldName,fieldValue) {
						$("#"+fieldName).val(fieldValue); 
						if(!$("#"+fieldName).prop('disabled') && ($("#"+fieldName).hasClass('setFlujo') || $("#"+fieldName).hasClass('setEspecificar'))){$("#"+fieldName).trigger('change')};
					});

	    			$.each(r.hg3_seccion2b, function (fieldName,fieldValue) {
						$("#"+fieldName).val(fieldValue); 
						if(!$("#"+fieldName).prop('disabled') && ($("#"+fieldName).hasClass('setFlujo') || $("#"+fieldName).hasClass('setEspecificar'))){$("#"+fieldName).trigger('change')};
					});		

					if(typeof(r.hg2_seccion1_1[0]) != "undefined" && r.hg2_seccion1_1[0] !== null){
						$.each(r.hg2_seccion1_1, function (i,row) {
							var cod = r.hg2_seccion1_1[i].COD_IDENT;
							addRow(cod);/* add Row a las tablas */    				
							$.each(row,function (fieldName,fieldValue) { 
								$("#"+fieldName+"-"+cod).val(fieldValue); 
								if(!$("#"+fieldName+"-"+cod).prop('disabled') && $("#"+fieldName+"-"+cod).hasClass('setFlujo')){$("#"+fieldName+"-"+cod).trigger('change');};
							})
						});
					}else{
						var cod = 1;
						addRow(cod);/* add Row a las tablas */ 
						$.each(r.hg2_seccion1_1,function (fieldName,fieldValue) { 
							$("#"+fieldName+"-"+cod).val(fieldValue); 
							if(!$("#"+fieldName+"-"+cod).prop('disabled') && $("#"+fieldName+"-"+cod).hasClass('setFlujo')){$("#"+fieldName+"-"+cod).trigger('change');};
						})	
					}

	    			//if(r.hg1_localizacion.length>=1){
					    setTimeout(function(){
					        setEspecifiqueTD();
					    },1000);	    				
	    			//}


    		},

		});


	});



// function addSecs(d, s) {return new Date(d.valueOf()+s*1000);}
// function doRun() {
//     document.getElementById('msg').innerHTML = 'Processing JS...';
//     setTimeout(function(){
//          start = new Date();
//          end = addSecs(start,5);
//          do {start = new Date();} while (end-start > 0);
//          document.getElementById('msg').innerHTML = 'Finished JS';   
//     },10);
// }



$(document).ajaxStart(function() {
  $( "#loading" ).show();
});
$(document).ajaxComplete(function() {
  $('#loading').fadeOut(1000);
});


/************************************************************************************************
/************************************************************************************************
*
*  GUARDADO TAB4
*
/************************************************************************************************
*************************************************************************************************/
$("#frmTab4").validate({
    success: function  (label,element) {
    	$(element).prev('div.message').remove();
    	$(element).removeClass('hgError');
    },
    errorElement: "div",
    wrapper: "div",  // a wrapper around the error message
   errorPlacement: function(error, element) {
        offset = element.offset();
        $(element).addClass('hgError');
        error.append('<div class="arrow-down"></div>')
        error.insertBefore(element);
        error.addClass('message');  // add a class to the wrapper
        error.css('position', 'absolute');
        error.css('left', offset.left );
        error.css('top', offset.top - element.outerHeight());
    },	
	submitHandler:function(){
			ajax_btn("btnTab4",1);
			var frmTab = ["#frmTab4",4];
	    	var formData = $(frmTab[0]).serializeArray(); formData.push({name:'NUM_VIV', value:$('#NUM_VIV').val()});
	    	$.ajax({
	    		url: CI.site_url+'guardar/'+frmTab[1],
	    		type:'POST',
	    		dataType:'JSON',
	    		data:formData,
	    		success:function (argument) {
	    			ajax_btn("btnTab4");
	    			ajax_msg('EXITOSO','Se insertó satisfactoriamente',1);
	    		}
	    	})  

	},
})



/************************************************************************************************
/************************************************************************************************
*
*  GUARDADO TAB5
*
/************************************************************************************************
*************************************************************************************************/
$("#frmTab5").validate({
    success: function  (label,element) {
    	$(element).prev('div.message').remove();
    	$(element).removeClass('hgError');
    },
    errorElement: "div",
    wrapper: "div",  // a wrapper around the error message
   errorPlacement: function(error, element) {
        offset = element.offset();
        $(element).addClass('hgError');
        error.append('<div class="arrow-down"></div>')
        error.insertBefore(element);
        error.addClass('message');  // add a class to the wrapper
        error.css('position', 'absolute');
        error.css('left', offset.left );
        error.css('top', offset.top - element.outerHeight());
    },	
	submitHandler:function(){
			ajax_btn("btnTab5",1);
			var frmTab = ["#frmTab5",5];
	    	var formData = $(frmTab[0]).serializeArray(); formData.push({name:'NUM_VIV', value:$('#NUM_VIV').val()});
	    	$.ajax({
	    		url: CI.site_url+'guardar/'+frmTab[1],
	    		type:'POST',
	    		dataType:'JSON',
	    		data:formData,
	    		success:function (argument) {
	    			ajax_btn("btnTab5");
	    			ajax_msg('EXITOSO','Se insertó satisfactoriamente',1);
	    		}
	    	})  

	},
})