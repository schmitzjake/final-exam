males = [];
females = [];
allMales = 0;
allFemales = 0;

$( document ).ready(function() {
    loadEquation();
});


function loadEquation(source) {
  console.log(source);

  $.ajax({
    type: "GET",
    url: "people.json",
    dataType: "json",
    success: parseEquation
  });
}

function parseEquation(data) {
  console.log(data);
  var htmlBuilder = "";

  for (var i = 0; i <data.length; i++){

    if (data[i].gender == "male") {
      (console.log("male"))
      males.push(data[i].gender)
    }

    if (data[i].gender == "female") {
      (console.log("female"))
      females.push(data[i].gender)
    }

  }


      allMales = males.length;
      allFemales = females.length;

      console.log(allMales);
      console.log(allFemales)


  htmlBuilder += '<h6 class="text-center">There are '+allMales+' total males and '+allFemales+' total females in the data</h6>'





  $("#math-feed").html(htmlBuilder);
  console.log(html);
}
