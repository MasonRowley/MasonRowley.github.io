

    

    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL)

    request.responseType = "json";
    request.send();

    request.onload = function() {
        var towninfo = request.response;
        showPrestonTownInfo(towninfo);
        showFishHavenTownInfo(towninfo);
        showSodaInfo(towninfo);
    }

  

function showPrestonTownInfo(jsonObj) {
  var towns = jsonObj['towns'];
  
  

    if( towns.name = "Preston") {
    var section = document.querySelector("section");  
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');

    myH2.textContent = towns.name;
    myPara1.textContent = 'Town Motto:' + " " + towns[4].motto;
    myPara2.textContent = 'Year Founded:' + " " + towns[4].yearFounded;
    myPara3.textContent = 'Average Rainfall:' + " " + towns[4].averageRainfall;
    myPara4.textContent = 'Current Population:' + " " + towns[4].currentPopulation;     
    

    section.appendChild(myArticle);

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    }
    }
    function showFishHavenTownInfo(jsonObj) {
        var towns = jsonObj['towns'];
        
        
      
          if( towns.name = "Fish Haven") {
          var section = document.querySelector("section");  
          var myArticle = document.createElement('article');
          var myH2 = document.createElement('h2');
          var myPara1 = document.createElement('p');
          var myPara2 = document.createElement('p');
          var myPara3 = document.createElement('p');
          var myPara4 = document.createElement('p');
      
          myH2.textContent = towns.name;
          myPara1.textContent = 'Town Motto:' + " " + towns[1].motto;
          myPara2.textContent = 'Year Founded:' + " " + towns[1].yearFounded;
          myPara3.textContent = 'Average Rainfall:' + " " + towns[1].averageRainfall;
          myPara4.textContent = 'Current Population:' + " " + towns[1].currentPopulation;     
          
      
          section.appendChild(myArticle);
      
          myArticle.appendChild(myH2);
          myArticle.appendChild(myPara1);
          myArticle.appendChild(myPara2);
          myArticle.appendChild(myPara3);
          myArticle.appendChild(myPara4);
      
          }
        }

        function showSodaInfo(jsonObj) {
            var towns = jsonObj['towns'];
            
            
          
              if( towns.name = "Soda Springs") {
              var section = document.querySelector("section");  
              var myArticle = document.createElement('article');
              var myH2 = document.createElement('h2');
              var myPara1 = document.createElement('p');
              var myPara2 = document.createElement('p');
              var myPara3 = document.createElement('p');
              var myPara4 = document.createElement('p');
          
              myH2.textContent = towns.name;
              myPara1.textContent = 'Town Motto:' + " " + towns[5].motto;
              myPara2.textContent = 'Year Founded:' + " " + towns[5].yearFounded;
              myPara3.textContent = 'Average Rainfall:' + " " + towns[5].averageRainfall;
              myPara4.textContent = 'Current Population:' + " " + towns[5].currentPopulation;     
              
          
              section.appendChild(myArticle);
          
              myArticle.appendChild(myH2);
              myArticle.appendChild(myPara1);
              myArticle.appendChild(myPara2);
              myArticle.appendChild(myPara3);
              myArticle.appendChild(myPara4);
          
              }
            }
