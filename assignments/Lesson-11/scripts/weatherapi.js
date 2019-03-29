weatherRequest = new XMLHttpRequest();

 var apiURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=1b9958a8e999af1a2e05cec83a596002";

weatherRequest.open("GET", apiURLstring, true)

weatherRequest.send();

weatherRequest.onload = function () {
  var weatherData= JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    var data =  weatherData.list[0].main.temp;
    var fahren = ((data - 273.15) * (9/5)) + 32;
    document.getElementById("current-temp").innerHTML = fahren.toFixed(1);
    document.getElementById("humid").innerHTML = weatherData.list[0].main.humidity;
}

