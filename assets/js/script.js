// favor seguir o exemplo de
// ------------------ inicio do formulario ------------------
// ------------------ fim do formulario ------------------
// pra gente se localizar e não ficar perdido depois, to tentando colocar comentario em tudo porque depois pra lembrar o que cada coisa ta fazendo vai ser foda...
// eu só to mudando o fundo dos inputs, ele pede 3 coisa parece né? tamanho de fonte e tals, depois só adicionar eu não olhei o pdf pra ver...
// olha o sessionStorage pra tu ver as nomes que dei pra quando for fazer o login...
// tem que trocar os aside também da pagina de curso, não mexi ainda, vamos trocar por DIV mesmo?
// tem que trocar o frame pela tag video também
// as paginas de curso, vou fazer só 1 pra todos os cursos, só pra simular mesmo
// pode apagar isso aqui ou deixa ai e no final antes de enviar a gente apaga
$(document).ready(function(){

// ------------------ inicio do formulario ------------------
   var inputs = $(".cadastro");//pega todos os campos com a classe cadastro que esta nos inputs do formulario
   campos = "";//monta uma string com o nome dos campos que ainda faltam preencher para o cadastro
   todos = 0;//se ao clicar no botão ela valer 5 é pq todos os campos foram preenchidos o formulario esta pronto para o envio

   // função vermelho para mudar a cor dos inputs
   function vermelho(cara){
      $(cara).css({
         "background-color":"red",//muda o background dos inputs para a vermelho se o mesmo estiver vazio
         "color":"white",//mudar a cor da fonte dos inputs pra branco
      });
   };
   // função verde para mudar a cor dos inputs
   function verde(cara){
      $(cara).css({
         "background-color":"green",//muda o background dos inputs para a cor vermelha se o mesmo estiver vazio
         "color":"white",//mudar a cor da fonte dos inputs pra branco
      });
   };

   // ação de verificação dos campos quando clicar no botão enviar
   $(".enviar").click(function(){
      todos = 0;
      campos = "";
      inputs.each(function(){
         if (this.value=="") {
            console.log($(this).attr("id")+" vazio!");
            campos = campos + $(this).attr("id").slice(5);
            campos = campos + ", ";
            todos-=1;
         } else {
            console.log($(this).attr("id") + " " + this.value);
            todos+=1;
         }
      });
      console.log(todos);
      console.log(campos);
      campos = campos.slice(0, campos.length - 2);
      campos = campos + "!";
      if (campos == "!") {//se a string campo conter apenas "!" todos os campos foram preenchidos e o formulario pode ser enviado
         alert("Cadastro realizado com sucesso!");
         sessionStorage.nome = inputs[0].value[0].toUpperCase()+inputs[0].value.slice(1,inputs[0].value.length);
         sessionStorage.sobrenome = inputs[1].value[0].toUpperCase()+inputs[1].value.slice(1,inputs[1].value.length);
         sessionStorage.email = inputs[2].value;
         sessionStorage.senha = inputs[3].value;
         sessionStorage.idade = inputs[4].value;
         sessionStorage.chave = false;
      } else {
         alert("Por favor preencha corretamente os campos:\n" + campos);
      }
   });

   // muda a cor dos campos durante a digitação, foco e blur chamando as funções vermelho e verde
   inputs.each(function(){
      $(this).keypress(function(){//ativa quando uma tecla de caractere é pressionada
         if (this.value.length<0) {
            vermelho(this);
         } else {
            verde(this);
         }
      });
      $(this).keydown(function(){//ativa quando outra teclas são pressionadas como backspace e tab, a ideia do uso é para quando o campo for apagado
         if (this.value.length<=1) {
            vermelho($(this));
         } else {
            verde($(this));
         }
      });
      $(this).focus(function(){//ativa quando o campo fica em foco
         if (this.value.length<=0) {
            vermelho($(this));
         } else {
            verde($(this));
         }
      });
      $(this).blur(function(){//ativa quando o campo perde o foco
         if (this.value.length<=0) {
            vermelho($(this));
         } else {
            verde($(this));
         }
      });
   });
// ------------------ fim do formulario ------------------

// ------------------ inicio do alterar ------------------
   const meses = {//cria um objeto com o numero dos meses como chave e o nome dos meses por extenso como valor
      "01":{mes:"Janeiro",},
      "02":{mes:"Fevereiro",},
      "03":{mes:"Março",},
      "04":{mes:"Abril",},
      "05":{mes:"Maio",},
      "06":{mes:"Junho",},
      "07":{mes:"Julho",},
      "08":{mes:"Agosto",},
      "09":{mes:"Setembro",},
      "10":{mes:"Outubro",},
      "11":{mes:"Novembro",},
      "12":{mes:"Dezembro",},
   }

   var data = "";//variavel para armazenar o dia, mes e ano depois de recuperado do sessionStorage
   var camponovo = $(".nvdados");//pega todos os campos com a classe nvdados que esta nos inputs do formulario de alteração
   todosnovos = 0;//se ao clicar no botão ela valer 2 é pq todos os campos foram preenchidos o formulario esta pronto para o envio

   $("#nomeCompleto").text(sessionStorage.nome + " " + sessionStorage.sobrenome);//resgata do sessionStorage o nome e sobrenome, concatena e joga em um spam para visualização
   data = sessionStorage.idade.split("-");//resgata a data de nascimento do sessionStorage e faz um split gerando um vetor com dia, mes e ano
   $("#dataNascimento").text(data[2] + " de " + (meses[data[1]].mes) + " de " + data[0]);//monta uma string formatada com a data de nascimento e para pegar o mes por extenso usa a string do mes como chave no objeto MESES

   camponovo[0].value = sessionStorage.email;//atribui ao input de email o email armazenado no sessionStorage
   camponovo[1].value = sessionStorage.senha;//atribui ao input de senha a senha armazenada no sessionStorage

   $(".alterar").click(function(){
      todosnovos = 0
      camponovo.each(function(){
         if (this.value == "") {
            todosnovos -=1;
         } else {
            todosnovos +=1;
         }
      });

      // isso aqui tudo só altera os dados do sessionStorage somente se os dois campos forem preenchidos e talvez isso não seja ideal POR FAVOR NÃO APAGAR ESSE TRECHO DE CÓDIGO
      // if (todosnovos == 2) {
      //    if (camponovo[1].value == sessionStorage.senha && camponovo[0].value == sessionStorage.email) {
      //       //AMBOS igual ao do banco informe outra
      //       alert("Informe um E-MAIL e uma SENHA diferente!");
      //    }else if (camponovo[1].value == sessionStorage.senha) {
      //       //senha igual ao do banco informe outra
      //       alert("Informe uma SENHA diferente!");
      //    } else if (camponovo[0].value == sessionStorage.email) {
      //       //email igual ao do banco informe outro
      //       alert("Informe um E-MAIL diferente!");
      //    }else {
      //       alert("Dados atualizados com sucesso!");
      //    }
      // }else if (todosnovos == -2) {
      //    alert("Por favor preencha os campos que deseja alterar!");
      // }else if (todosnovos == 0) {
      //    if (camponovo[0].value == "") {
      //       alert("Por favor preencha o campo de E-MAIL corretamente!");
      //    }else if (camponovo[1].value == "") {
      //       alert("Por favor preencha o campo de SENHA corretamente!");
      //    }
      // }

      // isso aqui altera os dados do sessionStorage dos dois campos mas não verifica se são iguais ou não aos já armazenados
      if (todosnovos == 2) {
         alert("Dados atualizados com sucesso!");
         sessionStorage.email = camponovo[0].value;//manda pro sessionStorage os novos dados de email
         sessionStorage.senha = camponovo[1].value;//manda pro sessionStorage os novos dados de senha
      }else if (todosnovos == -2) {
         alert("Por favor preencha os campos de E-MAIL e SENHA corretamente!");
      }else if (todosnovos == 0) {
         if (camponovo[0].value == "") {
            alert("Por favor preencha o campo de E-MAIL corretamente!");
         }else if (camponovo[1].value == "") {
            alert("Por favor preencha o campo de SENHA corretamente!");
         }
      }
      console.log("todos novos: " + todosnovos);
   });

   camponovo.each(function(){
      $(this).keypress(function(){//ativa quando uma tecla de caractere é pressionada
         if (this.value.length<0) {
            vermelho(this);
         } else {
            verde(this);
         }
      });
      $(this).keydown(function(){//ativa quando outra teclas são pressionadas como backspace e tab, a ideia do uso é para quando o campo for apagado
         if (this.value.length<=1) {
            vermelho($(this));
         } else {
            verde($(this));
         }
      });
      $(this).focus(function(){//ativa quando o campo fica em foco
         if (this.value.length<=0) {
            vermelho($(this));
         } else {
            verde($(this));
         }
      });
      $(this).blur(function(){//ativa quando o campo perde o foco
         if (this.value.length<=0) {
            vermelho(this);
         } else {
            verde($(this));
         }
      });
   });
// ------------------ fim do alterar ------------------



});

// função que pega os dados dos campos do modal e guarda no sessionStorage
$("#btnEnviar").click(function(){
   //verifica se o campo do email esta vazio
   if ($("#email").val() === '') {
      alert("Campo email está vazio!");
   // verifica se o email é o mesmo cadastrado
   } else if ($("#email").val() !== sessionStorage.email){
      alert("Email digitado está errado, verifique se está tudo digitado corretamente.");
   }
   //verifica se o campo do senha esta vazio
   if ($("#senha").val() === '') {
      alert("Campo senha está vazio!");
   // verifica se o senha é o mesmo cadastrado
   } else if ($("#senha").val() !== sessionStorage.senha){
      alert("Senha digitado está errado, verifique se está tudo digitado corretamente.");
   }
   // efetua login caso esteja tudo certo
   if ($("#email").val() === sessionStorage.email && $("#senha").val() === sessionStorage.senha) {
      alert("LOGOU");
      sessionStorage.chave = true;
      location.reload();
   }
});
// verifica se é uma sessão logada ou não
// da pra colocar os bang do card aqui
if(sessionStorage.chave === "true"){
   $(".modulo_login").hide();
   $("#modulo_logado").show();
} else {
   $(".modulo_login").show();
   $("#modulo_logado").hide();
}

// função pra mostrar e ocultar os links do botão dropdown
$(".dropbtn").click(function() {
   document.getElementById("myDropdown").classList.toggle("show");
});

// funcionalidade pra personalizar o nome que é mostrado quando o cara loga
$(".dropbtn").html("bem vindo, " + sessionStorage.nome);

// função que altera o valor da chave
// tem 1 bug, quando você desloga na tela de alterar, ele continua naquela tela. Tem que ver um jeito de quando ele sair naquela tela, fazer ir pro index.
$("#sair").click(function() {
   sessionStorage.chave = false;
   location.reload();
   console.log("click");
});
