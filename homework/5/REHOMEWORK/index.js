const RGBColors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
// console.log(Math.floor(Math.random() * RGBColors.length));
const randombtn = document.querySelector('button#random_string');
const colorStringSpace = document.querySelector('p#color_string_printing');

randombtn.addEventListener("click",function(){
    colorString ="#";
    for (let i=0; i < 6; i++){
        colorString += RGBColors[Math.floor(Math.random() * RGBColors.length)];
    }
    colorStringSpace.innerHTML = colorString;
    //console.log(colorString);
    document.body.style.backgroundColor = colorString;
})