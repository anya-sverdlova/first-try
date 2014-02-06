var ann = function(selector){
    return new ann.annObject(selector); 
};

ann.annObject = function(selector){
    // analize selector
	var id = selector.match(/^#[a-zA-Z]+/);
	var tag = selector.match(/^[a-zA-Z]+/);
    var classes = selector.match(/(\.[a-z1-9]+)/g);
    var elementById = id;
	var elementsByTagName = [];
    var elementsByClassNames = [];
   
    var result = [];
    
	if(id) { //If there is an id in selector
	
	elementById = document.getElementById(id.replace('#', ' ')); //Присвоить прототипу метод replace
	
	elementsById = result; 

		}
		
	else if(tag) { //If there is an tagName in selector
	
		elementByTagName = document.getElementsByTagName(tag); 		
						
		result = elementByTagName;
		
		}
	
	
    else if(classes[1]){ //If there are more then one class in selector
	 
		for ( var i = 0; i < classes.lehgtn; i++ ) {
		
			classes[i] = document.getElementsByClassName(classes[i].replace('.', ' '));
			
			elementsByClassNames.push(classes[i]);
			
			}

			result = elementsByClassNames; 
		}
		
	else if(!classes[1]){ //If there is only one class in selector
	 
		for ( var i = 0; i < classes.lehgtn; i++ ) {
		
			elementsByClassNames = document.getElementsByClassName(classes[0].replace('.', ' '));
									
			elementsByClassNames = result;
			
			}
		}
	
			
	if (elementByTagName && elementsByClassNames) { //If there are tag and some number of classes 

		if (elementsByClassNames[1]) { //If there are more then one class
		
			for ( var i = 0; i < elementsByClassNames.lehgtn; i++ ) {
			
				if( elementsByClassNames[i] && elementsByClassNames[i].tagName.toLowerCase() !== elementByTagName.toLowerCase())
                continue;
                              
             result.push(elementsByClassNames[i]);
		
			}
		}
	}
    	
    this.domElements = result;
	
	return this.domElements;
	
}

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
