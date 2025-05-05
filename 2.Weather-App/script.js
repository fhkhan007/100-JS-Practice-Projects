document.addEventListener("DOMContentLoaded", function () {
    // Select the button and add event listener
    document.querySelector("button").addEventListener("click", getWeather);
});



function getWeather(){
    let cityInput= document.querySelector("#city");
    let city = cityInput.value ;
    let apiKey= "956129e6da17cc712721cf64cf4c5287";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    fetch(url)
       .then(response => response.json())
       .then(data => {


        let temperature = data.main.temp;
        let weatherDescription = data.weather[0].description;
        let cityName = data.name;
        let humidity = data.main.humidity;
        let pressure = data.main.pressure;


        document.querySelector("#weather-info").innerHTML=`
        
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
         <p>Weather: ${weatherDescription}</p>
         <p>Humidity: ${humidity}%</p>
         <p>Pressure: ${pressure} hPa</p>

        `;
        cityInput.value= "";
       })

       .catch(error => {
        console.error("Error fetching weather:", error);
        document.querySelector("#weather-info").innerHTML = "<p>City not found. Try again.</p>";
    });
}