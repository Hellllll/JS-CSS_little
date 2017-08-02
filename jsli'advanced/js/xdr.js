//xdr的使用（IE对cors的实现）

var xdr = new XDomainRequest();
xdr.onload = function(){
	alert(xdr.resposeText);
};

xdr.onerror = function(){
	alert();//应该定义这个事件以捕获错误
};

xdr.timeout = 1000;
xdr.ontimeout = function(){
	alert("Request took too long");
};

xdr.open("get", "http://");//这里只需要两个参数，因为xdr只支持异步请求
xdr.contentType = "application/...";
xdr.send(null);

//跨浏览器的CORS，可作为一个有用的工具函数

function createCORSRequest(method, url){
	var xhr = new XMLHttpRequest();
	if("withCredentials" in xhr){
		xhr.open(method, url, true);//true表示异步请求
	}else if(typeof XDomainRequest != "undefied"){
		xhr = new XDomainRequest();
		xhr.open(method,url);
	} else {
		xhr = null;
	}
	return xhr;
}

var request  = createCORSRequest("get", "http://");
if (request) {
	request.onload  = function(){
		//对request.responseText进行处理
	};
	request.send();
}