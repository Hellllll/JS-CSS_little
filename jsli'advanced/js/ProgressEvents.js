//load事件,firefox

var xhr = createXHR();
xhr.onload = function(){//注意这里没有判断readystate,
	if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
		alert();
	}else{
		alert();
	}
};

xhr.open();
xhr.send();

//progress事件,为用户创建一个进度指示器

var xhr  = createXHR();
xhr.onload =  function(event){
//见上面
};

xhr.onprogress = function(event){
	var divstatus = document.getElementById("status");
	if(event.lengthComputable){
		divstatus.innerHTML = "Received" + event.position +"of" +event.totalSize + "bytes";

	}
}