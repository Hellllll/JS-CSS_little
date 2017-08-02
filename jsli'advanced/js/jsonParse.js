//关于json的概念：是一种轻量级的数据结构。相比XMl没有那么的繁琐。
//有一个对象为JSON，方法是JSON.stringify();
//JSON.parse()可分别实现JSON文件向javascript的转换，反之亦然。
var book = {
				"title": "Professinal JavaScript",
				"authors": [
					"Nicholas C.zakas"
				],
				edition: 3,
				year : 2011,
				releaseDate: new Date(2011,11,1)
};

var jsonText = JSON.stringify(book);

var bookCopy = JSON.parse(jsonText,function(key,value){
	if(key == "releaseDate"){
		return new Date(value);
	}else{
		return value;
	}
});

alert(bookCopy.releaseDate.getFullYear());