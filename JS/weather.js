const API_KEY = "bbacb292efec5002670b03c44bddf286";

function successCase(position){// GeolocationPosition Object를 하나 받음
    //console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.name, data.weather[0].main);
            const weatherStatus = document.querySelector('div#weather span:first-child');
            const weatherName = document.querySelector('div#weather span:last-child');
            weatherName.innerHTML = `지역 : ${data.name}`;
            weatherStatus.innerHTML = `날씨 : ${data.weather[0].main} / 기온 : ${data.main.temp}`;
        });
}

function failCase(){
    alert("Can't find you. No weather for you!")
}

navigator.geolocation.getCurrentPosition(successCase,failCase);