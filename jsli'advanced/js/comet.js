//Comet 的实现

function createStreamingClient(url, progress, finished){//创建HTTP流的函数

	var xhr = new XMLHttpRequest(),
	received = 0;

	xhr.open("get", url, true);
	xhr.onreadystatechange = function(){
		var result;

		if (xhr.readyState == 3) {

			//只取得最新数据并调整计数器
			result = xhr.responseText.substring(received);
			received += result.length;

			//调用peogress回调函数
			progress(result);
		} else if (xhr.readyState == 4){
			finished(xhr.responseText);
		}
	};
	xhr.send(null);
	return xhr;
}

var client = createStreamingClient("streaming.php", function(data){
	alert("received:"+data);
}, function(data){
	alert("done");
});

//创建websokets
var socket = new WebSocket("ws://www.example.com/server.php");

socket.onopen = function (){
	alert("connection established.");
};

socket.onerror = function(){
	alert("error");
}

socket.onclose = function(event){
	console.log(event.wasClean + event.code + event.reason);
}
