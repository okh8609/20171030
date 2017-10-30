$(document).ready(function() {

	$('a').click(function() { return false; });
	$('.box').click(function() {
		var v = $(this).attr('rel')
		$(this).effect(v,'slow').effect('slide');
	});
});