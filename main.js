var $sun = $('.sun');
var $win = $(window);

$win.on('scroll', function(){
	var top = $win.scrollTop() /2;
	$sun.css('transform', 'rotate(' + top + 'deg)');
});