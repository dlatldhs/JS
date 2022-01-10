/* 함수 선언 하는 방법
function sayHi(argument){// argument 인수는 function 안에서만 존재
    console.log('hello! '+argument);
}
sayHi('sion')*/
// const person = {
//     name : 'sion',
//     hi : function sayHi(argument){
//         console.log('hello '+argument+' good day to study!');
//     },
// };
// person.hi('ZION')
const calculator ={
    add : function(a,b){
        console.log(a+b);
    },
    m : function(a,b){
        console.log(a-b);
    },
    wprhq : function(a,b){
        console.log(a*b);
    },
};
const a = 5, b = 4;
calculator.add(a,b);
calculator.m(a,b);
calculator.wprhq(a,a);