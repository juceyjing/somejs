(function(){
	var banner=document.getElementById("banner");
	var bannerInner=banner.getElementById("inner");


//1.实现数据绑定：ajax请求数据，按照字符串拼接的方式绑定数据
var jsonData=null;
~function(){
	var xhr=new XMLHttpRequest();
	//false同步请求
	xhr.open("get","banner.txt？_="+Math.random(),false);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && /^2\d{2}$/.test(xhr.status)){
				jsonData=xhr.responseText;
		}
	}
	xhr.send(null);
}();
//按照字符串的方式进行数据绑定
~function(){
	var str="";
	if(jsonData){
		for(var i=0,len<jsonData.length;i<len;i++){
			var curData=jsonData[i];
			str+="<img src="+curData["img"]+">"
		}
	}
	bannerInner.innerHTML(str);
}();




})();