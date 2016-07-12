$(function(){

	$('nav a').on('click', function(e) {
		e.preventDefault(); 
		var url = this.href; 
		console.log(url); 
		
	}); 

})
