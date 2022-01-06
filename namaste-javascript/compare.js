
const radius = [4, 3, 2, 1];

function calculateValues (radius){
    const area = [];
    const circum = [];
    const diameter = [];

    for (let i=0; i<radius.length; i++){

        // area
        area.push(Math.PI * radius[i] * radius[i]);

        // circumference
        circum.push(2 * Math.PI * radius[i] );

        // diameter
        diameter.push(2 * radius[i]);
   
    }

    return [area, circum, diameter];
}

console.log(calculateValues(radius))