//随机显示图片
window.onload = choosePic;

function choosePic(){
	var images = new Array("images/11.jpg","images/12.jpg","images/222.jpg");
	var num = Math.floor(Math.random()*images.length);
	document.getElementById("myPicture").src = images[num];
}