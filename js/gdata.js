$( document ).ready(function() {
    loadData();
});


function loadData(source) {
  console.log(source);

  $.ajax({
    type: "GET",
    url: "people.json",
    dataType: "json",
    success: parseData
  });
}

function parseData(data) {
  console.log(data);
  var htmlBuilder = "";

  for (var i = 0; i <data.length; i++){
    var name = data[i].name;
    var company = data[i].company;
    var email = data[i].email;
    var phone = data[i].phone;
    var address = data[i].address;

    htmlBuilder += '<div class="col-12"><h4>'+name+'</h4></div>'
    htmlBuilder += '<div class="col-12"><ul><li>'+company+'</li>'
    htmlBuilder += '<li>'+email+'</li>'
    htmlBuilder += '<li>'+phone+'</li>'
    htmlBuilder += '<li>'+address+'</li></ul></div>'
  }



  $("#data-feed").html(htmlBuilder);
  console.log(html);
}
