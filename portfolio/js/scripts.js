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

	 $('.card').each(function(){
	 	var rand = Math.floor(Math.random()*360);
	 	$(this).css('border-color','hsl(' + rand + ',100%,50%)');
	 	$($(this).data('target')).children().children().css('border-color','hsl(' + rand + ',100%,50%)');
	 });

	 $('.modal-conten').each(function(){
	 	$(this).css('border-color','hsl(' + Math.floor(Math.random()*360) + ',100%,50%)');
	 });
});