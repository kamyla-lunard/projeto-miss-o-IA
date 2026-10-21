
const historia = {
  inicio: {
    capitulo: "Capítulo 1 · O começo de um sonho",
    fala: "Oi, linda! 💕 Meu nome é Kamyla e acabei de abrir minha loja de bijuterias. Quero realizar meu sonho de ser uma grande empreendedora! Mas preciso da sua ajuda...",
    pergunta: "O que Kamyla deve fazer primeiro?",
    opcoes: [
      ["🌸 Divulgar a loja nas redes sociais", "redes"],
      ["💎 Criar uma coleção de bijuterias", "colecao"],
      ["🛍️ Fazer uma promoção especial", "promocao"]
    ]
  },

  redes: {
    capitulo: "Capítulo 2 · A loja fica famosa",
    fala: "Kamyla publicou fotos de seus brincos e colares na internet! ✨ Uma influenciadora gostou das peças e perguntou se poderia divulgar a loja.",
    pergunta: "O que Kamyla deve responder?",
    opcoes: [
      ["💖 Aceitar a parceria e enviar algumas peças", "parceria"],
      ["📸 Fazer um vídeo mostrando toda a loja", "video"],
      ["💰 Oferecer um cupom de desconto", "cupom"]
    ]
  },

  colecao: {
    capitulo: "Capítulo 2 · Uma coleção especial",
    fala: "Kamyla escolheu pérolas, miçangas coloridas e pingentes dourados para criar sua primeira coleção. As peças ficaram lindas! 💍",
    pergunta: "Qual coleção ela deve lançar?",
    opcoes: [
      ["🌷 Coleção romântica com pérolas", "perolas"],
      ["🌈 Coleção colorida e divertida", "colorida"],
      ["✨ Coleção dourada e elegante", "dourada"]
    ]
  },

  promocao: {
    capitulo: "Capítulo 2 · Dia de promoção",
    fala: "Kamyla colocou uma placa de promoção na vitrine. Logo, várias pessoas começaram a entrar na loja! Ela precisa escolher uma oferta inteligente.",
    pergunta: "Qual promoção ela deve fazer?",
    opcoes: [
      ["🎁 Compre duas peças e ganhe desconto", "desconto"],
      ["🎀 Embalagem para presente grátis", "embalagem"],
      ["💎 Sorteio de um kit de bijuterias", "sorteio"]
    ]
  },

  parceria: {
    capitulo: "Capítulo 3 · Uma grande oportunidade",
    fala: "A influenciadora adorou as bijuterias e publicou um vídeo usando as peças. Muitas clientes novas descobriram a loja de Kamyla!",
    pergunta: "Como ela pode aproveitar esse sucesso?",
    opcoes: [
      ["📦 Preparar os pedidos com carinho", "pedidos"],
      ["💗 Criar um programa de fidelidade", "fidelidade"],
      ["🏪 Investir em uma loja maior", "lojaMaior"]
    ]
  },

  video: {
    capitulo: "Capítulo 3 · O vídeo viralizou",
    fala: "O vídeo de Kamyla mostrando como combina brincos e colares viralizou! Os comentários ficaram cheios de elogios e perguntas sobre os preços.",
    pergunta: "Qual deve ser o próximo passo?",
    opcoes: [
      ["🛒 Abrir vendas pela internet", "online"],
      ["💬 Responder a todas as clientes", "atendimento"],
      ["🎨 Criar peças exclusivas", "exclusivas"]
    ]
  },

  cupom: {
    capitulo: "Capítulo 3 · Clientes apaixonadas",
    fala: "O cupom de desconto atraiu muitas clientes. Agora Kamyla quer transformar as primeiras compras em amizades duradouras.",
    pergunta: "Como conquistar essas clientes?",
    opcoes: [
      ["💌 Mandar mensagens de agradecimento", "agradecer"],
      ["🎁 Criar cartões de fidelidade", "fidelidade"],
      ["💎 Lançar novidades toda semana", "novidades"]
    ]
  },

  perolas: {
    capitulo: "Capítulo 3 · Elegância em cada detalhe",
    fala: "A coleção de pérolas ficou delicada e elegante. Uma cliente procura um presente especial para a mãe e pede ajuda a Kamyla.",
    pergunta: "Qual conjunto ela deve recomendar?",
    opcoes: [
      ["🤍 Colar e brincos de pérolas", "presente"],
      ["🌸 Pulseira delicada com pingente", "presente"],
      ["🎀 Montar uma caixinha personalizada", "presente"]
    ]
  },

  colorida: {
    capitulo: "Capítulo 3 · Explosão de cores",
    fala: "A coleção colorida virou a favorita das clientes jovens! Kamyla percebeu que cada pessoa tem um estilo único.",
    pergunta: "O que ela pode fazer agora?",
    opcoes: [
      ["🌈 Montar kits personalizados", "personalizados"],
      ["📱 Mostrar combinações nas redes", "online"],
      ["🎨 Deixar as clientes criarem suas peças", "oficina"]
    ]
  },

  dourada: {
    capitulo: "Capítulo 3 · Brilho e sofisticação",
    fala: "A coleção dourada chamou a atenção de clientes que procuravam acessórios para festas e ocasiões especiais.",
    pergunta: "Como Kamyla pode ampliar as vendas?",
    opcoes: [
      ["👑 Criar kits para festas", "personalizados"],
      ["📸 Fazer fotos profissionais das peças", "video"],
      ["🎁 Montar embalagens sofisticadas", "embalagem"]
    ]
  },

  desconto: {
    capitulo: "Capítulo 3 · Uma oferta de sucesso",
    fala: "A promoção de duas peças fez muito sucesso. As clientes começaram a combinar brincos e colares para montar seus próprios conjuntos.",
    pergunta: "Como Kamyla pode continuar crescendo?",
    opcoes: [
      ["📱 Criar uma loja virtual", "online"],
      ["💌 Oferecer vantagens para clientes fiéis", "fidelidade"],
      ["💎 Lançar uma coleção exclusiva", "exclusivas"]
    ]
  },

  embalagem: {
    capitulo: "Capítulo 3 · Presentes cheios de carinho",
    fala: "As embalagens com fitas e cartões fizeram sucesso! As clientes adoraram presentear pessoas queridas com as bijuterias.",
    pergunta: "Qual é a próxima ideia de Kamyla?",
    opcoes: [
      ["🎀 Criar kits para datas especiais", "personalizados"],
      ["📸 Fotografar os presentes para divulgar", "video"],
      ["🛍️ Vender também pela internet", "online"]
    ]
  },

  sorteio: {
    capitulo: "Capítulo 3 · Um sorteio brilhante",
    fala: "O sorteio trouxe muitas pessoas para conhecer a loja. A ganhadora ficou tão feliz que recomendou Kamyla para todas as amigas!",
    pergunta: "Como transformar essa atenção em crescimento?",
    opcoes: [
      ["💖 Criar um clube de clientes", "fidelidade"],
      ["📦 Organizar os pedidos para entrega", "pedidos"],
      ["🌸 Lançar uma nova coleção", "exclusivas"]
    ]
  }
};

// Cenas compartilhadas pelas diferentes escolhas.
const cenasFinais = {
  pedidos: {
    capitulo: "Final · Um negócio de sucesso! 🏆",
    fala: "Kamyla organizou cada pedido com muito carinho. As clientes ficaram encantadas com a qualidade das peças e o atendimento. Sua lojinha cresceu e se tornou uma marca querida! Kamyla percebeu que dedicação e gentileza fazem toda a diferença. 💖",
    pergunta: "O sonho de Kamyla se tornou realidade!",
    opcoes: [["🌟 Jogar novamente", "reinicio"]]
  },

  fidelidade: {
    capitulo: "Final · Clientes para sempre 💗",
    fala: "Kamyla criou vantagens especiais para suas clientes. Elas passaram a voltar para conhecer cada novidade e indicar a loja para as amigas. Com confiança, criatividade e carinho, a Biju da Kamyla conquistou seu espaço! ✨",
    pergunta: "Kamyla construiu uma loja cheia de amor!",
    opcoes: [["🌟 Jogar novamente", "reinicio"]]
  },

  lojaMaior: {
    capitulo: "Final · Um sonho ainda maior 🏬",
    fala: "Depois de muito planejamento, Kamyla abriu uma loja maior, com vitrines iluminadas, novas coleções e espaço para receber suas clientes. Ela nunca esqueceu o pequeno começo e continuou tratando cada pessoa com carinho. 💎",
    pergunta: "Kamyla realizou seu grande sonho!",
    opcoes: [["🌟 Jogar novamente", "reinicio"]]
  },

  online: {
    capitulo: "Final · A loja conquista a internet 📱",
    fala: "Kamyla montou sua loja virtual e começou a enviar bijuterias para clientes de diferentes lugares. Com fotos bonitas, descrições claras e atendimento atencioso, sua marca conquistou ainda mais espaço. O sonho estava só começando! 💕",
    pergunta: "A Biju da Kamyla agora brilha online!",
    opcoes: [["🌟 Jogar novamente", "reinicio"]]
  },

  atendimento: {
    capitulo: "Final · A melhor vendedora 💌",
    fala: "Kamyla respondeu cada mensagem com paciência e ajudou as clientes a encontrar os acessórios ideais. Seu atendimento virou sua marca registrada, e as recomendações fizeram a loja crescer cada vez mais. 💖",
    pergunta: "Gentileza foi o segredo do sucesso!",
    opcoes: [["🌟 Jogar novamente", "reinicio"]]
  },

  exclusivas: {
    capitulo: "Final · A designer de bijuterias 🎨",
    fala: "Kamyla desenvolveu peças exclusivas, misturando cores, pingentes e materiais de um jeito só dela. Suas criações conquistaram clientes que queriam acessórios diferentes. Ela descobriu que sua criatividade era seu maior talento! ✨",
    pergunta: "Kamyla virou uma empreendedora criativa!",
    opcoes: [["🌟 Jogar novamente", "reinicio"]]
  },

  agradecer: {
    capitulo: "Final · Pequenos gestos, grandes amizades 💌",
    fala: "Kamyla enviou mensagens carinhosas e agradeceu cada compra. As clientes se sentiram especiais e passaram a indicar a loja para outras pessoas. Seu negócio cresceu com uma comunidade de clientes felizes! 💗",
    pergunta: "O carinho fez a diferença!",
    opcoes: [["🌟 Jogar novamente", "reinicio"]]
  },

  novidades: {
    capitulo: "Final · Sempre na moda ✨",
    fala: "A cada semana, Kamyla apresentava novas cores, pingentes e combinações. As clientes ficavam curiosas para conhecer as novidades e a loja ganhou fama por sua criatividade. Kamyla provou que boas ideias podem transformar sonhos em realidade! 💎",
    pergunta: "Uma nova coleção, um novo sucesso!",
    opcoes: [["🌟 Jogar novamente", "reinicio"]]
  },

  presente: {
    capitulo: "Final · O presente perfeito 🎁",
    fala: "Com sua atenção aos detalhes, Kamyla ajudou a cliente a escolher um presente lindo e especial. A pessoa presenteada amou as bijuterias, e a cliente voltou para comprar mais. Kamyla descobriu que vender também é ajudar a criar momentos felizes! 💕",
    pergunta: "Um pequeno acessório criou uma grande alegria!",
    opcoes: [["🌟 Jogar novamente", "reinicio"]]
  },

  personalizados: {
    capitulo: "Final · Cada peça tem uma história 🌈",
    fala: "Kamyla começou a montar kits personalizados para combinar com a personalidade de cada cliente. As pessoas adoraram ter acessórios únicos, e suas encomendas aumentaram. Sua criatividade transformou a lojinha em um lugar especial! 💖",
    pergunta: "O estilo de cada cliente virou inspiração!",
    opcoes: [["🌟 Jogar novamente", "reinicio"]]
  },

  oficina: {
    capitulo: "Final · Criando juntas 🎨",
    fala: "Kamyla organizou encontros criativos para ensinar as clientes a montar bijuterias. Todas se divertiram, aprenderam algo novo e conheceram ainda mais a loja. A Biju da Kamyla virou um espaço de criatividade e amizade! ✨",
    pergunta: "Compartilhar talento também é empreender!",
    opcoes: [["🌟 Jogar novamente", "reinicio"]]
  },

  reinicio: {
    capitulo: "Capítulo 1 · Uma nova aventura",
    fala: "Kamyla está pronta para tentar um novo caminho! Cada escolha pode trazer uma oportunidade diferente. Vamos ajudá-la a brilhar novamente? 💎",
    pergunta: "O que Kamyla deve fazer primeiro?",
    opcoes: [
      ["🌸 Divulgar a loja nas redes sociais", "redes"],
      ["💎 Criar uma coleção de bijuterias", "colecao"],
      ["🛍️ Fazer uma promoção especial", "promocao"]
    ]
  }
};

const historiaEl = document.getElementById("historia");
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const progressoEl = document.getElementById("progresso");
const reiniciarBtn = document.getElementById("reiniciar");

function mostrarCena(id) {
  const cena = historia[id] || cenasFinais[id];

  if (!cena) return;

  historiaEl.textContent = cena.fala;
  perguntaEl.textContent = cena.pergunta;
  progressoEl.textContent = cena.capitulo;
  opcoesEl.replaceChildren();

  cena.opcoes.forEach(([texto, destino]) => {
    const botao = document.createElement("button");

    botao.className = "opcao";
    botao.textContent = texto;

    botao.addEventListener("click", () => {
      mostrarCena(destino);
    });

    opcoesEl.appendChild(botao);
  });

  reiniciarBtn.hidden = id === "inicio" || id === "reinicio";
}

reiniciarBtn.addEventListener("click", () => {
  mostrarCena("inicio");
});

mostrarCena("inicio");
