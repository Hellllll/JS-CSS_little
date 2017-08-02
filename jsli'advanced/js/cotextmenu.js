// JavaScript Document
//简单的实现上下文菜单
//通用的EventUtil事件对象。跨浏览器的事件对象。可作为一个公用对象
var EventUtil = {
	addHandler: function(element,type,handler){
		//省略的代码
	 if(element.addListener){                    //是否存在DOM2级方法，若存在，采用此方法
		 element.addListener(type,handler,false);//false表示在冒泡阶段调用事件处理程序，true表示在捕获阶段调用事件处理程序
		 }else if(element.attachEvent){          //IE方法
			 element.attachEvent("on"+type,handler);
	     }else {
			 element["on"+type]=handler;         //使用DOM0 级方法
			 }
		},
		
		getEvent: function(event){
			return event?event:window.event;
			},
			
		getTarget:function(event){
			return event.target||event.srcElement;
			},
		
		preventDefault: function(event){
			if(event.preventDefault){
				event.preventDfault();
				}
			else{
				event.returnValue = false;
				}
			},
		removeHandler: function(element,type,Handler){
			//省略的代码
			if(element.addListener){
				element.addListener(type,handler,false);
			}else if(element.detachEvent){
				element.detachEvent("on"+type,handler);
			}else {
				element["on"+type]=null;
				}
			
			},
		stopPropagation: function(event){
			if(event.stopPropagation){
				event.stopPropagation();
				}
			else{
				event.cancelBubble = true;
				}
			},
	};
	
EventUtil.addHandler(window,"load",function(event){
	var div=document.getElementById("myDiv");
	
	EventUtil.addHandler(div,"contextmenu",function(event){
		event = EventUtil.getEvent(event);
		EventUtil.preventDefault(event);
		var menu=document.getElementById("myMenu");
		menu.style.left=event.clientX+"px";
		menu.style.top=event.clientY+"px";
		menu.style.visibility="visible";
		});
	EventUtil.addHandler(document,"click",function(event){
		document.getElementById("myMenu").style.visibility="hidden";
		});
	});