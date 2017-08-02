function doAdd(){
	if(arguments.length == 1) {
		alert (arguments[0] + 10);
	} else if (arguments.length == 2){
		alert(arguments[0] + arguments[1]);
	}
}
doAdd(10);
doAdd(30 , 20);