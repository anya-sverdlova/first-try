
function startSandBox(){

	var byTag = ann('span');
	console.log(byTag);

	var byClass = ann('.class-inner');
	console.log(byClass);
	
	var byClasses = ann('.class1.class3');
	console.log(byClasses);
	byClasses.domElements[0].innerHTML = 'rrr';
	
	var byId = ann('#someID');
	console.log(byId); 
	
	var byTagPlusClass = ann('span.class1');
	console.log(byTagPlusClass);
	byTagPlusClass.domElements[0].innerHTML = 'red';
	byTagPlusClass.domElements[1].innerHTML = 'not red';
	
	var byTagPlusClass2 = ann('span.class1.class3');
	console.log(byTagPlusClass2);
	
	//var answer = ann.annObject.getRequest('index2.html');
	//ann.httpRequest(requestParams, callback, errorCallback);
}
