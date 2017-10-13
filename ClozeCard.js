function clozeCard (complete, clozed) { 
	this.complete = complete;
	this.clozed = clozed;
	this.blank = complete.replace(clozed, '...');

};

var a = new clozeCard("The first element is Hydrogen", "Hydrogen");
var b = new clozeCard("The second element is Helium", "Helium");
var c = new clozeCard("The third element is Lithium", "Lithium");
var d = new clozeCard("The fourth element is Beryllium", "Beryllium");
var e = new clozeCard("The fifth element is Boron", "Boron");

newArray = [a,b,c,d,e];

x = process.argv[3] - 1;

function ask(){
	if(process.argv[2] === 'question') {
		console.log(newArray[x].blank)
	}
	if(process.argv[2] === 'answer') {
		console.log(newArray[x].complete)
	}
}

ask();