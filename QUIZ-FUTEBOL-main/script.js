const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual país é considerado o berço do Beach Tennis?",
        alternativas: [
            {
                texto: "BRASIL",
                correta: false,
                afirmacao: "❌ Errou! Apesar do esporte ser muito popular no Brasil, ele surgiu na Itália."
            },
            {
                texto: "ITÁLIA",
                correta: true,
                afirmacao: "✅ Acertou! O Beach Tennis nasceu na Itália no final da década de 1980."
            }
        ]
    },
    {
        enunciado: "Quantos jogadores formam uma dupla no Beach Tennis?",
        alternativas: [
            {
                texto: "2 JOGADORES",
                correta: true,
                afirmacao: "✅ Certo! Uma dupla é formada por dois jogadores, assim como no vôlei de praia."
            },
            {
                texto: "3 JOGADORES",
                correta: false,
                afirmacao: "❌ Errou! No Beach Tennis, a dupla é composta por dois jogadores."
            }
        ]
    },
    {
        enunciado: "Qual é a altura oficial da rede no Beach Tennis profissional?",
        alternativas: [
            {
                texto: "1,70 METRO",
                correta: true,
                afirmacao: "✅ Correto! A rede oficial tem 1,70m de altura em competições."
            },
            {
                texto: "2,00 METROS",
                correta: false,
                afirmacao: "❌ Errou! A altura oficial é de 1,70m."
            }
        ]
    },
    {
        enunciado: "No Beach Tennis, a bola pode quicar no chão?",
        alternativas: [
            {
                texto: "SIM",
                correta: false,
                afirmacao: "❌ Não pode! No Beach Tennis a bola deve ser devolvida antes de tocar no chão."
            },
            {
                texto: "NÃO",
                correta: true,
                afirmacao: "✅ Acertou! A bola deve ser rebatida no ar, sem quicar."
            }
        ]
    },
    {
        enunciado: "Quantos pontos são necessários para vencer um game no Beach Tennis?",
        alternativas: [
            {
                texto: "4 PONTOS",
                correta: true,
                afirmacao: "✅ Correto! A contagem é similar ao tênis: 15, 30, 40 e game."
            },
            {
                texto: "5 PONTOS",
                correta: false,
                afirmacao: "❌ Errou! O game é vencido com 4 pontos, seguindo a pontuação tradicional do tênis."
            }
        ]
    },
    {
        enunciado: "Qual material é mais usado nas raquetes de Beach Tennis?",
        alternativas: [
            {
                texto: "MADEIRA MACIÇA",
                correta: false,
                afirmacao: "❌ Não é madeira! As raquetes modernas são feitas de fibra de carbono, fibra de vidro ou kevlar."
            },
            {
                texto: "FIBRA DE CARBONO / VIDRO",
                correta: true,
                afirmacao: "✅ Acertou! A maioria das raquetes usa fibra de carbono, vidro ou kevlar."
            }
        ]
    }
];

let atual = 0;
let acertos = 0;
let historiaFinal = "";
let perguntaAtual;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    if (opcaoSelecionada.correta) {
        acertos++;
    }
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    caixaPerguntas.textContent = opcaoSelecionada.afirmacao;
    caixaAlternativas.textContent = "";
    setTimeout(() => {
        atual++;
        mostraPergunta();
    }, 2000);
}

function mostraResultado() {
    const total = perguntas.length;
    const porcentagem = Math.round((acertos / total) * 100);
    caixaPerguntas.textContent = "Resultado final do seu quiz:";
    textoResultado.textContent = `${historiaFinal}\n\nVocê acertou ${acertos} de ${total} perguntas. Isso dá ${porcentagem}% de aproveitamento!`;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
