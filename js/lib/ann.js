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
	
    //If there is an id in selector
	if(id) { 		
		//This part return "null" although id.toString().replace('#', ' ') return name of id in selector
		var idName = id.toString().replace('#', ' '); // --> return correct id
		elementById = document.getElementById(idName);	// --> return null (comments on the same line for convenience)		
		result = elementById; 	
	}
	
	//If there is an tagName in selector
	if(tag) { 	
		elementByTagName = document.getElementsByTagName(tag); 								
		result = elementByTagName;		
	} 
	
	//If there is some classes at all - otherwise return mistake, because can't receive [1] from null
	if(classes) {		
		//If there are more then one class in selector
		if(classes[1]){ 	 
			for ( var key in classes ) { 				
				elementsByClassNames = document.getElementsByClassName(classes[key].replace('.', ' '));				
				result.push(elementsByClassNames);
				
			}			
		} //If there is only one class in selector	
		else { 	 						
			elementsByClassNames = document.getElementsByClassName(classes[0].replace('.', ' ')); 										
			result = elementsByClassNames;				
		}	
										
    } 
	
	/*//If there are tag and some number of classes	--> эту часть кода нужно перенести до того момента, как проверяется тег, чтобы 
	if (elementByTagName && elementsByClassNames) {  
			
			//If there are more then one class
			if (elementsByClassNames[1]) { 			
				for ( var i = 0; i < elementsByClassNames.lehgtn; i++ ) {				
					if( elementsByClassNames[i] && elementsByClassNames[i].tagName.toLowerCase() 
						!== elementByTagName.toLowerCase())
					continue;								  
				 result.push(elementsByClassNames[i]);			
				}
			}
		} */
		
    this.domElements = result;
	
	return this.domElements;
	
};

ann.annObject.prototype = {
    
    getDomElements: function(){
        return this.domElements;
    },
	
	getXml: function (url) {	
		var request = new XMLHttpRequest();		
		request.setRequestHeader ('Content-Type', 'text/xml');		
		request.open('GET', url);		
		request.onreadystatechange = function() { 

			if (xhr.readyState != 4 && xhr.status != 200) {
			alert('There is some mistake');

			return;

			}
			
		var answer = request.responseXML;
		
		return answer;

		}
		
	request.send(null);

	}
};
