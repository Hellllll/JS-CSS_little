//对脚本输入的电话号码进行验证和格式化
window.onload = initForms;

function initForms(){
	for(var i=0; i<document.forms.length; i++){
		document.forms[i].onsubmit = validForm;
	}
}

function validForm(){
	var allTags = document.getElementsByTagName("*");

	for(var i=0; i<allTags.length; i++){
		validTag(allTags[i]);
	}
	return false;
}
function validTag(thisTag){
	var outClass =　"";
	var allClasses = thisTag.className.split(" ");

	for(var j=0; j<allClasses.length; j++){
		outClass += validBasedOnClass(allClasses[j])+"";
	}

	thisTag.className = outClass;
	
	if(outClass.indexOf("invalid") > -1){
		invalidLabel(thisTag.parentNode);
		thisTag.focus();//到底是怎样的
		if(thisTag.nodeName == "INPUT"){
			thisTag.select();//还是不懂
		}
	}
	function validBasedOnClass(thisClass){
		var classBack = "";
		switch(thisClass){

			case "":
			case "invalid":
				break;
			case "phone":
				if(!validPhone(thisTag.value)) classBack = "invalid";
			default:
				classBack += thisClass;
		}
		return classBack;
	}

	function validPhone(phoneNum){
		var re = /^\(?d{3})\)?[\.\-\/ ]?(\d{3})[\.\-\/ ]?(\d{4})$/;//指定了开头和结尾，^$

		var phoneArray = re.exec (phoneNum);
		if(phoneArray){
			document.getElementById("phoneField").value = "("+phoneArray[1]+")"+phoneArray[2]+"-"+phoneArray[3];//电话格式化
			return true;
		}
		return false;
	}

	function invalidLabel(parentTag){
		if(parentTag.nodeName == "LABEL"){
			parentTag.className += "invalid";
		}
	}
}