// All you JavaScript code for assignment 4 should be in this file

var language = "English";
var subtitle;

function getTdImgElement(countryCode) {
  var cell = document.createElement("td");
  var image = document.createElement("img");
  image.setAttribute("src", "flags/" + countryCode + ".png");
  image.setAttribute("alt", "");
  image.setAttribute("height", 20);
  image.setAttribute("width", 29);
  cell.appendChild(image);
  return cell;
}

function generateColumn(info) {
  var element = document.createElement("td");
  var detail = document.createTextNode(info);
  element.appendChild(detail);
  return element;
}

function generateTable(title, continent, language, condition, max, min) {
  subtitle = document.querySelector("#subtitle").innerHTML = title;
  
  var table = document.querySelector("#outputTable");
  var tableExist = document.querySelector("tbody");
  if(tableExist) {
    table.removeChild(tableExist);
  }
  
  var tableDetail = document.createElement("tbody");
  for(var i = 0; i < countries.length; ++i) {
    if(condition == "No"){
    var myRow = document.createElement("tr");
    myRow.appendChild(getTdImgElement(countries[i].Code));
    myRow.appendChild(generateColumn(countries[i].Code));
    myRow.appendChild(generateColumn(eval('countries[i].Name.' + language)));
    myRow.appendChild(generateColumn(countries[i].Continent));
    myRow.appendChild(generateColumn(countries[i].AreaInKm2));
    myRow.appendChild(generateColumn(countries[i].Population));
    myRow.appendChild(generateColumn(countries[i].Capital));
    tableDetail.appendChild(myRow);
  }
    else if(condition == "people"){
      if(min < countries[i].Population){
        if(max > countries[i].Population){
         var myRow = document.createElement("tr");
    myRow.appendChild(getTdImgElement(countries[i].Code));
    myRow.appendChild(generateColumn(countries[i].Code));
    myRow.appendChild(generateColumn(eval('countries[i].Name.' + language)));
    myRow.appendChild(generateColumn(countries[i].Continent));
    myRow.appendChild(generateColumn(countries[i].AreaInKm2));
    myRow.appendChild(generateColumn(countries[i].Population));
    myRow.appendChild(generateColumn(countries[i].Capital));
    tableDetail.appendChild(myRow);
      }
      }
      
     
    }
    else if(condition == "areaContinent"){
      if(continent == countries[i].Continent){
        if(countries[i].AreaInKm2 > min){
           var myRow = document.createElement("tr");
    myRow.appendChild(getTdImgElement(countries[i].Code));
    myRow.appendChild(generateColumn(countries[i].Code));
    myRow.appendChild(generateColumn(eval('countries[i].Name.' + language)));
    myRow.appendChild(generateColumn(countries[i].Continent));
    myRow.appendChild(generateColumn(countries[i].AreaInKm2));
    myRow.appendChild(generateColumn(countries[i].Population));
    myRow.appendChild(generateColumn(countries[i].Capital));
    tableDetail.appendChild(myRow);
      }}
    

      
    }
  
  table.appendChild(tableDetail);
}
}


window.onload = function () {
  generateTable("List of Countries and Dependencies", "", "English", "No", "", "");
  subtitle = document.querySelector("#subtitle");
  document.querySelector("#menu_21").onclick = function () { generateTable("List of Countries and Dependencies - Population greater than 100 milion", "", "English", "people", 8000000000, 100000000);};
  document.querySelector("#menu_22").onclick = function () { generateTable("List of Countries and Dependencies - Population between 1 and 2 million", "", "English", "people", 2000000, 1000000);};
  document.querySelector("#menu_31").onclick = function () { generateTable("List of Countries and Dependencies - Area greater than 1 million Km<sup>2</sup>, Americas", "Americas", "English", "areaContinent", 0, 1000000);};
  document.querySelector("#menu_32").onclick = function () { generateTable("List of Countries and Dependencies - All countries in Asia", "Asia", "English", "areaContinent", 0 , 0);};
  document.querySelector("#menu_41").onclick = function () { generateTable("List of Countries and Dependencies - Country/Dep. Name in English", "", "English", "No", 0, 0);};
  document.querySelector("#menu_42").onclick = function () { generateTable("List of Countries and Dependencies - Country/Dep. Name in Arabic", "", "Arabic", "No", 0, 0);};
  document.querySelector("#menu_43").onclick = function () { generateTable("List of Countries and Dependencies - Country/Dep. Name in Chinese (中文)", "", "Chinese", "No", 0, 0);};
  document.querySelector("#menu_44").onclick = function () { generateTable("List of Countries and Dependencies - Country/Dep. Name in French", "", "Franch", "No", 0, 0);};
  document.querySelector("#menu_45").onclick = function () { generateTable("List of Countries and Dependencies - Country/Dep. Name in Hindi", "", "Hindi", "No", 0, 0);};
  document.querySelector("#menu_46").onclick = function () { generateTable("List of Countries and Dependencies - Country/Dep. Name in Korean", "", "Korean", "No", 0, 0);};
  document.querySelector("#menu_47").onclick = function () { generateTable("List of Countries and Dependencies - Country/Dep. Name in Japanese", "", "Japanese", "No", 0, 0);};
  document.querySelector("#menu_48").onclick = function () { generateTable("List of Countries and Dependencies - Country/Dep. Name in Russian", "", "Russian", "No", 0, 0);};
  
  
}