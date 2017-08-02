function compare(value1,value2){
	if(value1<value2){
		return -1;
	}
    else if(value1<value2){
		return 1;
	}
    else (value1=value2){
		return 0;
	}
}

var values = [0,2,3,4,5,10];
values.sort(compare);
alert(values);