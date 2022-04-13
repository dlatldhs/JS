let incomes = [62000,67000,75000];
let total = 0;

for (const income of incomes) {
    console.log(income);
    total += income;
}

console.log(total);

let fullString = 'BSSM is one of the best schools in Busan~!'; 

for (const char of fullString) { // 하나 씩 출력함 띄어씍도 ㄷ포함해서 
    console.log(char);
}
// for of loop 에는 of 뒤에 튜플 딕셔너리 걍 다올 수 있음