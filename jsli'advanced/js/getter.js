//什么是访问器属性呢？设置一个属性的值会导致其他属性的变化
var book = {
	_year: 2004,
	edition: 1
};

Object.defineProperty(book, "year"， {//只能使用Object.defineProperty访问器属性
	get: function(){
		return this._year;
	},
	set: function(newValue){

		if (newValue > 2004) {
			this._year = newValue;
			this.edition += newValue - 2004;
		}
	}

});
//定义访问器属性的旧有方法
book.__defineGetter__("year",function(){});

book.__defineSetter__("year",function(){});

book.year = 2005;
alert(book.edition);