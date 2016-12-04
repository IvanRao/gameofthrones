$(function() {

var slider = $('#slider');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,1500, function(){
		$('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,1500, function(){
		$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
		slider.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 5000);
}
siguiente.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();
    
    


});

$(function() {

var personajes = $('#personajes-filas');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');
    
$('#personajes-filas section:last').insertBefore('#personajes-filas section:first');
//mostrar la primera imagen con un margen de -100%
personajes.css('margin-left', '-'+100+'%');
    
function moverD() {
	personajes.animate({
		marginLeft:'-'+200+'%'
	} ,1500, function(){
		$('#personajes-filas section:first').insertAfter('#personajes-filas section:last');
		personajes.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	personajes.animate({
		marginLeft:0
	} ,1500, function(){
		$('#personajes-filas section:last').insertBefore('#personajes-filas section:first');
		personajes.css('margin-left', '-'+100+'%');
	});
}
    
});