function searchForm(){
    // code here
    listbooks = document.getElementById("listbooks");
	toList();
	$("#buttonSearch").click(function(){
		var valor = document.getElementById("textSearch").value;
		if (valor==null || valor.length == 0) {
			toList();
		}else{
			listSearch(valor);
		}	
	});
}

function menuSaved(){
	$.ajax({
		url: 'https://bitbucket.org/unt_taller_es/finderchallenge/raw/474e4f97cac22fe3971e18786287498c6d152066/src/books-schema.json',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(data) {
		ulsaved = document.getElementById("saved");
		ulsaved.innerHTML = "";
		$.each(data.entities, function(key, value) {
			if (key=="saved") {
				for (var i = 0; i < value.length; i++) {
					// console.log(value[i]);
					$("#saved").append("<li class='list'>\n<a href='"+value[i].url+"' class='menu'>"+value[i].label+"</a>\n<div class='menu-options'>\n<a href='#'>Editar</a>|<a href='#' id='deleteSearch'>Eliminar</a>\n</div>\n</li>\n");
				};
				$(".list").mouseenter(function (){
					$(this).addClass('active');
				});
				$(".list").mouseleave(function (){
					$(this).removeClass('active');
				});
			};
		});
	});
}

function toList(){
	listbooks.innerHTML = "";
	$.ajax({
		url: 'https://bitbucket.org/unt_taller_es/finderchallenge/raw/474e4f97cac22fe3971e18786287498c6d152066/src/books-schema.json',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(data) {
		// console.log(data);
		$.each(data, function(key, value) {

		   for (var i = value.length - 1; i >= 0; i--) {
				$("#listbooks").append("<div class='pure-u-1-3' id='"+value[i].id+"'><div class='imgbook'><img src='"+
					value[i].image+"'></div><h4>"+value[i].title+"</h4><p>"+value[i].teaser+"</p></div>");
		   };
		  // console.log(value);
		});
	});
}

function listSearch(titulo){
	listbooks.innerHTML = "";
	$.ajax({
		url: 'https://bitbucket.org/unt_taller_es/finderchallenge/raw/474e4f97cac22fe3971e18786287498c6d152066/src/books-schema.json',
		type: 'GET',
		dataType: 'json'
	})
	.done(function(data) {
		var cont=0;
		$.each(data, function(key, value) {
		   for (var i = value.length - 1; i >= 0; i--) {
			    if (titulo==value[i].title) {
				    $("#listbooks").append("<div class='pure-u-1-3' id='"+value[i].id+"'><div class='imgbook'><img src='"+
					value[i].image+"'></div><h4>"+value[i].title+"</h4><p>"+value[i].teaser+"</p></div>");
				    cont++;
				}
		   };
		});
		if(cont==0){toList();}//no se encontraron
	});
}