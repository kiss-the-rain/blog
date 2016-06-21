var scrollFunc = function(e){
	 e=e || window.event;
	 var result;
    if(e.wheelDelta){//IE/Opera/Chrome 
        result = e.wheelDelta; 
    }else if(e.detail){//Firefox 
        result = e.detail; 
    }
    if(result == 120 || result == -3)
    	console.log('up');
    else
    	console.log('down');
}
if (document.addEventListioner) {
	document.addEventListioner('DOMMouseScroll',scrollFunc,false);
}else{
	window.onmousewheel = document.onmousewheel = scrollFunc;
}

$(function(){
	

	$('.pointer .arrow').on('click',function(){
		var $section_items = $('.section-item');
		var current_index = $('.section-item.active').index();
		$section_items.removeClass('active');
		var next_index = current_index+1;
		if (next_index == $section_items.length)
			next_index = 0;
		$('.main').attr('class','main').addClass(function(){return 'show-section'+next_index});
		$section_items.eq(next_index).addClass('active');
	});
});