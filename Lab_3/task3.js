const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

function isEquivalent(left, right){
	for (const i of Object.keys(left)){
		if (left[i] != right[i]){
			return false;
		}
	}
	return true;
}

// Реализуйте функцию isEquivalent

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false

document.getElementById("areEqual").innerHTML = isEquivalent(object1, object2);
document.getElementById("areNotEqual").innerHTML = isEquivalent(object1, object3);