const urlAberturaChamadoDev = "http://localhost:9090/TicketManagement/AberturaChamado.html"
const urlAberturaChamadoProd = "https://api-ticketmanagement.herokuapp.com/AbertutaChamado.html"

const urlApiUsuarioDev = "http://localhost:8080/api/usuario"
const urlApiUsuarioProd = "https://api-ticketmanagement-backend.herokuapp.com/api/usuario"


$("#btnEntrar").on("click", function(){

	var usuario = $("#usuario").val();
	var senha = $("#senha").val();

	if (usuario == "" || senha == "") {
		alert("Por favor, informar usuário e senha!");
	} else {
		$.ajax({
			url: urlApiUsuarioProd+"?usuario="+usuario+"&senha="+senha+"",
			crossDomain: true,
			type: "GET"
		})
			.done(function(retorno){
			window.location.replace(urlAberturaChamadoProd);
		})
			.fail(function() {
	        alert("Erro ao validar credenciais! Por favor, contate o suporte");
	    });
	}
})