//建立幻灯片脚本，上移动或像下移动
window.onload = initLinks;

var myPix = new Array("images/d1.jpg","images/d2.jpg","images/d3.jpg");//全局变量的定义
var thisPic = 0;

function initLinks(){
	document.getElementById("prevLink").onclick = processPrevious;
	document.getElementById("nextLink").onclick = processNext;
}

function processPrevious(){//图片向前面移动
	if(thisPic == 0){
		thisPic = myPix.length;
	}
	thisPic--;
	document.getElementById("myPicture").src = myPicture[thisPic];
	return false;
}

function processNext(){
	thisPic++;
	if(thisPic == myPix.length){
		thisPic = 0;
	}
	
	document.getElementById("myPicture").src = myPicture[thisPic];
	return flase;
}
