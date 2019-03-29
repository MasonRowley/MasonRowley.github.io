var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL)

    request.responseType = "json";
    request.send();

    request.onload = function() {
        var towninfo = request.response;
        showPrestonTownInfo(towninfo);
    }

 
  

function showPrestonTownInfo(jsonObj) {
  var towns = jsonObj['towns'];
  console.log(towns);
  

    if( towns.name = "Preston") {
    var myPara1 = towns[5].events;
    document.getElementById("event").innerHTML = myPara1;
    


    }
    }