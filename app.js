console.log ('Jogando Jokenpô!');
 
let placarJogador = 0;
let placarComputador = 0;
 
//Cache do DOM (Document Object Model)
//Ligar os elementos HTML em variáveis Javascript
const placarJogadorSpan = document.querySelector('#placar-jogador');
const placarComputadorSpan = document.querySelector ('#placar-computador');
const resultadoP = document.querySelector ('.resultado > p');
const pedraButton = document.querySelector ('#pedra');
const papelButton = document.querySelector ('#papel');
const tesouraButton = document.querySelector('#tesoura');

//pegar a jogada do computador//

//Função principal da aplicação (application)
function app() {
    //Adicionando escutas de evento click
    pedraButton.addEventListener('click',function(){
        console.log('Clicou na pedra!');
    });
    papelButton.addEventListener('click',function(){
        console.log('Clicou no papel');
    });
    tesouraButton.addEventListener('click',function(){
        console.log('Clicou na tesoura')
    });
 }
  
  
 // Chamada da função
 app();
 
//Pegar a jogada do computador
function getEscolhaComputador() {
    const escolhasDoComputador  = ['pedra','papel','tesoura'];
    //Gerando um número aleatório entre 0 e 2   
    const numeroAleatorio = Math.floor(Math.random() * 3);
    return escolhasDoComputador[numeroAleatorio];
 }
//Função principal da aplicação (application)
function app() {
    //Adicionando escutas de evento click
    pedraButton.addEventListener('click',function(){
        console.log('Clicou na Pedra!');
        jogo('Pedra');
    });
    papelButton.addEventListener('click',function(){
        console.log('Clicou no Papel');
        jogo('Papel');
    });
    tesouraButton.addEventListener('click',function(){
        console.log('Clicou na Tesoura')
        jogo('Tesoura');
    });
 }
 
app.js Função jogo()
//Comparando as jogadas
function jogo(escolhaDoJogador) {
   const escolhaDoComputador = getEscolhaComputador();
   console.log(`Escolha do Jogador: ${escolhaDoJogador}`);
   console.log(`Escolha do Computador: ${escolhaDoComputador}`);
   //console.log(`Escolhas: ${escolhaDoComputador+escolhaDoJogador}`);
   switch(escolhaDoComputador+escolhaDoJogador){
       case 'pedraTesoura':
       case 'papelPedra':
       case 'tesouraPapel':
           console.log('Perdeu playboy!');
           perdeu(escolhaDoComputador,escolhaDoJogador);
           break;
       case 'tesouraPedra':
       case 'pedraPapel':
       case 'papelTesoura':
           console.log('Venceu campeão!');
           venceu(escolhaDoComputador,escolhaDoJogador);
           break;
       case 'tesouraTesoura':
       case 'pedraPedra':
       case 'papelPapel':
           console.log('Empate');
           empatou(escolhaDoComputador,escolhaDoJogador);
           break;
   }

//Venceu, perdeu e empatou
function venceu(escolhaDoComputador,escolhaDoJogador) {
   //Incrementar o placar
   placarJogador++;
   placarJogadorSpan.innerText = placarJogador;
   resultadoP.innerText = `${escolhaDoJogador} vence ${escolhaDoComputador}. Você venceu!`;
}
 
function perdeu(escolhaDoComputador,escolhaDoJogador) {
   //Incrementar o placar
   placarComputador++;
   placarComputadorSpan.innerText = placarComputador;
   resultadoP.innerText = `${escolhaDoJogador} perde para ${escolhaDoComputador}. Você perdeu!`;
}
 
function empatou(escolhaDoComputador,escolhaDoJogador) {
   resultadoP.innerText = `${escolhaDoJogador} empata com ${escolhaDoComputador}. Empatou!`;
}

  