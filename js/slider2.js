$( document ).ready(function() {
    loadPics2();
});


function loadPics2(source) {
  console.log(source);

  $.ajax({
    type: "GET",
    url: "photos.json",
    dataType: "json",
    success: parsePics2
  });
}

function parsePics2(data) {
  var htmlBuilder = "";

    var i = 1; {
    var image = data[i].imagepath;

    htmlBuilder += '<img class="d-block w-100" src="'+data[i].imagepath+'" alt="First slide">'
  }



  $("#photo-feed2").html(htmlBuilder);
}
