
//Input: A temperature in farinheit and a wind speed in miles per hour.
//Processing: using two functions take the wind speed and temperature and 
// calculate the wind chill.
//Output: Display the windchill factor to the user. 
function doInputOutput() {
var t= parseFloat(document.getElementById("temp").value);
var s= parseFloat(document.getElementById("speed").value);

var wind2= windChill(t,s);
document.getElementById("output").innerHTML=wind2; 
}
function windChill(tempf,speed) {
var chill= Math.round(35.74+(0.6215 * tempf)-(35.75 * Math.pow(speed,0.16))+(0.4275 * tempf * Math.pow(speed,0.16)))+ "&#176F";
return chill;
}



