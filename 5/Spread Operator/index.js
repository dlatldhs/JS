let contacts = ['Mary','Joel','Danny'];
// let friends = ['David','Mary','Joel','Danny','Luke'];
let friends = ['David',...contacts,'Luke'];

// console.log(friends);
// // contacts.push('John');
// // console.log(contacts);
// // console.log(friends);

let person = {
    name: 'Adam',
    age: 25
};
let employee = {
    ...person,
    salary: 5000,
    position: 'Software developper'
};
console.log(person);
console.log(employee);
// ...변수명 으로 참조 가능함 다 됨 object array 등

const shoppingList = ["eggs", "milk", "butter"];
const shoppingBasket = [...shoppingList];
shoppingBasket.push("bread");
shoppingBasket.push("water");
console.log("shopping :",shoppingBasket);