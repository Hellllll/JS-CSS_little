// JavaScript Document
//验证表单脚本通用，调用之后没有效果，带修正。
window.onload = initForms;

function initForms(){
	for(var i=0;i<document.forms.length;i++){
		document.forms[i].onsubmit = validForms;
		}
	document.getElementById("sunroof").onclick = doorSet;
	}
function validForms(){
	var allGood = true;
	var allTags = document.getElementsByTagName("*");
	
	for(var i=0;i<allTags.length;i++){
		if(!validTag(allTags[i])){
			return false
			}
			return allGood;
		}
	function validTag(thisTag){
		var outClass = "";
		var allClasses = thisTag.className.split(" ");
		
		for(var j=0;j<allClasses.length;j++){
			outClass += validBaseOnClass(allClasses[j])+"";
			}
			
			thisTag.className = outClass;
			if(outClass.indexOf("invalid")>-1){
				
				invalidLabel(thisTag.parentNode);
				thisTag.focus();
				if(thisTag == "INPUT"){
					thisTag.select();
					}
				}
			return false;
		}
			return true;
	function validBaseOnClass(thisClass){
		 var backClass = "";
		 
		 switch(thisClass){
			 case "":
			 case "invalid":
			 	break;
			 case "reqd":
			 	if(allGood && thisTag.value ==""){ //作用域链的回顾。
					backClass = "invalid"; 
					}
					backClass += thisClass;
					break;
			 case "radio":
			 	if(allGood && !radioPicked(thisTag.name)){
					backClass = "invalid";
					}
					backClass += thisClass;
					break;
					
			 case "isNum":
			 	if(allGood && !isNum(thisTag.value)){
					backClass = "invalid";
					}
					backClass += thisClass;
					break;
			 case "isZip":
			 	if(allGood && !isZip(thisTag.value)){
					backClass = "invalid";
					}
					backClass += thisClass;
					break;
			 case "email":
			 	if(allGood && !validEmail(thisTag.value)){
					backClass = "invalid";
					}
					backClass += thisClass;
					break;
			case "imgURL":
			  	if(allGood && !imgURL(thisTag.value)){
					backClass = "invalid";
					}
				    backClass += thisClass;
					break;
			 default:
			    if(allGood && !crossCheck(thisTag,thisClass)){
					backClass = "invalid";
					}
			 	backClass += thisClass;
				//break;	这里怎么会需要Bbreak呢？神经
			 }
			 return backClass;
		}
		function crossCheck(inTag,otherFieldID){
			if(!document.getElementById(otherFieldID)){
				return false;
				}
				//return (inTag.value ==document.getElementById(otherFieldID).value);
			      return (inTag.value !=""||document.getElementById(otherFieldID).value!="")
			}
		function invalidLabel(parentTag){
			if(parentTag == "label"){
			parentTag.className +="invalid";
			}
		}
		function radioPicked(radioName){
			var radioSet = "";
			
			for(var k=0;k<document.forms.length;k++){
				if(!radioSet){
					radioSet = document.forms[k][radioName];
					}
				}
				if(!radioSet){
					return false;
					}
				for(var k=0;k<radioSet.length;k++){
					if(radioSet[k].checked){
						return true;
						}
					}
					return false;
			}
		function doorSet(){
			if(this.checked){
				document.getElementById("twoDoor").checked = true;
				}
			}
		function isNum(passedVal){
			if(passedVal == ""){
				return false;
				}
				for(var k=0;k<passedVal.length;k++){
					if(passedVal.charAt(k)<"0"){
						return false;
						}
					if(passedVal.charAt(k)>"9"){
						return false;
						}
					}
				return true;
			}
		function isZip(inZip){
			if(inZip == ""){
				return true;
				}
				return isNum(inZip);
			}
		//关于验证email的方式有两种，正则表达式和非~
		//第一种，常规
		function validEmail(email){
			var invalidChars = " /:.;";
			
			if(email == ""){
				return false;
				}
				for(var k=0;k<invalidChars.length;k++){
					var badChar  = invalidChars.charAt(k);
					if(email.indexOf(badChar)>-1){
						return false;
						}
					}
				var atPos = email.indexOf("@",1);
				if(atPos == -1){//没有@
					return false;
					}
				if(email.indexOf("@",atPos+1) != -1){ //出现两次@
					return false;
					}
				var periodPos = email.index(".",atPos);//判断@后面是否有.
				if(periodPos == -1){
					return false;
					}
				if(periodPos+3 > email.length){
					return false;
					}
				return true;
			}
		//使用正则表达式处理函数validEmail（）；
		/*function validEmail(email){
			var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			
			return re.test(email);
			}*/
		function imgURL(newURL){
			var re = /^(file|http):\/\/\S+\/\S+\.(gif|jpg|png)$/i;
			
			if(re.test(newURL)){
				document.getElementById("chgImg").src = newURL;
				return true;
				}
			return false;
			}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	