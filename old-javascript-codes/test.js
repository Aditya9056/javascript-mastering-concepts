let json = JSON.parse(JSON.stringify({
    "PetShop": {
        "Members": {
            "John": {
                "Gender": "Male",
                "Residence": "New York",
                "Pets": {
                    "Fish": "Fin"
                }
            },
            "Julie": {
                "Gender": "Female",
                "Residence": "Washington, D.C.",
                "Pets": {
                    "Cat": "Fluffy",
                    "Fish": "Jack"
                }
            }
        }
    }
}));


const findInJson = (json) =>{

    let len = Object.keys(json.PetShop.Members.Julie.Pets)
    let julie = Object.keys(json.PetShop.Members.Julie.Pets)
    let jhon = Object.keys(json.PetShop.Members.John.Pets)

    for(i=0; i<len.length; i++){
        for(j=1; j<len.length; j++){
            if( julie[i] !== jhon[j]){
                return julie[i]
            }
        }
    }

    return -1
}

// console.log(findInJson(json))




let thisObject = {
    name: "Aditya",
    someThing: "somethingValue"
}

let crud = (thisObject, optional) =>{

    // Create

    // Read

    // Delete

    // Update

}

let a = [1, 3, 4]

// select name, max(salary) 
// from employees
// where salary<(select max(salary) from employees)


// select emp_name
// from Orders
// where city = "Taipei"
// Inner Join Employees
// On Employees.E_id == Orders.E_id

// select emp_name, order_number
// from Employees
// Inner Join Orders
// On Employees.E_id = Orders.E_id