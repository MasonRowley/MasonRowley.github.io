function windChillCalc() {
    var t= parseInt(document.getElementById("temp").innerHTML);
    var s= parseInt(document.getElementById("speed").innerHTML);
    
    var wind2= windChill(t,s);
    document.getElementById("output").innerHTML=wind2; 
    }
    function windChill(tempf,speed) {
    var chill= Math.round(35.74+(0.6215 * tempf)-(35.75 * Math.pow(speed,0.16))+(0.4275 * tempf * Math.pow(speed,0.16)))+"F";
    return chill;
    }