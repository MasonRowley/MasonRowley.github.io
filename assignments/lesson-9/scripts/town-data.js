

    

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
  console.log(towns);
  

    if( towns.name = "Preston") {
    var section = document.querySelector("section");  
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var img = document.createElement("img");
    img.setAttribute("src","images/preston-home.png");
    img.setAttribute("alt","Preston Picture");
    img.setAttribute("srcset","images/preston-home-small.png 350w");
    //var src = document.getElementById("article")

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
    myArticle.appendChild(img);
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
          var img = document.createElement('img');
          img.setAttribute("src","images/fishhaven-home.jpg");
        img.setAttribute("alt","Fish Haven Picture");
        img.setAttribute("srcset","images/fishhaven-home-small.jpg 350w");
      
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
          myArticle.appendChild(img);
      
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
              var img = document.createElement('img');
          img.setAttribute("src","images/sodasprings-home.jpg");
        img.setAttribute("alt","Soda Springs Picture");
        img.setAttribute("srcset","images/sodasprings-home-small.jpg")
          
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
              myArticle.appendChild(img);
          
              }
            }
