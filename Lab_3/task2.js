// Реализуйте функцию sum

function sum(set)  {
    let total = 0;
    
    for (var i in this) {
        total += Number(this[i]);
    }
    return total;
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));

document.getElementById("sum").innerHTML = sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]);

//Second variant, here we don't need to use this while call:
var sum2 = {
    call : (set) => {
        var total = 0;
        
        for (var i in set) {
            total += Number(set[i]);
        }
        return total;
    }
}