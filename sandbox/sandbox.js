
function startSandBox(){

	var byTag = ann('span');
	console.log(byTag);

	var byClass = ann('.class-inner');
	console.log(byClass);
	
	var byClasses = ann('.class1.class3');
	console.log(byClasses);
	
	var byId = ann('#someID');
	console.log(byId); 
	
	var byTagPlusClass = ann('span.class1');
	console.log(byTagPlusClass);
	
	var byTagPlusClass2 = ann('span.class1.class3');
	console.log(byTagPlusClass2);
	
	/*ann.httpRequest({
	method : "POST",
	url    : "https://api.mongolab.com/api/1/databases/first-base/collections/reviews?apiKey=fUlPVExWjzXy1yjlMzvqzi1oREPQwkwQ", 
	body   : JSON.stringify({
		message : "not so simle text, it's a text with much more letters then previous",
	author : "Yana"		
	})
}, function(data){console.log(data);}, function(error){console.log('error');});*/

ann.httpRequest({
	method : "GET",
	url    : "https://api.mongolab.com/api/1/databases/first-base/collections/reviews?apiKey=fUlPVExWjzXy1yjlMzvqzi1oREPQwkwQ", 
	body   : null
}, function(data){console.log(JSON.parse(data)[0].message);}, function(error){console.log("error");});

ann('span').load("https://api.mongolab.com/api/1/databases/first-base/collections/reviews?apiKey=fUlPVExWjzXy1yjlMzvqzi1oREPQwkwQ");
}