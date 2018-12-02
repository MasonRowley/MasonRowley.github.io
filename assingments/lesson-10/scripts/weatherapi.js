var weather;
function getWeather() {
    loadJSON("https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=1b9958a8e999af1a2e05cec83a596002", gotData);
}
    function gotData(data) {
        println(data);
    }
data=document.getElementById("current-temp").innerHTML;
