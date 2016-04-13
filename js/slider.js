var obj=[
{
	pic:"img/t1.png",
	src:"http://www.sina.com"
},
{
	pic:"img/t2.png",
	src:"http://www.baidu.com"
},
{
	pic:"img/t1.png",
	src:"http://www.sina.com"
},
{
	pic:"img/t2.png",
	src:"http://www.baidu.com"
},
{
	pic:"img/t1.png",
	src:"http://www.sina.com"
},
{
	pic:"img/t2.png",
	src:"http://www.baidu.com"
},
{
	pic:"img/t2.png",
	src:"http://www.baidu.com"
}]
var ul=document.querySelector(".in-over ul");
var html='';
for (var i = 0; i < obj.length; i++) {
	html+='<li><a href="'+obj[i].src+'"><img src="'+obj[i].pic+'" alt=""></a></li>'
};
ul.innerHTML=html;
window.onload=function(){
	var left=document.querySelector(".in-left");
	var right=document.querySelector(".in-right");
	var width=document.querySelector(".in-over").offsetWidth;
	console.log(width)
	var length=Math.ceil(obj.length/2);
	var num=0;
	ul.style.width=length*width+'px';
	// left.onclick=function(){
	// num--;
	// if(num<0){
	// 	num=length-1
	// }
	// ul.style.marginLeft=-num*width+'px';
	// }
	// right.onclick=function() {
	// num++;
	// if(num>length-1){
	// 	num=0;
	// }
	// ul.style.marginLeft=-num*width+'px';
	// }
	touch.on(".in-left","tap",function(){
		num--;
		if(num<0){
			num=length-1
		}
		ul.style.marginLeft=-num*width+'px';
	})
	touch.on(".in-right","tap",function(){
		num++;
		if(num>length-1){
			num=0;
		}
		ul.style.marginLeft=-num*width+'px';
	})
	touch.on(".in-over", 'swipeleft', function(ev){
		console.log(1223)
		num++;
		if(num>length-1){
			num=0;
		}
		ul.style.marginLeft=-num*width+'px';
	});

	touch.on(".in-over", 'swiperight', function(ev){
		num--;
		if(num<0){
			num=length-1
		}
		ul.style.marginLeft=-num*width+'px';
	});
}
