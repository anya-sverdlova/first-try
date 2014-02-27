
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
	
	ann.httpRequest({
    method : "GET",
    url    : "https://api.mongolab.com/api/1/databases?apiKey=fUlPVExWjzXy1yjlMzvqzi1oREPQwkwQ",
    body   : null
}, function(data){console.log(data);}, function(error){console.log('error');});

	/*ann.httpRequest({
    method : "POST",
    url    : "https://api.mongolab.com/api/1/databases/first-base/collections/reviews?apiKey=fUlPVExWjzXy1yjlMzvqzi1oREPQwkwQ", 
    body   : JSON.stringify({
        message : "just text",
        author : "Anna"		
    })
}, function(data){console.log(data);}, function(error){console.log('error');});*/

ann.httpRequest({
    method : "GET",
    url    : "https://api.mongolab.com/api/1/databases/first-base/collections/reviews?apiKey=fUlPVExWjzXy1yjlMzvqzi1oREPQwkwQ", 
    body   : null
}, function(data){ var dataObj = JSON.parse(data); console.log(dataObj[0].message);}, function(error){console.log('error');});
}
