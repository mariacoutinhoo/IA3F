const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você faz uso da Inteligência Artificial?",
        alternativas: [
            {texto: "Sim",
            afirmação: "Faço o uso da Inteligência Artificial."},
            
            {texto: "Não",
            afirmação: "Naço o uso da Inteligência Artificial."}]
    },
    {
        enunciado: "Você acha que as pessoas estão se tornando dependentes da Inteligência Artificial?",
        alternativas: [
            {texto: "Sim",
            afirmação: "Acredito que as pessoas estão se tornando dependentes da Inteligência Artificial."},
                
            {texto: "Não",
            afirmação: "Não acredito que as pessoas estão se tornando dependentes da Inteligência Artificial."}]
    },
    {
        enunciado: "Os robôs podem operar sem supervisão humana graças à Inteligência Artificial?",
        alternativas: [
            {texto: "Sim",
            afirmação: "Acredito que os robôs podem operar sem supervisão humana graças à Inteligência Artificial."},

            {texto: "Não",
            afirmação: "Os robôs não podem operar sem supervisão humana graças à Inteligência Artificial."}]
    },
    {
        enunciado: "A Inteligência Artificial é capaz de compreender as emoções humanas?",
        alternativas: [
            {texto: "Sim",
            afirmação: "Acredito que a Inteligência Artificial é capaz de compreender as emoções humanas."},
            
            {texto: "Não",
            afirmação: "A Inteligência Artificial não é capaz de compreender as emoções humanas."},]
    },
    {
        enunciado: "A Inteligência Artificial pode reconhecer rostos?",
        alternativas: [
            {texto: "Sim",
            afirmação: "A Inteligência Artificial pode reconhecer rostos."},
            
            {texto: "Não",
            afirmação: "A Inteligência Artificial não pode reconhecer rostos."},]
    },
    {
        enunciado: "A Inteligência Artificial pode ouvir comandos de voz?",
        alternativas: [
            {texto: "Sim",
            afirmação: "Afirmação da alternativa"},
            
            {texto: "Não",
            afirmação: "Afirmação da alternativa"},]
    }
]

let posicao = 0;
let perguntaAtual;
lethistoriaFinal = "";

function mostraPergunta(){
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal = afirmacoes;
    posicao++;
    mostraPergunta();

}
function mostraResultado(){
    caixaPerguntas.textContent = "Atualmente...";
    textoresulttado.textContent = historiaFinal;
    caixaAlternativas

}

mostraPergunta();
