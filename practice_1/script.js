var result1 = [];
var result2 = [];

class Users {
	constructor(name, age, salary, city) {
		this.name = name;
		this.age = age;
		this.salary = salary;
		this.city = city;
	}
}

let users = [
	new Users('Николай', 18, 32.790, 'Москва'),
	new Users('Олег', 23, 65.550, 'Москва'),
	new Users('Оля', 22, 102.900, 'Екатеринбург'),
	new Users('Сергей', 37, 65.880, 'Новосибирск'),
	new Users('Анна', 43, 45.700, 'Санкт-петербург'),
	new Users('Михаил', 19, 50.000, 'Москва'),
	new Users('Аннастасия', 39, 39.990, 'Красноярск'),
	new Users('Кирил', 28, 43.200, 'Барнаул'),
	new Users('Константин', 35, 95.500, 'Сочи'),
	new Users('Павел', 24, 66.290, 'Владивосток'),
	new Users('Елена', 29, 130.090, 'Новокузнецск'),
	new Users('Марина', 29, 86.990, 'Ставрополь'),
	new Users('Алексей', 22, 71.000, 'Иркутск')
];

console.log('Сортировка по возрасту:');
for ( let i = 0; i<users.length; i++ ) {
	let j_max = i;
	for ( let j = i+1; j < users.length; j++) {
		if (users[j_max].age < users[j].age) {
			j_max = j;
		}
	}
	var temp1 = users[i];
	users[i] = users[j_max];
	users[j_max] = temp1;
	result1.push('Имя: ' + users[i].name + ', возраст: ' + users[i].age + ', город: ' + users[i].city + ', зп:' + users[i].salary);
}
console.log(result1);

console.log('Сортировка по заработной плате:')
for ( let i = 0; i<users.length; i++ ) {
	let j_max = i;
	for ( let j = i+1; j < users.length; j++) {
		if (users[j_max].salary > users[j].salary) {
			j_max = j;
		}
	}
	var temp2 = users[i];
	users[i] = users[j_max];
	users[j_max] = temp2;
	result2.push('Имя: ' + users[i].name + ', возраст: ' + users[i].age + ', город: ' + users[i].city + ', зп:' + users[i].salary);
}
console.log(result2);

function getResult(){
	return {result1, result2};
}