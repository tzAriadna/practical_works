class Operation {
	getName() {}
	getSign() {}
	estimates(a, b) {}
}

class DIV extends Operation {
	getName() {
		return 'Целая часть от деления'
	}
	getSign() {
		return ' div '
	}
	estimates(a, b) {
		return (a - a % b) / b;
	}
}

class MOD extends Operation {
	getName() {
		return 'Отсаток от деления'
	}
	getSign() {
		return ' mod '
	}
	estimates(a, b) {
		return a % b;
	}
}

class NOD extends Operation {
	getName() {
		return 'Наименьший общий делитель'
	}
	getSign() {
		return ' nod '
	}
	estimates(a, b) {
		while (a != b){
			if (a > b){
				a -= b;
			} else {
				b -= a;
			}
		}
		return a;
	}
}

class NOK extends Operation {
	getName() {
		return 'Наименьшее общее кратное'
	}
	getSign() {
		return ' nok '
	}
	estimates(a, b) {
		var new_a = a;
		var new_b = b
		while (a != b){
			if (a > b){
				a -= b;
			} else {
				b -= a;
			}
		}
		return (Math.abs(new_a * new_b)/a);
	}
}


var a = 215; 
var b = 33;

let operations = [
	new DIV(),
	new MOD(),
	new NOD(),
	new NOK(),
];

for (let op of operations) {
	console.log(op.getName());
	console.log(a + op.getSign() + b + '=' + op.estimates(a, b));
}

