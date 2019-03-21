weatherRequest = new XMLHttpRequest();

 var apiURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=1b9958a8e999af1a2e05cec83a596002";

weatherRequest.open("GET", apiURLstring, true)

weatherRequest.send();

weatherRequest.onload = function () {
  var weatherData= JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    for(i = 0; i < weatherData.list.length; i++){

        if(weatherData.list[i].dt_txt = "18:00:00"){
        document.getElementById("dayOne").innerHTML = (((weatherData.list[i].main.temp) - 273.15) * (9/5) + 32).toFixed(1) + " F";
        }
    }
}