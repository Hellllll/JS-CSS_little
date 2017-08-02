// JavaScript Document
var delegate = function(client,clientMethod){
	return function(){
		return clientMethod.apply(client,arguments);//让调用此方法的对象执行此操作。
		}
	};
var Apple = function(){
	var _color = "red";
	return{
		getColor:function (){
			console.log("Color:"+_color);
			},
		setColor:function(color){
			_color = color;
			}
		}
	};

var a = new Apple();
var b = new Apple();
a.getColor();
a.setColor("green");
a.getColor();
//调用代理
var d = delegate(a,a.setColor);
d("blue");//让a.setColor("blue")
//执行代理
a.getColor();










