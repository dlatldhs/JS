const images = ["0.png","1.png","2.png","3.png","4.png","5.png","6.png"];

const choiceRandomImage = images[Math.floor(Math.random()*images.length)];
const IMA = document.createElement('img');
IMA.src = `CSS/img/${choiceRandomImage}`;

document.body.appendChild(IMA);
