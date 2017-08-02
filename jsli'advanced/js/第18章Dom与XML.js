// JavaScript Document
var xmldom = document.implementation.createDocument(namespaceUri, root, doctype);
//root:文档元素的标签名一般就只使用此参数

//y因此有：创建的XML DOM 文档
var xmldom = document.implementation.crateDocument("",root, null);
alert(xmldom.documentElement.tagName);//documentElement?

var child = xmldom.createElement("child");
xmldom.documentElement.appendChild(child);
//检查浏览器是否支持DOM2级XML
var hasXmlDOM = document.implementation.hasFeature("XML","2.0");

//常见情况是将XML文档解析为DOM结构（实现他的方法为）
var parser = new DOMParser();//DOMParser类型
var xmldom = parser.paserFromString("<root><child/></root>","text/xml");
//上面如果发生解析错误时，仍然会返回Document对象，但这个对象的文档元素是<parsererror>

//XMLSerilizer类型，与DOMParser相反的功能，将DOM文档序列化为XML字符串

var serializer = new XMLSerializer();
var xml = serializer.serializeToString(xmldom);














