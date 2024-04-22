const cityName = document.querySelector(".city");
const temperature = document.querySelector(".temp"); 
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon")






const serchBox = document.querySelector(".search input");
const serchBtn= document.querySelector(".search button");

const apiKey = "1e1cce704595df81eea3cb1e155d14e8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function fetchApi(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    cityName.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Cloud"){
        weatherIcon.src = "clouds.png";
    }else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }


}

serchBtn.addEventListener("click", ()=>{
    fetchApi(serchBox.value);
})
