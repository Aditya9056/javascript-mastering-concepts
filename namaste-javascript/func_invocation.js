const radius = [4, 3, 2, 1];

// Logics
const calArea = function(radius){
    return Math.PI * radius * radius;
}

const calCircum = function(radius){
    return 2* Math.PI * radius;
}

const calDiameter = function(radius){
    return 2 * radius;
}

// Calculation
Array.prototype.calculateValues = function (logic){
    const values = []

    for (let i=0; i<radius.length; i++){
        // calculating
        values.push(logic(radius[i]));
    }

    return values;
}

// Map
console.log(radius.map(calArea))

// Our Map
console.log(radius.calculateValues(calDiameter))