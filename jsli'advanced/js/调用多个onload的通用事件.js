// JavaScript Document
//引用多个事件的通用函数，你可知click事件程序只能加载一次，如果调用多次，后面的便会覆盖前面的
function addOnload(newFunction){
	var oldOnload=window.onload;
	if(typeof oldOnload=="function"){
		window.onload=function(){
			if(oldOnload)
			{
				oldOnload();
			}
			newFunction();
			}
		}
	else {
		window.onload = newFunction();
		}
	}