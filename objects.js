 function getlast(a,x){
		var y = a.length;
		var j = 0;
		var arr = new Array();
		for(var i = x; i<=y; i++){		   
		   arr[j] = a.pop(i);
		   j++;
		 }
		alert(arr)
		 

}function join(a){		var str = a.join();	alert(str);}function remove_element(arr,element){		   var y = arr.indexOf(element);	     arr.splice(y,1);	        alert(arr);		}
function hide_email(x){	  var len = x.length;	  var y = x.indexOf('@');      for(var i = y;i>4;i--)	     {              	 		    x[i-1]= ".";					 }		 		 alert(x);	  }function repeat(str,num){	  var x="";      for(var i = 0;i<num;i++)	  {		 		   x = x.concat(str);		  		  	  }     	 document.write(x);}function replace(str, rep,pos){    var y = str.substr(0, pos) + rep + str.substr(pos-1);		alert(y);}	   function getmnth(date){		     var month = new Array();     month[1] = "January";	 month[2] = "February";	 month[3] = "March";	 month[4] = "April";	 month[5] = "May";	 month[6] = "June";	 month[7] = "July";	 month[8] = "August";	 month[9] = "September";	 month[10] = "October";	 month[11] = "November";	 month[12] = "December";	 	 var n = month[date.getMonth()];	 alert(n);}function getYesterday(dt){        var yesterday = new Date((dt.setDate(dt.getDate()-1))).toString(); 	//getDate returns dt date and subtracts a day and setday sets the date	alert("Yesterday was " + yesterday);} function checkAlphaN(str)  {              var test = /^[0-9a-zA-Z]+$/;            if((str.match(test)))        {           alert("The given value is alphanumeric");       }        else        {            alert("The given value is not alphanumeric");                     }  }function checkCase(ch){   var test = /^[A-Z]/;     if((ch.match(test)))   {	   alert("the given character is in Uppercase");   }	         else   {	   alert("the given character is not in uppercase")   }}function chkVowel(str){       var test = /[aeiou]/gi;	var m = str.match(test).length;	alert("the total number of vowels is " + m);    }