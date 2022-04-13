// Function declearation
function breakfastMenu(food) {
    return `I'm going to ${food} for breakfast`;
}

// anonymous function 
const luchMenu = function(food = 'pizza') {// 기본으로 default 값이 pizza 여서 인자가 안들어면 pizza 가 됨 들어오면 바뀜
    return `I'm going to eat ${food} for lunch.`;
}

// Arrow function <-- 이거 새로운 문법 
// const dinnerMenu = (food) => {
//     return `I'm gogin to eat a ${food} for dinner.`;
// }// 파라미터가 한개면 생략 가능
const dinnerMenu = food => `I'm gogin to eat a ${food} for dinner.`;
const dinnerMenu2 = (food,drink) => `I'm going to eat a ${food} and ${drink} for dinner.`;

console.log( luchMenu('scrambled egg') );
console.log( luchMenu() );