$(function(){

	$('nav a').on('click', function(e) {
		e.preventDefault(); 
		var url = this.href; 
		$('#container').empty(); 
		$('#container').load(url).hide().fadeIn('slow'); 
	}); 

})
