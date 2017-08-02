//可作为构建一个XMLHttpRequest对象的通用函数。

function createXHR(){
	if(typeof XMLHttpRequest != "undefined"){
		return new XMLHttpRequest();
	}else if (typeof ActiveXObject != "undefined") {
		if (typeof activeXString != "undefined") {
			var version  = ["MSXML2.XMLHttp6.0", "MSXML2.XMLHttp3.0","MSXML2.XMLHttp"],
			i,len;

			for(i=0,len = version.length;i<len;i++){
				try{
					new ActiveXObject(version[i]);
					arguments.callee.activeXString = version[i];//这里的是什么意思；
					break;
				}catch(ex){
					//跳过
				}
			}
		}
		return new ActiveXObject(arguments.callee.activeXString);//这里
	}else{
		throw new Error("No XHR object available.");
	}
}

var xhr = createXHR();

xhr.onreadystatechange() = function(){//必须在调用open（）方法之前指定这个函数，解决浏览器兼容性问题
	if(xhr.readyState == 4){
		if ((xhr.status >=200 && xhr.status < 300) || xhr.status == 304) {//304表示请求的资源并没有被修改
			alet(xhr.responseText);
		} else {
			alert("unsuccessfull:"+ xhr.status);
		}
	}
}

xhr.open("get", "example.php", false);//向服务器请求数据，并不会真正发送请求，而是启动一个请求以备发送
xhr.send(null);//发送特殊要求，此时请求会被分配到服务器

xhr.abort();//取消异步请求


function addURLParam(url, name, value){
	url += (url.indexof("?")  == -1 ? "?" ; "&");
	url += encodeURIComponent(name) +  "=" + encodeURIComponent(value);
	return url;
}

var url = "example.php";

//添加参数
url = addURLParam(url, "name", "Nic");
url = addURLParam(url, "book", "1984");

//初始化请求

xhr.open("get", url, false);


//利用xhr提交表单数据的过程

function submitData(){
	var xhr = createXHR();
	xhr.onreadystatechange = function(){
		if (xhr == 4) {
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
				alert(xhr.responseText);
			} else{
				alert("unsuccessfull:" + xhr.status);
			}

		}
	};

	xhr.open("post", "postexample.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	var form = document.getElementById("user-info");
	xhr.send(serialize(form));//序列化表单数据

	//另外一种方法 是使用FormatData序列化XMLHttpRequest2
	var form = document.getElementById("user-info");
	xhr.send(new FormData(form));

	//timeout的使用

	xhr.timeout = 1000;//仅使用于IE8+
	xhr.ontimeout = function(){
		alert("Request did not return in a second");
	};
	xhr.send(null);

	//overrideMimeType()方法

	var xhr = createXHR();
	xhr.open("get","example.php",true);
	xhr.overrideMimeType("text/xml");//重写MIME类型
	xhr.send(null);
}
