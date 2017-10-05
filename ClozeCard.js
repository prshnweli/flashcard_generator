function clozeCard (complete, clozed) { 
	this.complete = complete;
	this.clozed = clozed;
	this.blank = complete.replace(clozed, '...');

};

var a = new clozeCard("The first element is Hydrogen", "Hydrogen");
var b = new clozeCard("The second element is Helium", "Helium");

newArray = [a,b];

x = process.argv[3] - 1;

function ask(){
	if(process.argv[2] = 'question') {
		console.log(newArray[x].blank)
	}
}

ask();