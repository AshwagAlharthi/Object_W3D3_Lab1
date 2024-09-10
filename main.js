// - Create object
const User = {
    name: "Ashwag",
    email: "Ashwag@hotmail.com",
    id:1000001, 
    available: false,
    workAvalaible: function(){
        return this.available == true;
    },
    address: {
        city: {
            cName: "Ryiadh",
            cCode: 25988,
        },
        houseNo: '70',
        district: "Almalqa"
    },
    skills: ["soft skills", "programming", "solving problems"],
}

// - print the object user
console.log(User);

// - print the property name
console.log(User.name);

// - modify the value of property id and print
User.id = 202020;
console.log(User.id);

// - delete the property email and print
delete User.email;
console.log(User);

// - test you function  by changing the value to Available ,print the function
User.available = true;
console.log(User.workAvalaible());

// - print the address object
console.log(User.address);

// - print one of the keys inside the city object
console.log(User.address.city.cName);

// - print the index 2 in the array skills
console.log(User.skills[2]);

// - print the array skills  index with out the “ [] “ and **Divide** them with “,”
console.log(User.skills.join(","));