

    var section = document.getElementById("towninfo");

    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL)

    request.responseType = "json";
    request.send();

    request.onload = function() {
        var towninfo = request.response;
        showTownInfo(towninfo);
    }

  

function showTownInfo(jsonObj) {
  var towns = jsonObj['towns'];
      
  for (var i = 0; i < towns.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');

    myH2.textContent = towns[i].name;
    myPara1.textContent = 'Town Motto:' + towns[i].motto;
    myPara2.textContent = 'Year Founded:' + towns[i].yearFounded;
    myPara3.textContent = 'Average Rainfall:' + towns[i].averageRainfall;
    myPara4.textContent = 'Current Population:' + towns[i].currentPopulation;     
    

    section.appendChild(myArticle);

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);

    
  }
}