$( document ).ready(function() {
    loadPics3();
});


function loadPics3(source) {
  console.log(source);

  $.ajax({
    type: "GET",
    url: "photos.json",
    dataType: "json",
    success: parsePics3
  });
}

function parsePics3(data) {
  var htmlBuilder = "";

    var i = 2; {
    var image = data[i].imagepath;

    htmlBuilder += '<img class="d-block w-100" src="'+data[i].imagepath+'" alt="First slide">'
  }



  $("#photo-feed3").html(htmlBuilder);
}
