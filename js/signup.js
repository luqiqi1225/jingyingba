// var btns = document.querySelectorAll(".box .sign .signhead a");
// var signup = document.querySelector(".signup");
// var signin = document.querySelector(".signin");
// for(var i=0;i<btns.length;i++){
// 	btns[i].index = i;
// 	touch.on(".box .sign .signhead a","tap",function(ev){
// 		for(var j=0;j<btns.length;j++){
// 			btns[j].className = "";
// 		}
// 		this.className = 'click';
// 		if(this.innerHTML === "登陆"){
// 			signin.style.display = "block";
// 			signup.style.display = "none";
// 		}else if(this.innerHTML === "注册"){
// 			signup.style.display = "block";
// 			signin.style.display = "none";
// 		}
// 	})
// }


touch.on(".headbtn","tap",function(){
	$(".headbtn").removeClass("click");
	$(this).addClass("click");
	if($(this).html() === "登陆"){
		$(".signin").css("display","block");
		$(".signup").css("display","none");
	}else{
		$(".signup").css("display","block");
		$(".signin").css("display","none");
	}
})