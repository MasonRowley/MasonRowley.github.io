
var cityindex, cities;
var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var cityInfo = request.response;
    showCitydata(cityInfo);
}

function showCitydata(jsonObj) {
    cities = jsonObj['towns'];
    for (cityindex = 0; cityindex < cities.length; cityindex++) {
        
        if ((cities[cityindex].name == 'Preston') || (cities[cityindex].name == 'Soda Springs') || (cities[cityindex].name == 'Fish Haven'))
            populateCityData(cities[cityindex]);
        else
            continue;
    
    }
}

function populateCityData(jsonObj) {

    var city = jsonObj;

    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myH3 = document.createElement('h3');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    myH2.textContent = city.name;
    myH3.textContent = 'Motto: ' + city.motto;
    myPara1.textContent = 'Year Founded: ' + city.yearFounded;
    myPara2.textContent = 'Population: ' + city.currentPopulation;
    myPara3.textContent = 'Average Rainfall ' + city.averageRainfall;

myArticle.appendChild(myH2);
myArticle.appendChild(myH3);
myArticle.appendChild(myPara1);
myArticle.appendChild(myPara2);
myArticle.appendChild(myPara3);
}