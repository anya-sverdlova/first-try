﻿var ann = function(selector){
	return new ann.annObject(selector); 
};

ann.annObject = function(selector){
	// analize selector
	var id = selector.match(/^#[a-zA-Z]+/);
	var tag = selector.match(/^[a-zA-Z1-9]+/);
	var classes = selector.match(/(\.[a-z1-9\-]+)/g);
	var elementById;
	var elementByTagName;
	var elementsByClassNames;  
	var result = [];
	var elementsByTagAndClass = [];
	
	NodeList.prototype.push = Array.prototype.push;
	
	if(id) { 						
		elementById = document.getElementById(id.toString().replace('#', ''));		
		result = elementById; 	
	}
	
	if(tag) { 	
		elementByTagName = document.getElementsByTagName(tag); 										 
		result = elementByTagName; 
	} 
	
	if(classes) {	
		elementsByClassNames = document.getElementsByClassName(classes.join('').replace(/\./g, ' ')); 	
		result = elementsByClassNames;							
    } 
	
	if (elementByTagName && elementsByClassNames) { 
		for ( var key in elementsByClassNames ) 		
			if (elementsByClassNames[key] instanceof Object && !(elementsByClassNames[key] instanceof Function)
					&& elementsByClassNames[key].tagName.toLowerCase() === elementByTagName[0].tagName.toLowerCase() )
						elementsByTagAndClass.push(elementsByClassNames[key]);
							if (elementsByTagAndClass.length == 1) {
								result = elementsByTagAndClass[0]; }else{
				result = elementsByTagAndClass;	
							}
	};
		
	
		
	this.domElements = result;
	
	
};

ann.httpRequest = function (requestParams, callback, errorCallback) {	
		var request = new XMLHttpRequest();						
		request.open(requestParams.method, requestParams.url);
		request.setRequestHeader ('Content-Type', 'application/json');	
		request.onreadystatechange = function() { 		
			if (request.readyState != 4 && request.status != 200) {
				errorCallback();		
			}else if (request.readyState == 4 && request.status == 200){	
				callback(request.responseText);					
			}
		}
		
	request.send(requestParams.body);
		
	};
	
ann.annObject.prototype = {

	getDomElements: function(){
		return this.domElements;
	},
	
	load: function(myURL) {	
		var target = this.domElements;
		var data;
		return new ann.httpRequest({
			method: "GET",
			url    : myURL, 
			body   : null,			
		}, function(data){ target.innerHTML = JSON.parse(data)[0].author + ':' + JSON.parse(data)[0].message; }, function(error){console.log("error");});
	}
};
