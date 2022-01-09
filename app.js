/* 함수 선언 하는 방법
function sayHi(argument){// argument 인수는 function 안에서만 존재
    console.log('hello! '+argument);
}
sayHi('sion')*/


const person = {
    name : 'sion',
    hi : function sayHi(argument){
        console.log('hello '+argument+' good day to study!');
    },
};
person.hi('ZION')