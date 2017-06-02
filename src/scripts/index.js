var input = document.getElementById("textSearch");
var awesomplete = new Awesomplete(input, {
  minChars: 3,
  autoFirst: true,
  maxItems: 7,
});

$("input").on("keyup", function(){
  $.ajax({
    url: 'https://bitbucket.org/unt_taller_es/finderchallenge/raw/474e4f97cac22fe3971e18786287498c6d152066/src/books-schema.json',
    type: 'GET',
    dataType: 'json'
  })
  .done(function(data) {
    var list = [];
    $.each(data, function(key, value) {
       for (var i = value.length - 1; i >= 0; i--) {
		    list.push(value[i].title);
       };
    });
    awesomplete.list = list;
  });
});

$(document).on('click', '#deleteSearch', function() {
    $(this).parent().parent().remove();
});