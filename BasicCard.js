function basicCard (front, back) { 
	this.front = front; 
	this.back = back;

};

var a = new basicCard("What are those", "bla");
var b = new basicCard("test", "answer");

newArray = [a,b];

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