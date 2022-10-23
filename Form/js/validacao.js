 

function logar() {

	var login = document.getElementById('login').value;

		var senha = document.getElementById('senha').value;

	if(login == "Stifler" && senha == "209458"){
			alert('Login Efetuado Com Sucesso!')
			location.href = 'Form.html'

	} else{
		alert('ID ou senha incorretos!')

	}
	
}