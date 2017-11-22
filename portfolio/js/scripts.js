$(document).ready(function(){
	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});

	$(window.location.hash).modal('show');
	 $('a[data-toggle="modal"]').click(function(){
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
	
	$('.sort').click(function(event){
		event.preventDefault();
		if(this.getAttribute('data-sort') != "showall"){
			$("html, body").animate({scrollTop: 0}, 200);
	 		$('.card').hide();
	 		$('.sort').children().removeClass('active');
	 		$('.card.' + this.getAttribute('data-sort')).slideDown();
	 		$("a[data-sort=" + this.getAttribute('data-sort') + "]").children().addClass('active');
	 		event.stopPropagation();
		} else {
			$('.card').slideDown();
			$('.sort').children().removeClass('active');
			$("a[data-sort=" + this.getAttribute('data-sort') + "]").children().addClass('active');
		}
	 });
});
