function windChillCalc() {
    var t= parseInt(document.getElementById("currtemp").innerHTML);
    var s= parseInt(document.getElementById("speed").innerHTML);

    var fahren = ((t - 273.15) * (9/5)) + 32;
    console.log(fahren);
    var wind2= windChill(fahren,s);
    document.getElementById("output").innerHTML=wind2; 
    }
    function windChill(tempf,speed) {
    var chill= Math.round(35.74+(0.6215 * tempf)-(35.75 * Math.pow(speed,0.16))+(0.4275 * tempf * Math.pow(speed,0.16)))+"F";
    return chill;
    }