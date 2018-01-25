$(document).ready(function(){

	var elem = document.querySelector('.columns');

	var iso = new Isotope(elem, {
		itemSelector: '.card',
	});

	var msnry = new Masonry(elem,{
		itemSelector: '.card',
		columnWidth: 375,
		fitWidth: true
	});

	$('.list-group-item').on( 'click', 'button', function() {
		  var filterValue = $( this ).attr('data-sort');
		  
		  iso.arrange({
		  	filter: filterValue,
		  	masonry: {
		  		columnWidth: 375
		  	},
		  	transitionDuration: 0,
		  	hiddenStyle: {
		  		opacity: .2
		  	},
		  	visibleStyle: {
		  		opacity: 1
		  	}

		  });

		  $('.sorts').children().removeClass('active');
		  $('.sorts[data-sort=' + '"' + filterValue + '"' + ']').children().addClass('active');
		});

		$('.nav-item').click(function(){
			$('.nav-item').removeClass('active');
			$(this).addClass('active');
		});


	$(window.location.hash).modal('show');
	 $('.card[data-toggle="modal"]').click(function(){
	     window.location.hash = $(this).data('target');
	 });

	 function revertToOriginalURL() {
	     var original = window.location.href.substr(0, window.location.href.indexOf('#'))
	     history.replaceState({}, document.title, original);
	 }

	 $('.modal').on('hidden.bs.modal', function () {
	     revertToOriginalURL();
	 });

	 $("#faith").on('hidden.bs.modal', function (e) {
	    $("#faith iframe").attr("src", $("#faith iframe").attr("src"));
	});

	function newcolorpicker(){
		var rand = Math.floor(Math.random()*360);
		var interval = 360/$('.card').length;
		$('.card').each(function(i){
			$(this).css('border-color','hsl(' + (rand+i*interval)%360 + ',100%,50%)');
			$($(this).data('target')).children().children().css('border-color','hsl(' + (rand+i*interval)%360 + ',100%,50%)');
		});
	}
	newcolorpicker();

});
