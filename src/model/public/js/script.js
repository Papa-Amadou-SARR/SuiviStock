
function searchClient(inputCin){
    alert('hi');
    let cin = inputCin.value;
    $("#nom").value = '';
    $("#prenom").value = '';
    $("#adresse").value = '';
    $("#tel").value = '';
    $.ajax({
		type : 'GET',
		dataType: 'json',
		url: 'http://localhost/bank_giage/models/getClients.php',
		success: function(clients){
				clients.forEach(c => {
                    if (c.cin === cin){
                        $("#nom").value = c.nomClient;
                        $("#prenom").value = c.prenomClient;
                        $("#adresse").value = c.adresseClient;
                        $("#tel").value = c.telephoneClient;
                    }
                });
		},
		error: function() {
			console.log("Erreur de chargement des clients");
		}
    });
}

