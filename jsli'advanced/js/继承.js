//在实际开发中，很少单独使用原型链

function SuperType(){
	this.property = true;
}

SuperType.prototype.getSuperValue = function(){
	return this.property;
};

function SubType(){
	this.subproperty = false;
}

SubType.prototype = new SuperType();
//这里的括号什么时候需要，什么时候不需要
//这句执行后，才能实现下两句

//添加新方法
SubType.prototype.getSubValue = function(){
	return this.subproperty;

};
//重写超类型中的方法
SubType.prototype.getSuperValue  = function(){
	return false;
};

var instance = new SubType();
alert(instance.getSuperValue());//true

//注意：通过原型链实现继承时，不能使用对象字面量创建原型方法；

//不使用原型链，借用构造函数

function SuperType(name){
	this.colors = ["red","blue", "green"];
	this.name = name;
}

function SubType(){
	//这样就继承了SuperType耶，神奇
	//在这里调用超类构造函数,同时传递了参数
	SuperType.call(this, "hll");
}

//观念在于：属性独有，函数共享与复用
//原型链与借用构造函数的组合使用