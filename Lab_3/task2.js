// Реализуйте функцию sum

function sum(set) {
    var total = 0;
    
    for (var i in set) {
        total += Number(set[i]);
    }
    return total;
}

console.log(sum.call(this, [5, 5, 5, 5, 5, 5, 5, 5, 5]));

document.getElementById("sum").innerHTML = sum.call(this, [5, 5, 5, 5, 5, 5, 5, 5, 5]);