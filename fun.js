$("ul").on("click", "li",function () {
	if ($(this).css("color") !== "rgb(255, 0, 0)"){
		$(this).css({
			color:"red",
			textDecoration:"line-through"
		});
	}
	else{
		$(this).css({
			color:"black",
			textDecoration:"none"
		});
	}
	
});


$("ul").on("click","span",function(no){
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
	});
	no.stopPropagation();
});

$("input").keypress(function(here){
	if (here.which===13) {
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li> "+newTodo+" <span><i class='fa fa-trash'></i></span> </li>")
	}
});

$(".fa-plus-circle").click(function(){
	$("input").fadeToggle();
});