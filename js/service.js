async function dropHandler(event) {

    //prevent another drop
    event.preventDefault();

  
    //collect file list
    const items = event.dataTransfer.items;

    document.querySelector("#canvas").style.display='block'
    document.querySelector("#drop-panel").style.display='none'

    console.log('document.getElementById', document.getElementById('canvas'))

    var urlCreator = window.URL || window.webkitURL;
    console.log('items[0]:', items[0])
    var imageUrl = urlCreator.createObjectURL(items[0].getAsFile());
    document.querySelector("#image").src = imageUrl;
    document.querySelector("#mirror-top").src = imageUrl;
    document.querySelector("#mirror-left").src = imageUrl;
    document.querySelector("#mirror-right").src = imageUrl;
    document.querySelector("#mirror-bottom").src = imageUrl;
}

$( ".remas" ).hover(
  function() {
    $("."+$(this).attr('data-rbid')).show();
  }, function() {
    $("."+$(this).attr('data-rbid')).hide();
  }
);

var orginal_width, orginal_height, w, h, iw, ih, inv_top, inv_bot, inv_left, inv_right, mirror, type, bi, ml, mr, mt, mb, pt=0, pr=0, pb=0, pl=0, ptp=0, prp=0, pbp=0, plp=0, remo_plotis;

function reminimas() {
	
	var bheight = (remo_plotis*100/2.5)*mirror/100;
	var paspartu = (5*100/2.5)*mirror/100;
	
	$('.mirror').hide();
	
	var picture_width = $('.picture').width() + prp + plp;
	var picture_height = $('.picture').height() + ptp + pbp;

	$('.border').show();
	$('.border-img').height(mirror);
	$('.border-img').css('margin-left', (mirror*-1-1));
	$('.border-height').height(mirror);
	$('.border-bottom').css('top', picture_height+mirror);
	
	$('.border-bottom').css('right', mirror*-1);
	//$('.border-bottom').css('right', mirror*-1);
	
	$('.border-top').css('left', mirror*-1);
	$('.border-top').css('top', 0);
	
	//$('.border-right').css('top', $('.picture').height()*-1/2+mirror);
	
	//$('.border-right').css('top', picture_width - picture_height -bheight *-1); //$('.border-img').width()/2*-1
	//$('.border-left').css('top', picture_width);
	
	//$('.border-right').css('top', 0);
	
	console.log('cia');
	
	//console.log(picture_width - picture_height - bheight * -1);
	//console.log(mirror);
	
	
	$('.border-top, .border-left, .border-right, .border-bottom').width(picture_width*2+mirror);
	
	$('.space2').css('padding', '0 '+mirror+'px');
	$('.space2').css('margin-left', parseInt(margin = (600 - mirror*2 - w) / 2));
	
	//reminimas_fix();

}

function reminimas_fix() {
	var bheight = (remo_plotis*100/2.5)*mirror/100;
	var paspartu = (5*100/2.5)*mirror/100;	
	
	//$('.border-img').attr('src', 'get.php?i.'+id);
	
	$('.border-img').height(bheight);
	$('.border-img').css('margin-left', (bheight*-1-1));
	$('.border-height').height(bheight);
	$('.border-bottom').css('top', $('.picture').height() +((pt*100/2.5)*mirror/100+(pb*100/2.5)*mirror/100) +bheight);
	$('.border-bottom').css('right', bheight*-1);
	
	$('.border-top').css('left', bheight*-1);
	$('.border-top').css('top', 0);
	
	console.log($('.picture').width());
	console.log($('.picture').height());
	
	$('.border-right').css('top', ($('.picture').width()-$('.picture').height()-bheight)*-1); //$('.border-img').width()/2*-1
	
	$('.border-left').css('top', $('.picture').width());
	
	
	$('.border-top, .border-left, .border-right, .border-bottom').width( ($('.picture').width() +((pr*100/2.5)*mirror/100+(pl*100/2.5)*mirror/100)) *2+bheight);
	
	$('.space2').css('padding', '0 '+bheight+'px');
	$('.space2').css('margin-left', parseInt(margin = (600 - bheight*2 - w) / 2));

}

function nereminimas() {
	$('.mirror').hide();

	$('.border').hide();
	$('.border-img').height(mirror);
	$('.border-img').css('margin-left', (mirror*-1-1));
	$('.border-height').height(mirror);
	$('.border-bottom').css('top', $('.picture').height()+mirror);
	$('.border-bottom').css('right', mirror*-1);
	
	$('.border-top').css('left', mirror*-1);
	$('.border-top').css('top', 0);
	
	$('.border-right').css('top', $('.picture').height()*-1/2+mirror);
	
	$('.border-top, .border-left, .border-right, .border-bottom').width($('.picture').width()*2+mirror);
	
	$('.space2').css('padding', '0 '+mirror+'px');
	$('.space2').css('margin-left', parseInt(margin = (600 - mirror*2 - w) / 2));
}

function choose_border(id, plotis) {
	
	remo_plotis = plotis;
	
	var bheight = (remo_plotis*100/2.5)*mirror/100;
	var paspartu = (5*100/2.5)*mirror/100;	
	
	reminimas();	
	
	
	var picture_width = $('.picture').width() + prp + plp;
	var picture_height = $('.picture').height() + ptp + pbp;
	
	$('.border-img').attr('src', 'get.php?i.'+id);
	
	$('.border-img').height(bheight);
	$('.border-img').css('margin-left', (bheight*-1-1));
	$('.border-height').height(bheight);
	$('.border-bottom').css('top', $('.picture').height() +((pt*100/2.5)*mirror/100+(pb*100/2.5)*mirror/100) +bheight);
	$('.border-bottom').css('right', bheight*-1);
	
	$('.border-top').css('left', bheight*-1);
	$('.border-top').css('top', 0);
	
	//$('.border-right').css('top', ($('.picture').height() +((pt*100/2.5)*mirror/100+(pb*100/2.5)*mirror/100)) *-1/2+bheight);

	//$('.border-right').css('top', ($('.picture').width()-$('.picture').height()-bheight)*-1); //$('.border-img').width()/2*-1
	//$('.border-left').css('top', $('.picture').width());
	
	//$('.border-right').css('top', ($('.picture').width()-$('.picture').height()-bheight)*-1);
	$('.border-right').css('top', (picture_width - picture_height -bheight) *-1);
	//console.log(($('.picture').width()-$('.picture').height()-bheight)*-1);

	//$('.border-left').css('top', $('.picture').width());
	$('.border-left').css('top', picture_width);
	
	$('.border-top, .border-left, .border-right, .border-bottom').width( ($('.picture').width() +((pr*100/2.5)*mirror/100+(pl*100/2.5)*mirror/100)) *2+bheight);
	
	$('.space2').css('padding', '0 '+bheight+'px');
	$('.space2').css('margin-left', parseInt(margin = (600 - bheight*2 - w) / 2));
	
	
}

function paspartu(ptx, prx, pbx, plx) {
	
	pt = ptx;
	pr = prx;
	pb = pbx;
	pl = plx;
	
	ptx = (ptx*100/2.5)*mirror/100;
	prx = (prx*100/2.5)*mirror/100;
	pbx = (pbx*100/2.5)*mirror/100;
	plx = (plx*100/2.5)*mirror/100;
	
	ptp = ptx;
	prp = prx;
	pbp = pbx;
	plp = plx;
	
	$(".picture").css('border-left', plx+'px solid white');
	$(".picture").css('border-right', prx+'px solid white');
	$(".picture").css('border-top', ptx+'px solid white');
	$(".picture").css('border-bottom', pbx+'px solid white');
	

}

function clear_paspartu() {
	pt = 0;
	pr = 0;
	pb = 0;
	pl = 0;
	
	ptx = (pt*100/2.5)*mirror/100;
	prx = (pr*100/2.5)*mirror/100;
	pbx = (pb*100/2.5)*mirror/100;
	plx = (pl*100/2.5)*mirror/100;
	
	$(".picture").css('border-left', plx+'px solid white');
	$(".picture").css('border-right', prx+'px solid white');
	$(".picture").css('border-top', ptx+'px solid white');
	$(".picture").css('border-bottom', pbx+'px solid white');
}

function spalvota() {
		document.getElementById('image').src = "photos/r_vegeta-chapitre-62.jpeg";
	document.getElementById('mirror-top').src = "photos/v_vegeta-chapitre-62.jpeg";
	document.getElementById('mirror-left').src = "photos/h_vegeta-chapitre-62.jpeg";
	document.getElementById('mirror-right').src = "photos/h_vegeta-chapitre-62.jpeg";
	document.getElementById('mirror-bottom').src = "photos/v_vegeta-chapitre-62.jpeg";
		setTimeout(function(){$('#loading').hide();}, 1000);
}



function sephia() {
	var myCnv = document.createElement("canvas");
	var myCtx = myCnv.getContext("2d");
	var list = ["image", "mirror-left", "mirror-right", "mirror-top", "mirror-bottom"];
	$.each(list, function( index, value ) {
		image = document.getElementById(value);
		myCnv.width = image.naturalWidth;
		myCnv.height = image.naturalHeight;
		myCtx.drawImage(image, 0, 0);
		var imgData = myCtx.getImageData(0, 0, myCnv.width, myCnv.height);
		for (var y = 0; y < imgData.height; y++) {
			for (var x = 0; x < imgData.width; x++) {
				var pos = (y * 4) * imgData.width + (x * 4);
				var mono = imgData.data[pos] * 0.32 + imgData.data[pos + 1] * 0.5 + imgData.data[pos + 2] * 0.18;
				imgData.data[pos] = mono + 50;
				imgData.data[pos + 1] = mono;
				imgData.data[pos + 2] = mono - 50;
			}
		}
		myCtx.putImageData(imgData, 0, 0, 0, 0, imgData.width, imgData.height);
		document.getElementById(value).src = myCnv.toDataURL();
	});
	setTimeout(function(){$('#loading').hide();}, 1000);
}

function nuotrauka() {
	type = "nuotrauka";
	$('.krastas-horizontal').css('background', 'none');
	$('.krastas-vertical').css('background', 'none');
	$('.mirror-top').hide();
	$('.mirror-right').hide();
	$('.mirror-left').hide();
	$('.mirror-bottom').hide();
	$('#image').css('margin-left', mirror*-1);
	$('#image').css('margin-top', mirror*-1);
	
	$('#image').width(iw+mirror*2);
	$('#image').height(ih+mirror*2);

	$('.emptyborder').width(mirror);
	$('.emptyborder').height(mirror);
	
	$('.picture').addClass('nuotrauka');

	limits();
	$( "#slider" ).slider( "value", 115 );
	$( "#slider" ).slider("option", "min", 115);
	$(".ui-slider-handle").css("left","0%");
	$('#spalva_code').val('');
	
}

function veidrodis() {
	type = "veidrodis";
	$('.picture2').hide();
	$('.krastas-horizontal').css('background', 'white');
	$('.krastas-vertical').css('background', 'white');
	$('.mirror-top').show();
	$('.mirror-right').show();
	$('.mirror-left').show();
	$('.mirror-bottom').show();
	$('#image').css('margin-left', 0);
	$('#image').css('margin-top', 0);
	$('#image').width(iw);
	$('#image').height(ih);
	$(".image-width").width($("#image").width());
	$(".image-height").height($("#image").height());
	mirrors();
	$( "#slider" ).slider( "value", 100 );
	$( "#slider" ).slider("option", "min", 100);
	$(".ui-slider-handle").css("left","0%");
	$('#spalva_code').val('');
}

function spalva() {
	type = "spalva";
	$('.picture2').hide();
	$('.mirror-top').hide();
	$('.mirror-right').hide();
	$('.mirror-left').hide();
	$('.mirror-bottom').hide();
	$('.krastas-horizontal').css('background', $('#spalva').val());
	$('.krastas-vertical').css('background', $('#spalva').val());
	$('#image').css('margin-left', 0);
	$('#image').css('margin-top', 0);
	$('#image').width(iw);
	$('#image').height(ih);
	mirrors();
	$( "#slider" ).slider( "value", 100 );
	$( "#slider" ).slider("option", "min", 100);
	$(".ui-slider-handle").css("left","0%");
	$('#spalva_code').val($('#spalva').val());
}

function siena() {
	$('.wall').css('background', $('#siena').val());
}


function limits() {
	if (type=="nuotrauka") {
			if (parseInt($('#image').css('top')) < ($('.picture').height() - $('#image').height() + mirror*2)) {
			$('#image').css('top', $('.picture').height() - $('#image').height() + mirror*2);
		}
		if (parseInt($('#image').css('left')) < ($('.picture').width() - $('#image').width() + mirror*2)) {
			$('#image').css('left', $('.picture').width() - $('#image').width() + mirror*2);
		}

	} else {
		if (parseInt($('#image').css('top')) < ($('.picture').height() - $('#image').height())) {
			$('#image').css('top', ($('.picture').height() - $('#image').height()));
		}
		if (parseInt($('#image').css('left')) < ($('.picture').width() - $('#image').width())) {
			$('#image').css('left', $('.picture').width() - $('#image').width());
		}
	}
	if (parseInt($('#image').css('left')) > 0 ) {
		$('#image').css('left', 0);
	}
	if (parseInt($('#image').css('top')) > 0 ) {
		$('#image').css('top', 0);
	}
	$('#move_top').val($('#image').css('top'));
	$('#move_left').val($('#image').css('left'));
	mirrors();
}

function mirrors() {
	w = Math.round($('.picture').width());
	h = Math.round($('.picture').height());
	
	$('.mirror-top').css('bottom', parseInt($('#image').css('top')));
	$('.mirror-top').css('left', parseInt($('#image').css('left')));
	
	$('.mirror-left').css('top', parseInt($('#image').css('top')));
	$('.mirror-left').css('right', (parseInt($('#image').css('left'))));
	
	$('.mirror-bottom').css('top', ($('#image').height() - h + parseInt($('#image').css('top'))) * -1);
	$('.mirror-bottom').css('left', parseInt($('#image').css('left')));
	
	$('.mirror-right').css('top', parseInt($('#image').css('top')));
	$('.mirror-right').css('left', ($('#image').width() - w + parseInt($('#image').css('left'))) * -1);

}

function change_size(x, y) {
	$('#image').css('top', 0);
	$('#image').css('left', 0);
	
	if ((x / y) > 1.5) {
		var w = 500;
		var h = Math.round(w / (x / y));
		mirror = 500 * 2.5 / x;
	} else {
		var h = 333;
		var w = Math.round(h / (y / x));
		mirror = 333 * 2.5 / y;
	}
	
	if (type=="nuotrauka") {
		$('#image').css('margin-left', mirror*-1);
		$('#image').css('margin-top', mirror*-1);
	}
	
	$('.emptyborder').width(mirror);
	$('.emptyborder').height(mirror);
	
	$('.krastas-vertical').width(mirror);
	$('.krastas-horizontal').height(mirror);	
	
		if (w == 500) {
		margin = (600 - mirror*2 - w) / 2;
		$('.space2').css('margin-left', margin);
	} else {
		margin = (600 - mirror*2 - w) / 2;
		$('.space2').css('margin-left', margin);
	}
		
	$('.picture').width(w);
	$('.picture').height(h);
	$('.picture-width').width(w);
	$('.picture-height').height(h);
	
	if ((w / h) <= (orginal_width / orginal_height)) {
		if(type=="nuotrauka") {
			$('#image').width(h * (orginal_width / orginal_height)+mirror*2);
			$('#image').height(h+mirror*2);		
		} else {
			$('#image').width(h * (orginal_width / orginal_height));
			$('#image').height(h);
		}
		iw = h * (orginal_width / orginal_height);
		ih = h;
	} else {
		if (type=="nuotrauka") {
			$('#image').width(w+mirror*2);
			$('#image').height(w * (orginal_height / orginal_width)+mirror*2);

		} else {
			$('#image').width(w);
			$('#image').height(w * (orginal_height / orginal_width));
		}
		iw = w;
		ih = w * (orginal_height / orginal_width);
	}
	
	$('#image_w').val(iw);
	$('#image_h').val(ih);
	$('#picture_w').val(w);
	$('#picture_h').val(h);
	
	$( "#image" ).draggable({ 
		drag: function( event, ui ) { mirrors(); },
		stop: function( event, ui ) { limits(); }
	});
	
	mirrors();
	
	$(".image-width").width($("#image").width());
	$(".image-height").height($("#image").height());
	
	$(".wallpic").width(parseInt(x*0.8));
	$(".wallpic").height(parseInt(y*0.8));
	
	if(x > y) {
		$(".wallpic img").width('100%'); $(".wallpic img").height('auto');
	} else {
		$(".wallpic img").width('auto'); $(".wallpic img").height('100%');
	}
	
	$(".wallpic").css('margin-left', 60-$(".wallpic").width()/2);
	reminimas_fix();

}

function custom_size() {
		if ($('.custom_x').val()>100 && $('.custom_y').val()>100) {
			alert('Jūsų pasirinktas formatas per didelis. Maksimalus leistinas (100x999cm arba 999x100cm). Pageidaujantys didesnio formato rašykite el. paštu info@foto123.lt arba skambinkite telefonu 8 614 03123.');
	} else {
		$("."+$(this).attr('data-type')).find('img').attr('src', 'client/img/radio_off.jpg');
		$.ajax({
			url: "reminimas/change/2/custom_dydziai/"+$('.custom_x').val()+"/"+$('.custom_y').val(),
		}).done(function( msg ) {
			var obj = jQuery.parseJSON( msg );
			$.each(obj, function(key, value) {
				if (key=="all") {
					$(".price_"+key).html(value+' &euro;');
				} else {
					if (value.price>0) $(".price_"+key).html(value.price+' &euro;');
					if (value.discount>0) $(".priced_"+key).html(value.discount+' &euro;');
				}
			});
		});
		change_size($('.custom_x').val(), $('.custom_y').val());
	}
};

$(function() {
	$( ".infoico" ).hover(
		function() {
			$( ".infobox" ).hide();
			$( ".info-"+$( this ).attr('data-id') ).show();
		}, function() {
			$( ".info-"+$( this ).attr('data-id') ).hide();
		}
	);
	
		orginal_width = 1840;
	orginal_height = 1000;

	$("#keisti").click(function(){
	   $("#upload").click();
	});
	
		
	//$( "#image" ).load(function() {
	if ($("#image").attr('src')) {
		bi = document.getElementById("image").src;
		ml = document.getElementById("mirror-left").src;
		mr = document.getElementById("mirror-right").src;
		mt = document.getElementById("mirror-top").src;
		mb = document.getElementById("mirror-bottom").src;

		
				$('.mirror-top').show();
		$('.mirror-right').show();
		$('.mirror-left').show();
		$('.mirror-bottom').show();
		$('.krastas-vertical').show();
		$('.krastas-horizontal').show();
				
		$('.space').show();
		//console.log('rodo');
		
		$(".image-width").width($("#image").width());
		$(".image-height").height($("#image").height());
		
				
		change_size(60, 40); 				
	}
	//});

	$('#upload').change(function() {
	  $('#upload-form').submit();
	  $('#loading').show();
	});

	
	$( ".groups" ).click(function() {
		$(".grouplist").hide();
		$(".active_group").removeClass('active_group');
		$("."+$(this).attr('data-type')).show();
		$(this).addClass('active_group');
	});
	
	
	$( ".punktas" ).click(function() {
		
		//console.log("reminimas/change/2/"+$(this).attr('data-type')+"/"+$(this).attr('data-id')+"/"+$(this).attr('data-subid'));
		
		$("."+$(this).attr('data-type')).find('img').attr('src', 'client/img/radio_off.jpg');
		$(this).find('img').attr('src', 'client/img/radio_on.jpg');
		
		if($(this).attr('data-type')=="reminimas" && $(this).attr('data-subid')) {
			$('#remico').find('img').attr('src', 'client/img/radio_on.jpg');
		}
		
		$.ajax({
			url: "reminimas/change/2/"+$(this).attr('data-type')+"/"+$(this).attr('data-id')+"/"+$(this).attr('data-subid'),
		}).done(function( msg ) {
			//console.log(msg);
			var obj = jQuery.parseJSON( msg );
			$.each(obj, function(key, value) {
				if (key=="all") {
					$(".price_"+key).html(value+' &euro;');
				} else {
					//console.log(".price_"+key);
					if (value.price>0) $(".price_"+key).html(value.price+' &euro;');
					if (value.discount>0) $(".priced_"+key).html(value.discount+' &euro;');
				}
			});
		});
	});

	
	$( ".autoclick" ).each(function( index ) {
		$("."+$(this).attr('data-type')).find('img').attr('src', 'client/img/radio_off.jpg');
		$(this).find('img').attr('src', 'client/img/radio_on.jpg');
		//console.log("reminimas/change/2/"+$(this).attr('data-type')+"/"+$(this).attr('data-id'));
		$.ajax({			
			url: "reminimas/change/2/"+$(this).attr('data-type')+"/"+$(this).attr('data-id'),
		}).done(function( msg ) {
			var obj = jQuery.parseJSON( msg );
			$.each(obj, function(key, value) {
				if (key=="all") {
					$(".price_"+key).html(value+' &euro;');
				} else {
					if (value.price>0) $(".price_"+key).html(value.price+' &euro;');
					if (value.discount>0) $(".priced_"+key).html(value.discount+' &euro;');
				}
			});
		});
		
	});

	//$( "#image" ).draggable();
	$( "#slider" ).slider({
      min: 100,
      max: 200,
      values: [ 100 ],
      slide: function( event, ui ) {
		if ($('.picture').width()/$('.picture').height() > $('#image').width()/$('#image').height()) {
			$("#image").width(ui.values[ 0 ]+'%');
			$("#image").height('auto');
		} else {
			$("#image").height(ui.values[ 0 ]+'%');
			$("#image").width('auto');
		}
		
        $(".image-width").width($("#image").width());
        $(".image-height").height($("#image").height());
		$('#image_w').val($("#image").width());
		$('#image_h').val($("#image").height());
		mirrors();
		limits();
		
      }
    });
	

	
});