const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você faz uso da Inteligência Artificial?",
        alternativas: ["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado: "Você acha que as pessoas estão se tornando dependentes da Inteligência Artificial?",
        alternativas: ["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: ["Alternativa 1","Alternativa 2"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){

}
mostraPergunta();