// JavaScript Document
if(typeof document.oncontextmenu == "object"){ //检查浏览器是否是Firefox
	if(document.all){
		document.onmousedown = captureMousedown;//不是Firefox执行的代码块,而是IE
		}
	else{
		document.oncontextmenu = captureMousedown;//safri
		}
	}
else {
	window.oncontextmenu = captureMousedown;
	}
 function captureMousedown(){
	 if(evt){
		 var mouseClick = evt.which;//借此来判断用户单击的是哪个按钮
		 }
	else{
		var mouseClick=window.event.button;//使用的IE浏览器
		}
	if(mouseClick==1||mouseClick==2||mouseClick==3){
		alert("Menu disabled.");
		return false;
		}
	 }