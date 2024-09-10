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


// ===================================================================================//
// --------------------------------------- Lab2 --------------------------------------//
// ===================================================================================//

const characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

// 1-Get first name that has blue eyes.
let hasBlueEyes = characters.find(character => character.eye_color == "blue");
console.log(hasBlueEyes.name);

// 2-Get first gender that is his mass is over 50
let massOver50 = characters.find(character => character.mass > 50);
console.log(massOver50.gender);

// 3-Get characters with height less than 200
let heightsLess200 = characters.filter(character => character.height < 200);
console.log(heightsLess200);

// 4-Get all male characters
let maleChars = characters.filter(character => character.gender == "male");
console.log(maleChars);
 
// 5-Get array of all names only
let onlyNames = characters.map(character => character.name);
console.log(onlyNames);

// 6-Get array of all heights only
let onlyHeights = characters.map(character => character.height);
console.log(onlyHeights); 

// 7-Sort by mass (low to high)
let charsByMass = characters.sort((a ,b) => a.mass - b.mass)
console.log(charsByMass);

// 8-Sort by height (high to low)
let charsByHeights = characters.sort((a,b) => b.height - a.height);
console.log(charsByHeights);
  
// 9-Does every character have mass more than 40?
let massMore40 = characters.every(character => character.mass > 40);
console.log('Does every character have mass more than 40? ', massMore40);
  
// 10-Is every character shorter than 200?
let charsLess200 = characters.every(character => character.height < 200);
console.log('Is every character shorter than 200? ',charsLess200);

// 11-Is there at least one character with blue eyes?
let blueEyesChars = characters.some(character => character.eye_color == "blue");
console.log('Is there at least one character with blue eyes? ',blueEyesChars);
  
// 12-Is there at least one character taller than 210?
let charsTall200 = characters.some(character => character.height > 210);
console.log('Is there at least one character taller than 210? ',charsTall200);
