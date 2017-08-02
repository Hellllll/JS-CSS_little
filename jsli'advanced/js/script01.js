// JavaScript Document
addOnload(initOne);
addOnload(initTwo);
addOnload(initThree);
//此例子最主要的部分就是这里

function addOnload(newFunction){
	var oldOnload=window.onload;//如果已经设置了window.onload就将其值存储在此
	if(typeof oldOnload=="function"){//如果设置了window.onload,那么他应该是一个函数调用
		window.onload=function(){
			if(oldOnload){   //如果oldOnload原本有值，就执行原本的操作，
				oldOnload();
				}
			newFunction(); //否则执行newFunction（）；
			}
	}
	else {
		window.onload=newFunction;
		}
	}
function initOne(){
	document.getElementById("pageBody").style.backgroundColor="#00F";
	}
function initTwo(){
	document.getElementById("pageBody").style.color="#F00";
	}
function initThree(){
	var allTags=document.getElementById("pageBody").getElementsByTagName("*");
	
	for(var i=0;i<allTags.length;i++){
		if(allTags[i].nodeName=="H1"){
			allTags[i].style.border="5px green solid";
			allTags[i].style.padding="25px";
			allTags[i].style.backgroundColor="#FFF";
			}
		}
	}

/*function initThree() {
	var allTags = document.getElementById("pageBody").getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++) {
		if (allTags[i].nodeName == "H1") {
			allTags[i].style.border = "5px green solid";
			allTags[i].style.padding = "25px";
			allTags[i].style.backgroundColor = "#FFF";
		}
	}*/




















