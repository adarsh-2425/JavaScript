let geeks = {
	name: "ABC",
	printFunc: function () {
		console.log(this.name);
	}
}

let printFunc2 = geeks.printFunc.bind(geeks);
printFunc2();
