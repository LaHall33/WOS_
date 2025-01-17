// Playing with objects

var users = [{name: "Michael", age:37}, 
             {name: "John", age:30}, 
             {name: "David", age:27}];

// How would you print/log John's age?
console.log(users[1].age);

// How would you print/log the name of the first object?
console.log(users[0].name);

// How would you print/log the name and age of each user using a for loop?

for (let user of users) {
    let output = '';
    for (let key in user) {
        output += `${key} - ${user[key]} `;
    }
    console.log(output.slice(0, -1));

}
