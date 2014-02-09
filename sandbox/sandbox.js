
function startSandBox(){

    var byTag = ann('span');
    console.log(byTag);	

    var byClass = ann('.class1');
    console.log(byClass);
	byClass[0].innerHTML = 'rrr';
	
	var byId = ann('#someID');
    console.log(byId);
}
