 
function exibirDados() {
  var nome = document.getElementById("nome").value;
  localStorage.setItem("nome", nome);
  var email = document.getElementById("email").value;
  var dataNascimento = document.getElementById("nascimento").value;
  var telefoneResidencial = document.getElementById("telefone_residencial").value;
  var celular = document.getElementById("celular").value;
  var genero = document.querySelector('input[name="genero"]:checked').value;


  var mensagem = "Confirme as informações:\n\n";
  mensagem += "Nome: " + nome + "\n";
  mensagem += "E-mail: " + email + "\n";
  mensagem += "Data de Nascimento: " + dataNascimento + "\n";
  mensagem += "Telefone Residencial: " + telefoneResidencial + "\n";
  mensagem += "Celular: " + celular + "\n";
  mensagem += "Gênero: " + genero + "\n";

  if (confirm(mensagem)) {
    document.getElementById("formulario").submit();
    window.location.href = "index.html";
  } else {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nascimento").value = "";
    document.getElementById("telefone_residencial").value = "";
    document.getElementById("celular").value = "";
    document.querySelector('input[name="genero"]:checked').checked = false;
  }
}       
