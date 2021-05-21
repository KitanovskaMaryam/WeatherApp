document.addEventListener('DOMContentLoaded', function (){
let weather = {
          "apiKey":"6285877df05e0f11bc48e76bb3604cb3",
          fetchWeather: function(city){
                    fetch(
                    "https://api.openweathermap.org/data/2.5/weather?q="
                     + city 
                     +"&units=metric&appid="
                     + this.apiKey
                     ).then((response) => response.json()).then((data) => this.displayWeather(data));
          },
          displayWeather: function(data){
                    const { name } = data;
                    const { icon, description } = data.weather[0];
                    const { temp, humidity } = data.main;
                    const { speed } = data.wind;
                    console.log("name",name,"icon",icon,"desc",description,"temp",temp,"hum",humidity,"speed",speed);
                    document.querySelector(".city").innerText = "Weather in " + name;
                    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                    document.querySelector(".description").innerText= description;
                    document.querySelector(".temp").innerText = Math.floor(temp) + " °C";
                    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
                    document.querySelector(".wind").innerText = "Wind Speed: "+ speed + " km/h";
          },
          search: function(){
                    this.fetchWeather(document.querySelector(".search-bar").value);
                    console.log(document.querySelector(".search-bar").value)
          }
};
document.querySelector("button").addEventListener("click",function (){
          weather.fetchWeather(document.querySelector(".search-bar").value);
});
})
// weather.fetchWeather("skopje");