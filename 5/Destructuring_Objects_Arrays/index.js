const player ={
    name : 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles'
    }
};
console.log(player.address.city);

const { name , club , address:{city} } = player;// 구조 분해

console.log(`${name} lays for ${club}`);
console.log(`${name} lives in ${city}`);

// let fullName = ['sion','Im'];
// console.log(fullName[1]);

let [firstName,lastName] = ['sion','Im'];// 배열 분해
lastName = 'IM';
console.log(firstName,lastName);