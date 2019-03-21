weatherRequest = new XMLHttpRequest();

 var apiURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=1b9958a8e999af1a2e05cec83a596002";

weatherRequest.open("GET", apiURLstring, true)

weatherRequest.send();

weatherRequest.onload = function () {
  var weatherData= JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    weatherInfo(weatherData);
    fiveDay(weatherData);

}
 function weatherInfo (jsonObj) {
    var weatherData1 = jsonObj;
    var currtemp = weatherData1.list[0].main.temp;
    var data =  weatherData1.list[0].main.temp_max;
    var fahren = ((data - 273.15) * (9/5)) + 32;
    var chill = ((currtemp - 273.15) * (9/5)) + 32;
    var windChill =  Math.round(35.74+(0.6215 * chill)-(35.75 * Math.pow(weatherData1.list[0].wind.speed,0.16))+(0.4275 * chill * Math.pow(weatherData1.list[0].wind.speed,0.16)))+"F";

    document.getElementById("hitemp").innerHTML = fahren.toFixed(1);
    document.getElementById("humid").innerHTML = weatherData1.list[0].main.humidity;
    document.getElementById("speed").innerHTML = weatherData1.list[0].wind.speed;
    document.getElementById("sum").innerHTML = weatherData1.list[0].weather[0].description;
    console.log(document.getElementById("output").innerHTML = windChill);
}
function fiveDay(jsonObj) {
  var weatherData2 = jsonObj;
  for(i = 0; i < 5; i++){

    if(weatherData2.list[i].dt_txt = "18:00:00"){
    document.getElementById("day" + (i+1)).innerHTML = (((weatherData2.list[i].main.temp) - 273.15) * (9/5) + 32).toFixed(1) + " F";
  }

}
}
