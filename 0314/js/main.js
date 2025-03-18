$("#ro1").delay(1000).fadeOut("slow");
$(".robot,#RO").click(function(){
$("#ro1").toggle();
})

function keyin(){
	var code=event.which;
	if(code==13){
	$("#t1").append('<div class="m2">'+document.getElementById("ro2").value+'</div><br>');
	$("#ro2").val("");
	appw();
	}
}
function appw(){
	setTimeout(function(){
		$("#t1").append(app());
	})
}
function app(){
	var c=Math.floor(Math.ramdom() *2);
	if(c%2==0){
		return '<div class="m1">客服忙線中，請稍後在試</div><br>'
	}
	if(c%2==1){
		return '<div class="m1">謝謝您的提問，我們會盡快派專人回覆您</div><br>'
}
}