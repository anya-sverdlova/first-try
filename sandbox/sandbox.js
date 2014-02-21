
function startSandBox(){

    /*var byTag = ann('span');
    console.log(byTag);

	var byClass = ann('.class1');
    console.log(byClass);
	
    var byClasses = ann('.class1.class2');
    console.log(byClasses);
	//byClasses.innerHTML = 'rrr';
	
	var byId = ann('#someID');
    console.log(byId); 
	
	var byTagPlusClass = ann('div.class1');
	console.log(byTagPlusClass);
	//byTagPlusClass.innerHTML = 'green';
	
	var byTagPlusClass2 = ann('span.class1.class3');
	console.log(byTagPlusClass2);
	
	//var answer = ann.annObject.getRequest('index2.html');*/
	ann.httpRequest(requestParams, callback, errorCallback);
}
