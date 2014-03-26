﻿var ann = function(selector){
	return new ann.annObject(selector); 
};

ann.annObject = function(selector){
	var id = selector.match(/^#[a-zA-Z]+/);
	var tag = selector.match(/^[a-zA-Z1-9]+/);
	var classes = selector.match(/(\.[a-z1-9\-\_]+)/g);
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
								result = elementsByTagAndClass[0]; 
							}else{
				result = elementsByTagAndClass;	
								}
	};
		
	
		
	this.domElements = result;
	
	
};


ann.tmpl = function tmpl(str, data){
  var cache = {};
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        ann.tmpl(document.getElementById(str).innerHTML) :
      
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +             
        "with(obj){p.push('" +

        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    return data ? fn( data ) : fn;
  };
  
ann.httpRequest = function (requestParams, myHeaders, callback, errorCallback) {	
	var request = new XMLHttpRequest();	
	request.open(requestParams.method, requestParams.url);
	request.setRequestHeader ('Content-Type', myHeaders);	
	request.onreadystatechange = function() { 		
		if (request.readyState === 4 && request.status != 200) {
			errorCallback(request, "bad response");
			if(requestParams.timeout) clearTimeout(timeout);			
		}else if (request.readyState == 4 && request.status == 200){	
			callback(request.responseText);
			if(requestParams.timeout) clearTimeout(timeout);
		}
	}
	
	if(requestParams.timeout){
		var timeout = setTimeout(function(){
			request.abort();
			errorCallback(request, "time-out error");
		}, requestParams.timeout);
	}
	
	request.send(requestParams.body);
};
	
ann.annObject.prototype = {

	getDomElements: function(){
		return this.domElements;
	},
	
	load: function(myURL, myDelay) {	
		var target = this.domElements;
		var data;		
		return new ann.httpRequest({
			method: "GET",
			url    : myURL, 
			body   : null,
			timeout : myDelay			
		}, 'application/json' , function(data){ 					
			for (var key in target) { 				
				if (!(target[key] instanceof Function) && isNaN(target[key])) {				
				target[key].innerHTML = JSON.parse(data)[1].author + ':' + JSON.parse(data)[1].message; 								
			}
		} }, function(xhr, message){
			if(target[0]) target[0].innerHTML = message;
		});
	},

	display: function (visibilityProp) {		
		this.domElements.style.display = visibilityProp; 
	}, 
	
	newElement: function (child) {
		var newChild;		
		if(this.domElements.length && this.domElements.length > 1) { 		
			for (var i = 0; i < newParent.length; i++) { 
				newChild = document.createElement(child); 
				this.domElements[i].appendChild(newChild); 
			} 			
		}else{ 
			newChild = document.createElement(child); 
			this.domElements[0].appendChild(newChild); 
		}
		return newChild;
	},
		
	inside: function (content) {
		if (!content) {
			content = this.domElements.innerHTML;
			return content;
			}
		if(this.domElements[0]) {
			for (var i = 0; i < this.domElements.length; i++)
			this.domElements[i].innerHTML = content;
			}else{	
		this.domElements.innerHTML = content; }
		}
};


