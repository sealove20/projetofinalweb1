$(document).ready(function(){
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
      // todosnovos2.js estava aqui
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
   // ------------------lista de desejos - pegar do sessionStorage-------------------
   var pegaCursos = sessionStorage.desejo;
   pegaCursos = pegaCursos.split(',');

   for(var i = 0; i < pegaCursos.length; i++){
      if (pegaCursos[i] === ''){
      } else {
         $('#EstiloDesejos').append("<li><span><i class='fas fa-trash-alt'></i></span>" + pegaCursos[i] + "</li>");
      }
   }

   $('#EstiloDesejos').on("click", "span",function() {
      for(var i = 0; i < pegaCursos.length; i++){
         if(pegaCursos[i] === $(this).parent().text()) {
            $(this).parent().remove();
            pegaCursos.splice(i, 1);
            sessionStorage.desejo = pegaCursos;
         }
      }
   });
      // ------------------FIM lista de desejos - pegar do sessionStorage-------------------
});
// ------------------ fim do alterar ------------------
