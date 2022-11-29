class Operation {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}
	getName() {}
	getSign() {}
}

class DIV extends Operation {
	constructor(a, b) {
		super(a, b);
	}
	get result() {
		return (this.a - this.a % this.b) / this.b;
	}
	getName() {
		return 'Целая часть от деления'
	}
	getSign() {
		return ' div '
	}
}

class MOD extends Operation {
	constructor(a, b) {
		super(a, b);
	}
	get result() {
		return this.a % this.b;
	}
	getName() {
		return 'Отсаток от деления'
	}
	getSign() {
		return ' mod '
	}
}

class NOD extends Operation {
	constructor(a, b) {
		super(a, b);
	}
	get result() {
		while (this.a != this.b){
			if (this.a > this.b){
				this.a -= this.b;
			} else {
				this.b -= this.a;
			}
		}
	return (this.a);
	}
	getName() {
		return 'Наименьший общий делитель'
	}
	getSign() {
		return ' nod '
	}
}

class NOK extends Operation {
	constructor(a, b) {
		super(a, b);
	}
	get result() {
		var new_a = this.a;
		var new_b = this.b
		while (this.a != this.b){
			if (this.a > this.b){
				this.a -= this.b;
			} else {
				this.b -= this.a;
			}
		}
		return (Math.abs(new_a * new_b)/this.a);
	}
	getName() {
		return 'Наименьшее общее кратное'
	}
	getSign() {
		return ' nok '
	}
}


var a = 215; 
var b = 33;

let operations = [
	new DIV(a, b),
	new MOD(a, b),
	new NOD(a, b),
	new NOK(a, b),
];

for (let op of operations) {
	console.log(op.getName());
	console.log(a + op.getSign() + b + '=' + op.result);
}

