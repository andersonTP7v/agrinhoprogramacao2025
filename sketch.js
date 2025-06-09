let perguntas = [
  {
    pergunta: "Qual é a principal função da fotossíntese?",
    opcoes: [
      "Produzir energia em forma de açúcares",
      "Absorver nitrogênio do solo",
      "Capturar potássio",
      "Regular a temperatura das plantas"
    ],
    resposta: 0
  },
  {
    pergunta: "Qual tipo de solo é considerado mais fértil?",
    opcoes: ["Arenoso", "Argiloso", "Humoso", "Pedregoso"],
    resposta: 2
  },
  {
    pergunta: "O nitrogênio é importante para:",
    opcoes: [
      "Fortalecer caules",
      "Desenvolvimento de raízes",
      "Formação de clorofila e crescimento das folhas",
      "Florescimento"
    ],
    resposta: 2
  },
  {
    pergunta: "O pH ideal para a maioria das culturas é:",
    opcoes: ["3.0 a 4.5", "5.5 a 6.5", "7.5 a 8.5", "Acima de 9.0"],
    resposta: 1
  },
  {
    pergunta: "Qual é um exemplo de adubo orgânico?",
    opcoes: ["Sulfato de amônio", "Uréia", "Composto de esterco", "Nitrato de potássio"],
    resposta: 2
  },
  {
    pergunta: "A rotação de culturas ajuda a:",
    opcoes: [
      "Reduzir a fertilidade do solo",
      "Aumentar pragas",
      "Melhorar a saúde do solo",
      "Diminuir a produção"
    ],
    resposta: 2
  },
  {
    pergunta: "Qual nutriente é essencial para a formação de frutos?",
    opcoes: ["Fósforo", "Potássio", "Nitrogênio", "Magnésio"],
    resposta: 1
  },
  {
    pergunta: "A compostagem é um processo de:",
    opcoes: ["Fermentação de adubos químicos", "Produção de pesticidas", "Decomposição de matéria orgânica", "Filtração de água"],
    resposta: 2
  },
  {
    pergunta: "Inseticidas são usados para controlar:",
    opcoes: ["Fungos", "Insetos", "Bactérias", "Ervas daninhas"],
    resposta: 1
  },
  {
    pergunta: "Qual técnica reduz o uso de agrotóxicos?",
    opcoes: ["Monocultura", "Irrigação por aspersão", "Controle biológico", "Arado mecânico"],
    resposta: 2
  }
];

let perguntaAtual = 0;
let selecionado = -1;
let pontuacao = 0;
let fimDeJogo = false;

function setup() {
  createCanvas(700, 400);
  textSize(18);
}

function draw() {
  background(230);

  if (fimDeJogo) {
    fill(0);
    textAlign(CENTER);
    textSize(24);
    text("Quiz finalizado!", width / 2, 120);
    text("Pontuação: " + pontuacao + " de " + perguntas.length, width / 2, 160);
    return;
  }

  let p = perguntas[perguntaAtual];

  fill(0);
  textAlign(LEFT);
  textSize(18);
  text(p.pergunta, 50, 50);

  for (let i = 0; i < p.opcoes.length; i++) {
    if (i === selecionado) {
      fill(180, 220, 255);
      rect(45, 80 + i * 40, 610, 30, 5);
    }
    fill(0);
    text(p.opcoes[i], 60, 100 + i * 40);
  }

  fill(50, 150, 50);
  rect(280, 300, 140, 40, 10);
  fill(255);
  textAlign(CENTER);
  text("Confirmar", 350, 327);
}

function mousePressed() {
  for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
    if (
      mouseX > 45 &&
      mouseX < 655 &&
      mouseY > 80 + i * 40 &&
      mouseY < 110 + i * 40
    ) {
      selecionado = i;
    }
  }

  if (
    mouseX > 280 &&
    mouseX < 420 &&
    mouseY > 300 &&
    mouseY < 340 &&
    selecionado !== -1
  ) {
    if (selecionado === perguntas[perguntaAtual].resposta) {
      pontuacao++;
    }

    perguntaAtual++;
    selecionado = -1;

    if (perguntaAtual >= perguntas.length) {
      fimDeJogo = true;
    }
  }
}
