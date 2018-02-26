$(document).ready(function(){
// ------------------ inicio do login ------------------
// função que pega os dados dos campos do modal e guarda no sessionStorage
   $("#btnEnviar").click(function(){
      //verifica se o campo do email esta vazio
      if ($("#email").val() === '') {
         alert("Campo email está vazio!");
      // verifica se o email é o mesmo cadastrado
      } else if ($("#email").val() !== sessionStorage.email){
         alert("Email digitado está errado, verifique se está tudo digitado corretamente.");
      } else if ($("#senha").val() === '') {//verifica se o campo do senha esta vazio
         alert("Campo senha está vazio!");
      // verifica se o senha é o mesmo cadastrado
      } else if ($("#senha").val() !== sessionStorage.senha){
         alert("Senha digitado está errado, verifique se está tudo digitado corretamente.");
      }
      // efetua login caso esteja tudo certo
      if ($("#email").val() === sessionStorage.email && $("#senha").val() === sessionStorage.senha) {
         alert("LOGOU");
         sessionStorage.chave = true;
         // location.reload();
         window.location.href="./index.html";
         // leva pra pagina inicial depois de logar
      }
   });
   // verifica se é uma sessão logada ou não
   if(sessionStorage.chave === "true"){
      $(".modulo_login").hide();
      $("#modulo_logado").show();

      $("#curso_deslogado").hide();
      $("#curso_logado").show();
   } else {
      $(".modulo_login").show();
      $("#modulo_logado").hide();

      $("#curso_deslogado").show();
      $("#curso_logado").hide();
   }

   // função pra mostrar e ocultar os links do botão dropdown
   $(".dropbtn").click(function() {
      document.getElementById("myDropdown").classList.toggle("show");
   });

   // funcionalidade pra personalizar o nome que é mostrado quando o cara loga
   $(".dropbtn").html("Bem vindo, " + sessionStorage.nome);

   // função que altera o valor da chave
   $("#sair").click(function() {
      sessionStorage.chave = false;
      console.log("click");
   });
});
