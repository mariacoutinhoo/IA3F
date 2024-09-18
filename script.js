const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você faz uso da Inteligência Artificial?",
        alternativas: ["Sim","Não"]
    },
    {
        enunciado: "Você acha que as pessoas estão se tornando dependentes da Inteligência Artificial?",
        alternativas: ["Sim","Não"]
    },
    {
        enunciado: "Os robôs podem operar sem supervisão humana graças à Inteligência Artificial?",
        alternativas: ["Sim","Não"]
    },
    {
        enunciado: "A Inteligência Artificial é capaz de compreender as emoções humanas?",
        alternativas: ["Sim","Não"]
    },
    {
        enunciado: "A Inteligência Artificial pode reconhecer rostos?",
        alternativas: ["Sim","Não"]
    },
    {
        enunciado: "A Inteligência Artificial pode ouvir comandos de voz?",
        alternativas: ["Sim","Não"]
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
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();