// 点赞:
var upvote = document.querySelector(".upvote a");
var upvoteNum = document.querySelector(".upvote span");
var num="";
upvote.onclick = function(){
	if(num%2 == 0){
		num+=1;
	}else{
		num-=1;
	}
	upvoteNum.innerHTML=num;
}

// 课程
var allCourses=document.querySelector(".allCourses");
function course(){
	var html='';
	var html="<span class='all'>全部课程：</span><ul>";
	for(var i=0;i<obj.lesson.length;i++){
		html+='<li>'+(i+1)+'</li>';	
	}
	html+="</ul>";
	allCourses.innerHTML=html;
}
course();

var li=document.querySelectorAll("li");
var length=li.length;
function disappear(){
	for (var i=0;i<length;i++) {
		if(i>=15){
			li[i].style.display="none";
		}
	}
}
disappear();
function show(){
	for (var i=0;i<length;i++) {
		if(i>=15){
			li[i].style.display="table-row";
		}
	}
}
// 课程内容
function lessonOne(obj){
	var obj=obj;
	var playclass=document.querySelector(".playclass");
	var playclassName=document.querySelector(".playclassName");
	var video = document.querySelector(".myvideo");
	for(var i=0;i<length;i++){
		li[i].index=i;
		li[i].style.border="1px #e0e0e0 solid";
		li[i].style.background="#fff";
		li[i].onclick=function(){
			for(var j=0;j<li.length;j++){
				li[j].style.background="";
				li[j].style.color="";
				li[j].style.border="1px #e0e0e0 solid";
				li[j].style.background="#fff";
			}
			playclass.innerHTML=obj.lesson[this.index].type;
			playclassName.innerHTML=obj.lesson[this.index].title;
			video.src = obj.lesson[this.index].src;
			li[this.index].style.background="#29b572";
			li[this.index].style.color="#333333";
			li[this.index].style.border="1px #29b572 solid"
			li[this.index].className="blue";
			video.play();
			// if(video.paused){
			// 	video.play();
			// }
			// video.pause();
		}

	}
}
lessonOne(obj);

// 展开
function spread(){
	html1="<span>展开</span>";
	document.querySelector(".spread").innerHTML=html1;
	var zhankai=document.querySelector(".spread span");
	zhankai.onclick=function(){
		if(this.innerHTML=="展开"){
			show();
			zhankai.innerHTML="收起";
		}else{
			disappear();
			zhankai.innerHTML="展开";
		}
		lessonOne(obj);
	}

}
spread();



