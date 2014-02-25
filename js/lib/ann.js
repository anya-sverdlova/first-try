var ann = function(selector){
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



requestParams = {
    method : "GET",
    url    : "https://mongolab.com/databases/first-base",
    body   : null
}


ann.httpRequest = function (requestParams, callback, errorCallback) {	
		var request = new XMLHttpRequest();						
		request.open(requestParams.method, requestParams.url);
		request.setRequestHeader ('Content-Type', 'text/xml');	
		request.onreadystatechange = function() { 		
			if (request.readyState != 4 && request.status != 200) {
			errorCallback();

			return;

			}		
		var answer = request.responseText;
		callback(answer);		

		}
		
	request.send(requestParams.body);

	};


ann.annObject.prototype = {
    
	getDomElements: function(){
		return this.domElements;
	}
	
};
