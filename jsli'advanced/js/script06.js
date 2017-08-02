// JavaScript Document
window.onmousemove=moveHandler;
//页面上有许多点一直跟着鼠标的移动而移动，通过改变此脚本来实现相应效果
function moveHandler(evt){
	if(!evt){
		evt=window.event;
		}
	animateEyes(evt.clientX,evt.clientY);//指针所在位置
	}
function animateEyes(xPos,yPos){
	var rightEye=document.getElementById("rEye");
	var leftEye=document.getElementById("lEye");
	var rDot=document.getElementById("rEyeball").style;
	var lDot=document.getElementById("lEyeball").style;
	
	lDot.left = newEyeballPos(xPos,leftEye.offsetLeft);//指针的位置和眼睛的浮动位置。
	lDot.top = newEyeballPos(yPos,leftEye.offsetTop);
	rDot.left = newEyeballPos(xPos,rightEye.offsetLeft);
	rDot.top = newEyeballPos(yPos,rightEye.offsetTop);
	}
function newEyeballPos(currPos,eyePos){
	return Math.min(Math.max(currPos,eyePos+3),eyePos+17)+"px";
	//尽可能与指针的位置接近，但又不能超出眼睛范围。
	//此处的逻辑并没有搞懂。为什么这样做就能保证眼珠跟着鼠标移动。
	}