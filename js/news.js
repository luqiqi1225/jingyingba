var obj = [
{
	li:'联系我们'
},{
	li:'联系我们'
},{
	li:'联系我们'
},{
	li:'联系我们'
},{
	li:'联系我们'
},{
	li:'联系我们'
},{
	li:'联系我们'
},{
	li:'联系我们'
}]

var news = [
{	title:'文章标题文章标题文章标题文章标题文章标题文章标题',
	time:'6小时前',
	from:'来自tech web',
	url:'img/pic22.png',
	text:'题图是今年5月，英国凯特王妃产子，CNN 皇家记者Max Foster通过手机直播 App—Periscope 与无数关注英国皇室的网友实时互动，并直播威廉王子和凯特王妃如何带着小公主夏洛特离开圣玛丽医院。而现在，这股移动端视频直播的风潮也渐渐吹到了国内。'
}]




var tri = document.getElementsByClassName('tri')[0];
var newtext = document.getElementsByClassName('new-news')[0];
console.log(newtext);
(function (obj){
	var obj = obj;
	var length = obj.length;
	var ol = document.querySelector('ol');
	var html='';
	for(var i=0;i<length;i++){
	 html += '<li><a href="javascript:;">'+obj[i].li+'</a></li>'
	}
	ol.innerHTML = html;

	// tri.onclick = function(){
	// 	ol.style.display = ol.style.display=='block'?'none':'block';
	// }	
})(obj);

(function (news){
	var news = news;
	var str = '';
	var div = document.createElement('div');
	for (var i = 0; i < news.length; i++) {
	str +='<h1>'+news[i].title+'</h1>'+
			'<strong>'+news[i].time+'</strong>'+
			'<em>'+news[i].from+'</em>'+
			'<div class="new-pic" style="background:url('+news[i].url+');"></div>'+
			'<p>'+news[i].text+'</p>'
	};
	div.innerHTML += str;
	newtext.appendChild(div);
})(news);




























