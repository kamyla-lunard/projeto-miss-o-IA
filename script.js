@@ -0,0 +1,117 @@
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  const perguntas = [
    {
        enunciado: "Assim que saiu da escola, voce se depara com uma nova tecnologia: um chat capaz de responder duvidas, criar imagens e gerar audios. Qual e seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso e assustador!",
                afirmacao: "Voce ficou preocupado com o avanco daquela tecnologia e decidiu observar com cuidado o que ela poderia fazer."
            },
            {
                texto: "Isso e maravilhoso!",
                afirmacao: "Voce ficou curioso com as possibilidades da tecnologia e decidiu descobrir como ela funcionava."
            }
        ]
    },

    {
        enunciado: "No dia seguinte, sua professora de tecnologia explica que aquela ferramenta utiliza Inteligencia Artificial. Ela pede que voce faa um trabalho sobre tecnologia. O que você faz?",
        alternativas: [
            {
                texto: "Uso a IA para pesquisar e entender o assunto.",
                afirmacao: "Voce utilizou a Inteligencia Artificial para encontrar informacoes, mas tambem pesquisou outras fontes para entender melhor o assunto."
            },
            {
                texto: "Faco o trabalho sozinho com minhas pesquisas.",
                afirmacao: "Voce decidiu pesquisar por conta propria, utilizando seus conhecimentos e informacees encontradas na internet."
            }
        ]
    },

    {
        enunciado: "Depois do trabalho, a professora propoe um debate sobre como a IA pode mudar o futuro. Qual e sua opiniao?",
        alternativas: [
            {
                texto: "A IA pode substituir alguns trabalhadores.",
                afirmacao: "Durante o debate, voce explicou que algumas profissoes podem mudar com o avanco da Inteligencia Artificial e que sera importante aprender novas habilidades."
            },
            {
                texto: "A IA pode criar novas oportunidades.",
                afirmacao: "Voce explicou que a Inteligencia Artificial tambem pode criar novas oportunidades e ajudar as pessoas em diferentes profissoes."
            }
        ]
    },

    {
        enunciado: "No final da aula, a professora pede que voce crie uma imagem representando sua visao sobre a Inteligencia Artificial. O que voce faz?",
        alternativas: 
            {
                texto: "Crio a imagem manualmente.",
                afirmacao: "Voce decidiu criar a imagem sozinho, usando sua criatividade para representar como imaginava o futuro."
            },
            {
                texto: "Uso um gerador de imagens com IA.",
                afirmacao: "Voce utilizou uma ferramenta de IA para transformar suas ideias em uma imagem e depois analisou o resultado."
            }
        ]
    },

    {
        enunciado: "Alguns dias depois, voce recebe um trabalho de biologia em grupo. Um colega utiliza IA para fazer praticamente todo o trabalho. O que voce faz?",
        alternativas: 
            {
                texto: "Reviso o trabalho e contribuo com minhas proprias ideias.",
                afirmacao: "Voce explicou ao grupo que a IA poderia ajudar, mas que era importante revisar as informacoes e acrescentar as ideias de cada integrante."
            },
            {
                texto: "Deixo a IA fazer o trabalho inteiro.",
                afirmacao: "O grupo decidiu entregar o texto produzido pela IA, mas percebeu depois que algumas informacoes precisavam ser verificadas."
            }
        ]
    }
];

}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();