var status = document.querySelector(".status"); 
var triangle = document.querySelector(".triangle"); 
var loginbar = document.querySelector(".loginbar"); 
var land = document.querySelector(".land");
var enroll = document.querySelector(".enroll");

var bool = false;
touch.on('.status','tap',function(ev){
	if(bool == false){
		triangle.style.display = "block";
		loginbar.style.display = "block";
		bool = true;
	}else{
		triangle.style.display = "none";
		loginbar.style.display = "none";
		bool = false;
	}
})
touch.on('.land','tap',function(ev){
	triangle.style.display = "none";
	loginbar.style.display = "none";
})
touch.on('.enroll','tap',function(ev){
	triangle.style.display = "none";
	loginbar.style.display = "none";
})
