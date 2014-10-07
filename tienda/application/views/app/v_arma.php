    <!-- jssor.slider.mini.js = jssor.sliderc.mini.js = jssor.sliders.mini.js = (jssor.core.js + jssor.utils.js + jssor.slider.js) -->
    <script type="text/javascript" src="<?php echo base_url('resources/js/jssor.sliders.mini.js');?>"></script>
    <!-- Jssor Slider Begin -->
    <!-- You can move inline styles to css file or css block. -->
    <div id="slider1_container" style="position: relative; top: 0px; left: 0px; width: 810px; height: 300px; background: #000; overflow: hidden; ">

        <!-- Loading Screen -->
        <div u="loading" style="position: absolute; top: 0px; left: 0px;">
            <div style="filter: alpha(opacity=70); opacity:0.7; position: absolute; display: block;
                background-color: #000000; top: 0px; left: 0px;width: 100%;height:100%;">
            </div>
            <div style="position: absolute; display: block; background: url(<?php base_url('resources/images/loading.gif'); ?>) no-repeat center center;
                top: 0px; left: 0px;width: 100%;height:100%;">
            </div>
        </div>

        <!-- Slides Container -->
        <div u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 600px; height: 300px;
            overflow: hidden;">
            <?php foreach ($armas as $row) {
                   echo '<div><div style="z-index:85452;position:relative;bottom:-248px; right:-5px;"><button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modalComprar" onclick="comprar(\''.$row->MODELO.'\')">Comprar</button> </div>
                        <img u="image" src="'. base_url('resources/images/armas/'.$row->URL_IMAGEN.'.jpg').'" />
                        <div u="thumb">
                            <img class="i" src="'. base_url('resources/images/armas/'.$row->URL_IMAGEN.'.jpg').'" /><div class="t">'.$row->MARCA.'</div>
                            <div class="c">STOCK: '.$row->STOCK.'</div>
                        </div>
                    </div>';                




            } ?>
          
        </div>
        
        <!-- ThumbnailNavigator Skin Begin -->
        <div u="thumbnavigator" class="jssort11" style="position: absolute; width: 200px; height: 300px; left:605px; top:0px;">
            <!-- Thumbnail Item Skin Begin -->


            <div u="slides" style="cursor: move;">
                <div u="prototype" class="p" style="position: absolute; width: 200px; height: 69px; top: 0; left: 0;">
                    <thumbnailtemplate style=" width: 100%; height: 100%; border: none;position:absolute; top: 0; left: 0;"></thumbnailtemplate>
                </div>
            </div>
            <!-- Thumbnail Item Skin End -->
        </div>
        <!-- ThumbnailNavigator Skin End -->

    </div>
    <!-- Jssor Slider End -->

<!-- Modal -->
<div class="modal fade" id="modalComprar" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <form id="frmComprar">
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
            <div class="row"><div class="col-md-3"><h5><b>Descripcion</b></h5></div><div class="col-md-8" id="divComprarDesc"></div></div>
            <div class="row"><div class="col-md-3"><h5><b>Caracteristicas</b></h5></div><div class="col-md-8" id="divComprarCarac"></div></div>
            <div class="row"><div class="col-md-3"><h5><b>STOCK</b></h5></div><div class="col-md-8" id="divComprarStock"></div></div>
            <div class="row"><div class="col-md-3"><h5><b>Precio</b></h5></div><div class="col-md-8" id="divComprarPrec"></div></div>
            <div class="row"><div class="col-md-3"><h5><b>Autorizacion</b></h5></div><div class="col-md-8" id="divComprarPrec">Civil</div></div>
            <hr>

              <div class="form-group">
                <?php echo form_label('Nombres del comprador','COD_USUARIO');?>
                <?php echo form_dropdown('COD_USUARIO',$usuarios,NULL,'class="form-control"');?>
              </div>
              <div class="form-group">
                <?php echo form_label('Tipo de pago','TIPO_PAGO');?><br>
                <label class="radio-inline"> <input type="radio" name="TIPO_PAGO" id="TIPO_PAGO1" value="1"> EFECTIVO </label>
                <label class="radio-inline"> <input type="radio" name="TIPO_PAGO" id="TIPO_PAGO2" value="2"> CHEQUE </label>
                <label class="radio-inline"> <input type="radio" name="TIPO_PAGO" id="TIPO_PAGO3" value="3"> VISA </label>
                <label class="radio-inline"> <input type="radio" name="TIPO_PAGO" id="TIPO_PAGO4" value="4"> MASTERCARD </label>
              </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
        <input id="btnGuardar" type="submit" class="btn btn-primary" value="Comprar">
      </div>
       </form>
    </div>
  </div>
</div>


<script type="text/javascript">
var marcas = <?php  echo (isset($armas) && count($armas)>=1) ? json_encode($armas) : '""'; ?>;

        jQuery(document).ready(function ($) { 
            var options = {
                $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                $AutoPlayInterval: 3500,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
                $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

                $ArrowKeyNavigation: true,                          //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
                $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                $MinDragOffsetToSlide: 60,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                $SlideSpacing: 5,                                   //[Optional] Space between each slide in pixels, default value is 0
                $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
                $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

                $ThumbnailNavigatorOptions: {
                    $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

                    $Loop: 1,                                       //[Optional] Enable loop(circular) of carousel or not, 0: stop, 1: loop, 2 rewind, default value is 1
                    $AutoCenter: 3,                                 //[Optional] Auto center thumbnail items in the thumbnail navigator container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 3
                    $Lanes: 1,                                      //[Optional] Specify lanes to arrange thumbnails, default value is 1
                    $SpacingX: 16,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
                    $SpacingY: 16,                                   //[Optional] Vertical space between each thumbnail in pixel, default value is 0
                    $DisplayPieces: 3,                              //[Optional] Number of pieces to display, default value is 1
                    $ParkingPosition: 0,                            //[Optional] The offset position to park thumbnail
                    $Orientation: 2,                                //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
                    $DisableDrag: false                             //[Optional] Disable drag or not, default value is false
                }
            };

            var jssor_slider1 = new $JssorSlider$("slider1_container", options);

            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
                var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
                if (parentWidth) {
                    var sliderWidth = parentWidth;

                    //keep the slider width no more than 810
                    sliderWidth = Math.min(sliderWidth, 1200);

                    jssor_slider1.$SetScaleWidth(sliderWidth);
                }
                else
                    window.setTimeout(ScaleSlider, 30);
            }

            ScaleSlider();

            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                $(window).bind('resize', ScaleSlider);
            }


            //if (navigator.userAgent.match(/(iPhone|iPod|iPad)/)) {
            //    $(window).bind("orientationchange", ScaleSlider);
            //}
            //responsive code end
        });

    function comprar(argument) {
        var k=999;
        for (var i = marcas.length - 1; i >= 0; i--) {
            if(marcas[i].MODELO == argument){
                k = i; break;
            };
        };
        if (k!=999) {
            $("#MODELO").val(argument);
            $("#divComprarTitle").html('COMPRAR | '+marcas[k].MARCA);
            $("#divComprarDesc").html(marcas[k].CARACTERISTICAS);
            $("#divComprarPrec").html(marcas[k].PRECIO);
            $("#divComprarStock").html(marcas[k].STOCK);
            $("#imgComprar").attr('src',CI.base_url+'resources/images/armas/'+marcas[k].URL_IMAGEN+'.jpg');
        };
    }



    function ajax_btn(b,op){
        var btn = $("#"+b); 
        if (op == 1) {
            btn.css({'background-image':'url('+CI.base_url+'resources/images/loader-ajax.gif)','background-size':'100% 100%','background-position':'center center'});
            btn.val('Guardando...');btn.attr('disabled','disabled');        
        }else{
            btn.removeAttr('disabled'); btn.css('background-image','none'); btn.val('VENDIDO'); 
        }
    }



    $("#frmComprar").validate({

        submitHandler:function(){
                ajax_btn("btnGuardar",1);
                var formData = $("#frmComprar").serializeArray();
                $.ajax({
                    url: CI.site_url+'registrar-venta',
                    type:'POST',
                    dataType:'JSON',
                    data:formData,
                    success:function (argument) {
                        ajax_btn("btnGuardar");
                        alert("Se realizo correctamente la venta");
                        window.location = CI.site_url+'/armas';
                    }
                })  

        },

    })


</script>