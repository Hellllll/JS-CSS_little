// JavaScript Document
//模拟事件（鼠标事件）
var btn = document.getElementById("myBtn");

//创建事件对象
var event = document.reateEvent("MouseEvents");

//初始化事件对象
event.initMouseEvent("click",true,true,document.defaultView,0,0,0,0,0,false,false,false,false,0,null);
//触发事件
btn.dispatchEvent(event);

//模拟键盘事件

var textbox = document.getElementById("myTextbox"),event;
//DOM3级方式创建事件对象
if(document.implementation.hasFeature("KeyboardEvents","3.0")){
	event= document.createEvent(KeyboardEvent);
	}
	//初始化事件对象
	event.initKeyboardEvent("keydown",true,true,document.defaultView,"a",0,"Shift",0);
//触发事件
textbox.dispatchEvent(event);






