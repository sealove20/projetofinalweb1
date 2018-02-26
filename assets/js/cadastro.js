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
   var cr = {
      "c1":{pontos:"",},
      "c2":{pontos:"",},
      "c3":{pontos:"",},
      "c4":{pontos:"",},
      "c5":{pontos:"",},
      "c6":{pontos:"",}
   };

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
            campos = campos + $(this).attr("id").slice(5);//concatena o nome do campo vazio com a string campo
            campos = campos + ", ";//adiciona um ", " depois da cada campo vazio concatenado
            todos-=1;
         } else {
            console.log($(this).attr("id") + " " + this.value);
            todos+=1;
         }
      });
      console.log(todos);
      console.log(campos);
      campos = campos.slice(0, campos.length - 2);//remove o ultimo ", " da string final
      campos = campos + "!";//adiciona uma "!" ao final da string
      if (campos == "!") {//se a string campo conter apenas "!" todos os campos foram preenchidos e o formulario pode ser enviado
         alert("Cadastro realizado com sucesso!");
         sessionStorage.nome = inputs[0].value[0].toUpperCase()+inputs[0].value.slice(1,inputs[0].value.length);//deixa a primeira letra maiuscula
         sessionStorage.sobrenome = inputs[1].value[0].toUpperCase()+inputs[1].value.slice(1,inputs[1].value.length);//deixa a primeira letra maiuscula
         sessionStorage.email = inputs[2].value;
         sessionStorage.senha = inputs[3].value;
         sessionStorage.idade = inputs[4].value;
         sessionStorage.chave = false;
         sessionStorage.votouser = JSON.stringify(cr);
         sessionStorage.desejo = [];
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

});
