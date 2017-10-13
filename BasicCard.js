function basicCard (front, back) { 
	this.front = front; 
	this.back = back;

};

var a = new basicCard("The first element is", "Hydrogen");
var b = new basicCard("The second element is Helium", "Helium");
var c = new basicCard("The third element is Lithium", "Lithium");
var d = new basicCard("The fourth element is Beryllium", "Beryllium");
var e = new basicCard("The fifth element is Boron", "Boron");

newArray = [a,b,c,d,e];

x = process.argv[3] - 1;

function ask(){
	if(process.argv[2] === 'question') {
		console.log(newArray[x].front)
	}
	if (process.argv[2] === 'answer') {
		console.log(newArray[x].back)
	}
}

ask();