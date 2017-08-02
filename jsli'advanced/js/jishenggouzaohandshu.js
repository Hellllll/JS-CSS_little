function SpecialArray(){

	var  values = new Array();

	values.push.apply(values,arguments);

	values.toPipedString = function(){
		return this.join("|");//会返回一竖线分割的数组值
	};

	return values;
}

var colors = new SpecialArray("red","blue","green");
alert(colors.toPipedString());
//关于寄生构造函数需要说明的是：返回的对象与构造函数或者构造函数的原型无关
//构造函数返回的对象与构造函数外界创建的对象没什么不同
//因此，不能依赖intanceof操作符来确定对象类型


//稳妥构造函数模式（适合用于早一些安全环境中，禁止使用new和this
function Person(name,age,job){

	var o = new Object();
	//可以在这里定义私有变量和函数

	o.sayName() = function(){
		alert(name);
			}
			return o;
}