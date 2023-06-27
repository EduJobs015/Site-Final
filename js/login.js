
//professora isso que estou fazendo entra no criterio (e)? quero fazer a pessoa preencher o formulario e quando ela clicar  submit aparecer um alerta pedindo que ela confirme os dados se sim ela vai ser direcionada para a pagina inicial se nao ela vai reescrever o formulario 
function exibirDados() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var dataNascimento = document.getElementById("nascimento").value;
  var telefoneResidencial = document.getElementById("telefone_residencial").value;
  var celular = document.getElementById("celular").value;
  var genero = document.querySelector('input[name="genero"]:checked').value;

  // perguntar sobre o genero e se conta o alerta
  var mensagem = "Confirme as informações:\n\n";
  mensagem += "Nome: " + nome + "\n";
  mensagem += "E-mail: " + email + "\n";
  mensagem += "Data de Nascimento: " + dataNascimento + "\n";
  mensagem += "Telefone Residencial: " + telefoneResidencial + "\n";
  mensagem += "Celular: " + celular + "\n";
  mensagem += "Gênero: " + genero + "\n";

  if (confirm(mensagem)) {
    document.getElementById("formulario").submit();
    window.location.href = "../index.html";
  } else {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nascimento").value = "";
    document.getElementById("telefone_residencial").value = "";
    document.getElementById("celular").value = "";
    document.querySelector('input[name="genero"]:checked').checked = false;
  }
}



       