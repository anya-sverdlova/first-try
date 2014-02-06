var ann = function(selector){
    return new ann.annObject(selector); 
};

ann.annObject = function(selector){
    // analize selector
	var id = selector.match(/^#[a-zA-Z]+/);
	var tag = selector.match(/^[a-zA-Z]+/);
    var classes = selector.match(/(^[a-zA-Z]+)?(\.[a-z1-9]+)g/);
    var elementById = id;
	var elementsByTagName = tag;
    var elementsByClassNames = [];
   
    var result = [];
    
	if(id) { //If there is an id in selector
	
		elementById = document.getElementById(id.replace('#', ' ')); //Присвоить прототипу метод replace
		
		result.push(elementById);

		}
		
	else if(tag) { //If there is an tagName in selector
	
		elementsByTagName = document.getElementsByTagName(tag); 	
						
		result.push(elementsByTagName);
		
		}
	
	
    else if(classes[1]){ //If there are more then one class in selector
	 
		for ( var i = 0; i < classes.lehgtn; i++ ) {
		
			classes[i] = document.getElementsByClassName(classes[i].replace('.', ' '));
			
			elementsByClassNames.push(classes[i]);
			
			result.push(elementsByClassNames);
			
			}
		}
		
	else if(!classes[1]){ //If there is only one class in selector
	 
		for ( var i = 0; i < classes.lehgtn; i++ ) {
		
			elementsByClassNames = document.getElementsByClassName(classes[0].replace('.', ' '));
									
			result.push(elementsByClassNames);
			
			
			}
		}
	
			
	else if (elementsByTagName && elementsByClassNames) { //If there are tag and some number of classes 

		if (elementsByClassNames[1]) { //If there are more then one class
		
			for ( var i = 0; i < elementsByClassNames.lehgtn; i++ ) {
			
				if( elementsByClassNames[i] && elementsByClassNames[i].tagName.toLowerCase() !== elementsByTagName.toLowerCase())
                continue;
                              
             result.push(elementsByClassNames[i]);
			
			}
		}
	}
    	
    this.domElements = result;		
	
}

ann.annObject.prototype = {
    
    getDomElements: function(){
        return this.domElements;
    },
		
};

console.log( ann('div') );