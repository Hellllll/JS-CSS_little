//三状态图像翻转器的js文件
window.onload = rolloverInit;

function rollovrInit(){
	for(var i=0; i<document.images.length; i++){
		if(document.images[i].parentNode.tagName = "A"){
			setupRollover(document.images[i]);
		}
	}
}

function setupRollover(thisImage){
	thisImage.outImage = new Image();
	thisImage.outImage.src = thisImage.src;
	thisImage.onmouseout = function(){
		thisImage.src = thisImage.outImage.src;
	}

	thisImage.clickImage = new Image();
	thisImage.clickImage.src = "images" + thisImage.id + "_click.gif";
	thisImage.onclick = function(){
		thisImage.src = thisImage.clickImage.src;
	}

	thisImage.overImage = new Image();
	thisImage.overImage.src = "images" + thisImage.id + "_on.gif";
	thisImage.onmouseover = function(){
		thisImage.src = thisImage.overImage;
	}
}

//让多个链接触发一个翻转器（此脚本处理多个翻转器，链接本身也会改变）

window.onload = rollovrInit;

function rolloverInit(){

	for(var i=0; i<document.links.length;i++){
		var linkObj = document.links[i];
		if(linkObj.className){
			var imgObj = document.getElementById(linkObj.className);
			if(imgObj){
				setupRollover(linkObj,imgObj);
			}
		}
	}
}

function setupRollover(thisLink,textImage){
	//这里是因为每个翻转器有两个图像需要处理
	thisLink.imgToChange = new Array();
	thisLink.outImage  = new Array();
	thisLink.overImage = new Array();

	thisLink.imgToChange[0] = textImage;
	thisLink.onmouseout = rollOut;
	thisLink.onmouseover = rollOver;

	thisLink.outImage[0] = new Image();
	thisLink.outImage.src = textImage.src;

	thisLink.overImage[0] = new Image();
	thisLink.overImage[0].src = "images" + thisLink.id  + "text.gif";

	var rolloverObj = document.getElementById(thisLink.className+"img");
	if(rolloverObj){
		thisLink.imgToChange[1] = rolloverObj;

	   	thisLink.outImage[1] = new Image();
		thisLink.outImage[1].src = rolloverObj.src;

		thisLink.overImage[1] = new Image();
		thisLink.overImage[1].src = "images" + thisLink.id  + "text.gif";
	}

	function rollOut(){
		thisLink.imgToChange.src = thisLink.outImage.src;
	}

	function rollOver(){
		thisLink.imgToChange.src = thisLink.overImage.src;
	}
}
function setupRollover(thisLink,textImage){
	thislink.imgToChange = textImage;//将参数现赋值给一个变量（为什么要这么做）
	thisLink.onmouseout = function(){
		thisLink.imgToChange.src = thisLink.outImage.src;
	}

	thisLink.onmouseover = function(){
		thisLink.imgToChange.src  = thisLink.overImage.src;
	}

	thisLink.outImage = new Image();//为什么这里这样做，而上面不
	thisLink.outImage.src  = textImage.src;//这个是啥。硬是没想通。 你是不是傻，明明就是上面ID=captionDiv的img元素的啊

	thisLink.overImage = new Image();
	thisLink.overImage.src = "images"+ thisLink.id + "text.gif";//这里的id才是flyer
}
//来个小小的总结：首先明白改变的是对象的src,鼠标移入与移出，
//先写out的在写over的