$( document ).ready(function() {
    loadPics1();
});


function loadPics1(source) {
  console.log(source);

  $.ajax({
    type: "GET",
    url: "photos.json",
    dataType: "json",
    success: parsePics1
  });
}

function parsePics1(data) {
  var htmlBuilder = "";

    var i = 0; {
    var image = data[i].imagepath;

    htmlBuilder += '<img class="d-block w-100" src="'+data[i].imagepath+'" alt="First slide">'
  }



  $("#photo-feed1").html(htmlBuilder);
}
