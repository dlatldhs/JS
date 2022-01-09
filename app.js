// object 는 dictionary 와 비슷함
const Latte = {
    kcal : '210',
    caffeine : "105mg",
    price : 2000,
};

console.log(Latte);
// 둘 다 같은 의미
console.log("Latte.caffeine : "+Latte.caffeine);
console.log("Latte['caffeine'] : " + Latte["caffeine"]);

// const 라도 object 안에 있는 값은 업데이트가 가능함
Latte['price'] = 2500;
console.log(Latte);

// Add in Object
// objectname.property = "value"
Latte.name = "Madagascar VanillaBean Latte";
console.log(Latte);

// 이런 것도 가능함
Latte.price = Latte.price-500;
console.log(Latte);