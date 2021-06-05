$(document).ready(function(){

})

$("#btnEntrar").on("click", function(){

	var usuario = $("#usuario").val();
	var senha = $("#senha").val();

	if (usuario == "" || senha == "") {
		alert("Por favor, informar usuário e senha!");
	} else {
		$.ajax({
	//		url: "https://api-ticketmanagement-backend.herokuapp.com/api/usuario",

			url: "http://localhost:8080/api/usuario?usuario="+usuario+"&senha="+senha+"",
			crossDomain: true,
			type: "GET"
		})
			.done(function(retorno){
			window.location.replace("http://localhost:9090/TicketManagement/aberturachamado.html");
		})
			.fail(function() {
	        alert("Erro ao validar credenciais! Por favor, contate o suporte");
	    });
	}
})