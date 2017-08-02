function test(){
	var message = "hi";//局部变量
}
test();
alert(message);

var car = null;
alert(tyepof car); // object;

alert(null == undefined);