var ann = function(selector){
    return new ann.annObject(selector); 
};

ann.annObject = function(selector){
	// analize selector
	var id = selector.match(/^#[a-zA-Z]+/);
	var tag = selector.match(/^[a-zA-Z]+/);
	var classes = selector.match(/(\.[a-z1-9]+)/g);
	var elementById;
	var elementByTagName;
	var elementsByClassNames;  
	var result = [];
	var clasResult = [];
	var tagResult = [];
	var tagPlusClasResult = [];
	
	NodeList.prototype.push = Array.prototype.push;
	//If there is an id in selector
	if(id) { 						
		elementById = document.getElementById(id.toString().replace('#', ''));		
		result = elementById; 	
	}
	
	
	//If there is an tagName in selector
	if(tag) { 		
		elementByTagName = document.getElementsByTagName(tag); 								
		tagResult.push(elementByTagName);
		result = tagResult;
	} 
	
	//If there is some classes 
	if(classes) {		
		elementsByClassNames = document.getElementsByClassName(classes.join('').replace(/\./g, ' ')); 
		result = elementsByClassNames;								
    } 
	
	//If there are tag and one class	
	if (elementByTagName && elementsByClassNames) { 
		for ( var key in elementsByClassNames ) 				
			if (elementsByClassNames[key] instanceof Object && !(elementsByClassNames[key] instanceof Function)
					&& elementsByClassNames[key].tagName.toLowerCase() === elementByTagName[0].tagName.toLowerCase() ) 
				result = elementsByClassNames[key];											
	};
		
	
		
	this.domElements = result;
	
	
};



requestParams = {
    method : "GET",
    url    : "https://mongolab.com/databases/first-base",
    body   : null
}

function errorCallback() { 
	alert('There is some mistake');
	};
	
function callback(answ) {
	console.log(answ);
	};

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

/*ann.annObject.getRequest = function (url) {	
		var request = new XMLHttpRequest();						
		request.open('GET', url);
		request.setRequestHeader ('Content-Type', 'text/xml');	
		request.onreadystatechange = function() { 		
			if (request.readyState != 4 && request.status != 200) {
			alert('There is some mistake');

			return;

			}		
		var answer = request.responseText;
		
		return answer;

		}
		
	request.send(null);

	};*/

ann.annObject.prototype = {
    
	getDomElements: function(){
		return this.domElements;
	}
	
};
