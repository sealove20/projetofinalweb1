// ------------------ inicio da votação ------------------
$(document).ready(function(){

   var lista_cursos = ["c1","c2","c3","c4","c5","c6"];

   var curs = $(".votacao_c1");// pega a DIV que contem as estrelinhas
   curs.each(function(){// roda por todas elas
      // cr = JSON.parse(sessionStorage.votouser);
      recupera($(this).children(), $(this).attr('id'));//chama a função que recupera passando os filhos da estrela e o ID pra identificar qual o curso correspondente
      // console.log($(this).children());
      // console.log($(this).attr('id'));
      // console.log(pegou["c1"].pontos);
      // console.log(pegou[$(this).attr('id')].pontos);

      $(this).children().click(function(event) {// faz o click nos filhos delas, a tag A (ancora)
         console.log($(this).attr('class'));// qual estrela foi clicada
         console.log($(this).parent().attr('id'));// id do curso
         console.log($(this).parent());// qual DIV de qual curso foi clicada
         console.log($(this).parent().children());// lista de todas tag A dentro da DIV
         grava_cr($(this).parent().attr('id'),$(this).attr('class'));//chama a função que insere no objeto CR, passando o ID do curso e a quantidade de estrela clicadas
         mudacor($(this).parent().children(), $(this).attr('class'));// Chama a função que mudar a cor passando a lista de A e qual das 5 foram clicadas
      });
   });

   function mudacor(ele,ate){
      for (var i = 0; i < parseInt(ate); i++) {
         ele[i].style.color="#FFE000";// pinta de amarelo
      }
      for (var j = parseInt(ate); j < 5; j++) {
         ele[j].style.color="#cfcfcf";// pinta o resto de cinza
      }
   }

   function grava_cr(id,val){
      cr[id].pontos=val;
      sessionStorage.votouser = JSON.stringify(cr);
      console.log(cr);
   }

   function recupera(ele,id){
      cr = JSON.parse(sessionStorage.votouser);
      for (var i = 0; i < parseInt(cr[id].pontos); i++) {
         ele[i].style.color="#FFE000";// pinta de amarelo
      }
   }


// ------------------ fim da votação ------------------

// ------------------lista de desejos - adicionar no sessionStorage-------------------
   var listCur = [];//lista com os nomes dos cursos que o usuario marcou como desejado
   listCur = sessionStorage.desejo;
   listCur = listCur.split(',');

   $('.btn').click(function() {
      var flag = true;
      if(listCur.length === 0){ //compara se a lista esta vazia
         listCur.push($(this).attr('data-t'));//se estiver vazia, adiciona o valor do atributo de data-t
      } else {
         for(var i = 0; i < listCur.length; i++){ //laço percorrendo toda a lista
            if(listCur[i] === $(this).attr('data-t')) { //verifica se o valor contido na posição da lista é igual ao do armazenado em data-t
               flag = false;
            }
         }
         if(flag === true) { //Atribui o valor de data-t para a lista, caso a condição anterior for falsa
            listCur.push($(this).attr('data-t'));//adiciona o valor do data-t para a lista
         }
      }
      sessionStorage.desejo = listCur;
   });
   // ------------------FIM lista de desejos - adicionar no sessionStorage-------------------



});
