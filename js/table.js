$( document ).ready(function() {
    loadTable();
});


function loadTable(source) {
  console.log(source);

  $.ajax({
    type: "GET",
    url: "people.json",
    dataType: "json",
    success: parseTable
  });
}

function parseTable(data) {
  console.log(data);
  var htmlBuilder = "";

  for (var i = 0; i <data.length; i++){
    var name = data[i].name;
    var company = data[i].company;
    var email = data[i].email;
    var gender = data[i].gender;
    var sport = data[i].favoriteSport;
    var photo = data[i].picture;

    htmlBuilder += '<table class="table"><tbody><tr><th>'+name+'</th>'
    htmlBuilder += '<td>'+company+'</td>'
    htmlBuilder += '<td>'+email+'</td>'
    htmlBuilder += '<td>'+gender+'</td>'
    htmlBuilder += '<td>'+sport+'</td>'
    htmlBuilder += '<td><img src="'+photo+'"></td>'
  }



  $("#table-feed").html(htmlBuilder);
  console.log(html);
}
