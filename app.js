// type
// 코드 멈추게 함 
const age = parseInt(prompt("How old are you?"));// <----- 이게 안끝나면 밑에 있는게 실행안됨

// type 보는거 -- > typeof variableName

//console.log(typeof age,typeof parseInt(age));
//console.log(age,parseInt(age));
// NaN -> Not a Number 
// type 변환 function string -> int
//console.log(parseInt(age));
//console.log(isNaN(age));// inNaN return boolean T or F
// F -> number가 아니라는 조건에 충족안함 -> number!
// T -> number가 아니라는 조건에 충족함 -> Not a number
if(isNaN(age)){// condition is ture or false
    // condition == ture
    console.log('Please wirte a number');
}
else{
    console.log('your age : '+age);
    console.log('Have some good day!')
}