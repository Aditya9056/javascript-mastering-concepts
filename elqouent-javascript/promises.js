let fifteen = Promise.resolve(15)

fifteen.then(value => console.log( `${value}` ))

console.log( typeof(fifteen) )