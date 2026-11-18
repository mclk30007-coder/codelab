
/* =====================================================
   CODELAB - JAVASCRIPT COMPLETO
   Cursos | Quiz | Laboratório | Progresso | Créditos
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     1. CONFIGURAÇÕES E ELEMENTOS
  ========================================= */

  const toast = document.querySelector("#toast");
  const progressPercent = document.querySelector("#progress-percent");
  const progressBar = document.querySelector("#progress-bar");

  let completedLessons = JSON.parse(
    localStorage.getItem("codelabCompleted") || "[]"
  );

  let exerciseCompleted =
    localStorage.getItem("codelabExercise") === "true";

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.codelabToastTimer);

    window.codelabToastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  /* =========================================
     2. ATUALIZAÇÃO DO PROGRESSO
  ========================================= */

  function updateProgress() {
    const totalLessons = Object.values(courses)
      .reduce((total, course) => total + course.lessons.length, 0);

    const totalActivities = totalLessons + 1;

    const completedActivities =
      completedLessons.length + (exerciseCompleted ? 1 : 0);

    const percentage = Math.min(
      100,
      Math.round((completedActivities / totalActivities) * 100)
    );

    if (progressPercent) {
      progressPercent.textContent = percentage + "%";
    }

    if (progressBar) {
      progressBar.style.width = percentage + "%";
    }
  }

  /* =========================================
     3. CONTEÚDO DOS CURSOS
  ========================================= */

  const courses = {

    HTML: {
      description: "Aprenda a construir a estrutura das páginas web.",
      color: "#ed6338",

      lessons: [
        {
          title: "O que é HTML?",
          explanation: `
            HTML significa HyperText Markup Language.
            É uma linguagem de marcação utilizada para
            organizar os conteúdos de uma página web.

            Com HTML podemos criar títulos, parágrafos,
            imagens, links, listas e muito mais.
          `,
          example: `<h1>Meu primeiro site</h1>
<p>Estou aprendendo HTML!</p>`
        },

        {
          title: "Estrutura básica",
          explanation: `
            Todo documento HTML possui uma estrutura básica.

            DOCTYPE informa que estamos usando HTML5.
            HEAD guarda informações da página.
            TITLE define o título da aba.
            BODY contém o conteúdo visível.
          `,
          example: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Meu Site</title>
</head>
<body>
  <h1>Olá, mundo!</h1>
</body>
</html>`
        },

        {
          title: "Títulos e parágrafos",
          explanation: `
            As tags H1 até H6 criam títulos de diferentes níveis.

            A tag P cria parágrafos de texto.
          `,
          example: `<h1>Título principal</h1>
<h2>Subtítulo</h2>
<p>Este é um parágrafo.</p>`
        },

        {
          title: "Links",
          explanation: `
            A tag A permite criar links para outras páginas
            ou sites. O atributo HREF indica o destino.
          `,
          example: `<a href="https://www.google.com">
  Acessar o Google
</a>`
        },

        {
          title: "Imagens",
          explanation: `
            A tag IMG permite adicionar imagens.
            O atributo SRC indica o arquivo da imagem
            e ALT descreve a imagem.
          `,
          example: `<img
  src="imagem.jpg"
  alt="Minha imagem"
  width="300"
>`
        }
      ]
    },

    CSS: {
      description: "Aprenda a personalizar e estilizar páginas.",
      color: "#286bdc",

      lessons: [
        {
          title: "O que é CSS?",
          explanation: `
            CSS significa Cascading Style Sheets.

            Ele é utilizado para definir a aparência
            dos elementos HTML, como cores, tamanhos,
            fontes, espaçamentos e posicionamentos.
          `,
          example: `h1 {
  color: blue;
  font-size: 35px;
}`
        },

        {
          title: "Cores e fundos",
          explanation: `
            A propriedade COLOR altera a cor do texto.

            BACKGROUND-COLOR altera a cor de fundo
            de um elemento.
          `,
          example: `body {
  background-color: #f2f7ff;
}

h1 {
  color: #0868f7;
}`
        },

        {
          title: "Fontes e textos",
          explanation: `
            FONT-SIZE controla o tamanho do texto.

            FONT-FAMILY define a família da fonte.

            FONT-WEIGHT controla a espessura.
          `,
          example: `p {
  font-size: 18px;
  font-family: Arial;
  font-weight: bold;
}`
        },

        {
          title: "Margens e espaçamentos",
          explanation: `
            MARGIN cria espaço externo ao elemento.

            PADDING cria espaço interno.
          `,
          example: `.card {
  margin: 20px;
  padding: 25px;
}`
        },

        {
          title: "Bordas e arredondamento",
          explanation: `
            BORDER cria uma borda.

            BORDER-RADIUS arredonda os cantos.
          `,
          example: `.card {
  border: 1px solid #ddd;
  border-radius: 15px;
}`
        }
      ]
    },

    JavaScript: {
      description: "Aprenda a adicionar interatividade aos sites.",
      color: "#d6ad00",

      lessons: [
        {
          title: "O que é JavaScript?",
          explanation: `
            JavaScript é uma linguagem de programação
            muito utilizada no desenvolvimento web.

            Ela permite criar interações, responder a cliques,
            validar formulários e atualizar conteúdos.
          `,
          example: `alert("Olá, CODELAB!");`
        },

        {
          title: "Variáveis",
          explanation: `
            Variáveis guardam informações.

            LET cria uma variável que pode receber
            outro valor posteriormente.

            CONST cria uma variável que não pode
            receber uma nova atribuição.
          `,
          example: `let nome = "Alex";
const curso = "Programação";

console.log(nome);
console.log(curso);`
        },

        {
          title: "Funções",
          explanation: `
            Funções agrupam comandos que podem ser
            executados quando necessário.
          `,
          example: `function apresentar() {
  alert("Bem-vindo ao CODELAB!");
}

apresentar();`
        },

        {
          title: "Eventos de clique",
          explanation: `
            Eventos permitem que o JavaScript responda
            às ações realizadas pelo usuário.
          `,
          example: `document.querySelector("button")
  .addEventListener("click", () => {
    alert("Você clicou!");
  });`
        },

        {
          title: "Manipulando elementos",
          explanation: `
            O JavaScript pode encontrar elementos HTML
            e modificar seus conteúdos.
          `,
          example: `document.querySelector("h1")
  .textContent = "Novo título!";`
        }
      ]
    }
  };

  /* =========================================
     4. SISTEMA DE AULAS
  ========================================= */

  function openCourse(courseName) {
    const course = courses[courseName];

    if (!course) return;

    let currentLesson = 0;

    const overlay = document.createElement("div");

    overlay.id = "codelab-course-modal";

    overlay.style.cssText = `
      position:fixed;
      inset:0;
      z-index:9999;
      background:rgba(10,20,40,.75);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:15px;
    `;

    overlay.innerHTML = `
      <div style="
        width:100%;
        max-width:750px;
        max-height:90vh;
        overflow-y:auto;
        background:white;
        border-radius:20px;
        padding:25px;
        color:#101b31;
      ">

        <div style="
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:15px;
          margin-bottom:20px;
        ">
          <div>
            <span style="
              color:${course.color};
              font-weight:800;
              font-size:12px;
            ">CURSO CODELAB</span>

            <h2 style="margin-top:6px;">
              Curso de ${courseName}
            </h2>
          </div>

          <button id="close-course" style="
            border:0;
            background:#edf4ff;
            border-radius:10px;
            padding:10px 14px;
            font-size:18px;
            cursor:pointer;
          ">✕</button>
        </div>

        <div id="course-content"></div>

      </div>
    `;

    document.body.appendChild(overlay);

    const content = overlay.querySelector("#course-content");

    function renderLesson() {
      const lesson = course.lessons[currentLesson];

      const lessonId = courseName + "-" + currentLesson;

      const isCompleted = completedLessons.includes(lessonId);

      content.innerHTML = `
        <div style="
          height:8px;
          background:#e7eef9;
          border-radius:20px;
          overflow:hidden;
          margin-bottom:20px;
        ">
          <div style="
            height:100%;
            width:${((currentLesson + 1) / course.lessons.length) * 100}%;
            background:${course.color};
            transition:.3s;
          "></div>
        </div>

        <p style="color:#71809a;font-size:13px;margin-bottom:10px;">
          Aula ${currentLesson + 1} de ${course.lessons.length}
        </p>

        <h2 style="font-size:25px;margin-bottom:15px;">
          ${lesson.title}
        </h2>

        <p style="
          color:#52617a;
          line-height:1.8;
          white-space:pre-line;
          margin-bottom:22px;
        ">${lesson.explanation}</p>

        <h3 style="margin-bottom:12px;">Exemplo de código</h3>

        <pre style="
          background:#101b31;
          color:#d8e8ff;
          padding:18px;
          border-radius:12px;
          white-space:pre-wrap;
          overflow-wrap:anywhere;
          line-height:1.7;
          font-size:13px;
          overflow-x:auto;
        "></pre>

        <div style="
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:20px;
        ">
          <button id="previous-lesson" style="
            padding:12px 16px;
            border:1px solid #dce6f5;
            background:white;
            border-radius:9px;
            font-weight:700;
            cursor:pointer;
          " ${currentLesson === 0 ? "disabled" : ""}>
            ← Anterior
          </button>

          <button id="complete-lesson" style="
            padding:12px 16px;
            border:0;
            background:${isCompleted ? "#16834a" : course.color};
            color:white;
            border-radius:9px;
            font-weight:700;
            cursor:pointer;
          ">
            ${isCompleted ? "✓ Aula concluída" : "Marcar como concluída"}
          </button>

          <button id="next-lesson" style="
            padding:12px 16px;
            border:0;
            background:#101b31;
            color:white;
            border-radius:9px;
            font-weight:700;
            cursor:pointer;
          ">
            ${currentLesson === course.lessons.length - 1
              ? "Finalizar curso"
              : "Próxima aula →"}
          </button>
        </div>
      `;

      const pre = content.querySelector("pre");
      pre.textContent = lesson.example;

      content.querySelector("#previous-lesson")
        .addEventListener("click", () => {
          if (currentLesson > 0) {
            currentLesson--;
            renderLesson();
          }
        });

      content.querySelector("#complete-lesson")
        .addEventListener("click", () => {
          if (!completedLessons.includes(lessonId)) {
            completedLessons.push(lessonId);

            localStorage.setItem(
              "codelabCompleted",
              JSON.stringify(completedLessons)
            );

            updateProgress();
            showToast("Aula concluída! Parabéns!");
            renderLesson();
          }
        });

      content.querySelector("#next-lesson")
        .addEventListener("click", () => {
          if (currentLesson < course.lessons.length - 1) {
            currentLesson++;
            renderLesson();
          } else {
            showToast("Você chegou ao final deste curso!");
            overlay.remove();
          }
        });
    }

    overlay.querySelector("#close-course")
      .addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) overlay.remove();
    });

    renderLesson();
  }

  document.querySelectorAll(".lesson-button").forEach(button => {
    button.addEventListener("click", () => {
      openCourse(button.dataset.course);
    });
  });

  /* =========================================
     5. LABORATÓRIO DE CÓDIGO
  ========================================= */

  const codeInput = document.querySelector("#code-input");
  const runButton = document.querySelector("#run-code");
  const codePreview = document.querySelector("#code-preview");

  function runCode() {
    if (!codeInput || !codePreview) return;

    codePreview.srcdoc = codeInput.value;
    showToast("Código executado com sucesso!");
  }

  if (runButton) {
    runButton.addEventListener("click", runCode);
  }

  if (codeInput && codePreview) {
    runCode();
  }

  /* =========================================
     6. QUIZ DE PROGRAMAÇÃO
  ========================================= */

  const questions = [
    {
      question: "Qual é a principal função do HTML em um site?",
      options: [
        "Criar a estrutura do conteúdo",
        "Editar imagens",
        "Criar bancos de dados",
        "Proteger o computador"
      ],
      correct: 0,
      explanation: "O HTML organiza a estrutura e o conteúdo da página."
    },
    {
      question: "Qual tag cria um parágrafo em HTML?",
      options: ["<h1>", "<p>", "<img>", "<div>"],
      correct: 1,
      explanation: "A tag <p> é utilizada para criar parágrafos."
    },
    {
      question: "Qual linguagem é usada para estilizar uma página?",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      correct: 1,
      explanation: "O CSS controla cores, fontes, tamanhos e outros estilos."
    },
    {
      question: "O JavaScript pode responder ao clique de um botão?",
      options: ["Verdadeiro", "Falso"],
      correct: 0,
      explanation: "Sim! O JavaScript pode detectar eventos de clique."
    },
    {
      question: "Qual tag representa o título principal?",
      options: ["<p>", "<body>", "<h1>", "<img>"],
      correct: 2,
      explanation: "A tag <h1> representa o título de maior nível."
    },
    {
      question: "Quais propriedades podem alterar a aparência de um texto?",
      options: [
        "color",
        "background-color",
        "font-size",
        "href"
      ],
      correct: [0, 1, 2],
      multiple: true,
      explanation: "Color, background-color e font-size são propriedades CSS."
    },
    {
      question: "Qual comando mostra uma mensagem no console?",
      options: [
        "show.console()",
        "console.log()",
        "print.html()",
        "alert.console()"
      ],
      correct: 1,
      explanation: "console.log() exibe informações no console."
    },
    {
      question: "A tag <img> cria um link?",
      options: ["Verdadeiro", "Falso"],
      correct: 1,
      explanation: "Não. A tag img adiciona imagens. A tag a cria links."
    },
    {
      question: "Qual símbolo é usado para selecionar um ID no CSS?",
      options: [".", "#", "*", "&"],
      correct: 1,
      explanation: "O símbolo # seleciona elementos pelo ID."
    },
    {
      question: "Qual tag contém o conteúdo visível da página?",
      options: ["<head>", "<title>", "<body>", "<meta>"],
      correct: 2,
      explanation: "O conteúdo visível da página fica dentro de body."
    }
  ];

  let currentQuestion = 0;
  let quizScore = 0;
  let selectedAnswers = [];
  let quizAnswered = false;

  const exerciseSection = document.querySelector("#exercicios");

  if (exerciseSection) {
    const oldQuiz = document.querySelector("#codelab-quiz");
    if (oldQuiz) oldQuiz.remove();

    const quiz = document.createElement("div");
    quiz.id = "codelab-quiz";

    quiz.style.cssText = `
      margin-top:25px;
      padding:25px;
      background:#f2f7ff;
      border:1px solid #dce8fa;
      border-radius:18px;
    `;

    exerciseSection.appendChild(quiz);

    function renderQuiz() {
      const question = questions[currentQuestion];

      quizAnswered = false;
      selectedAnswers = [];

      quiz.innerHTML = `
        <div style="
          display:flex;
          justify-content:space-between;
          flex-wrap:wrap;
          gap:10px;
          margin-bottom:15px;
        ">
          <strong style="font-size:19px;">📝 Quiz de Programação</strong>
          <span style="color:#52617a;font-size:13px;">
            Questão ${currentQuestion + 1} de ${questions.length}
          </span>
        </div>

        <div style="
          height:8px;
          background:#dce8fa;
          border-radius:20px;
          overflow:hidden;
          margin-bottom:25px;
        ">
          <div style="
            height:100%;
            width:${((currentQuestion + 1) / questions.length) * 100}%;
            background:#0868f7;
          "></div>
        </div>

        <h3 style="
          font-size:22px;
          line-height:1.5;
          margin-bottom:20px;
        ">${question.question}</h3>

        <div id="quiz-options"></div>

        <div id="quiz-feedback" style="
          display:none;
          margin-top:18px;
          padding:15px;
          border-radius:10px;
          line-height:1.6;
        "></div>

        <div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap;">
          <button id="check-answer" style="
            border:0;
            background:#0868f7;
            color:white;
            padding:13px 20px;
            border-radius:9px;
            font-weight:800;
          ">Confirmar resposta</button>

          <button id="next-question" style="
            display:none;
            border:0;
            background:#101b31;
            color:white;
            padding:13px 20px;
            border-radius:9px;
            font-weight:800;
          ">Próxima questão →</button>
        </div>
      `;

      const optionsContainer = quiz.querySelector("#quiz-options");

      question.options.forEach((option, index) => {
        const label = document.createElement("label");

        label.style.cssText = `
          display:flex;
          align-items:center;
          gap:12px;
          background:white;
          border:1px solid #dce6f5;
          padding:15px;
          border-radius:12px;
          margin-bottom:10px;
          cursor:pointer;
          font-size:14px;
          line-height:1.5;
        `;

        const input = document.createElement("input");
        input.type = question.multiple ? "checkbox" : "radio";
        input.name = "codelab-question";
        input.value = index;
        input.style.accentColor = "#0868f7";

        input.addEventListener("change", () => {
          if (question.multiple) {
            if (input.checked) {
              selectedAnswers.push(index);
            } else {
              selectedAnswers = selectedAnswers.filter(
                answer => answer !== index
              );
            }
          } else {
            selectedAnswers = [index];
          }
        });

        const text = document.createElement("span");
        text.textContent = option;

        label.appendChild(input);
        label.appendChild(text);
        optionsContainer.appendChild(label);
      });

      quiz.querySelector("#check-answer")
        .addEventListener("click", checkAnswer);

      quiz.querySelector("#next-question")
        .addEventListener("click", () => {
          currentQuestion++;

          if (currentQuestion < questions.length) {
            renderQuiz();
          } else {
            showQuizResult();
          }
        });
    }

    function checkAnswer() {
      if (quizAnswered) return;

      if (selectedAnswers.length === 0) {
        showToast("Escolha uma resposta primeiro!");
        return;
      }

      const question = questions[currentQuestion];

      let correct;

      if (question.multiple) {
        correct =
          selectedAnswers.length === question.correct.length &&
          question.correct.every(answer =>
            selectedAnswers.includes(answer)
          );
      } else {
        correct = selectedAnswers[0] === question.correct;
      }

      if (correct) quizScore++;

      quizAnswered = true;

      const feedback = quiz.querySelector("#quiz-feedback");

      feedback.style.display = "block";
      feedback.style.background = correct ? "#e5f8ed" : "#fff0ed";
      feedback.style.color = correct ? "#176b3c" : "#a33c2c";

      feedback.innerHTML = `
        <strong>${correct ? "✓ Resposta correta!" : "✗ Não foi dessa vez!"}</strong>
        <p style="margin-top:7px;">${question.explanation}</p>
      `;

      quiz.querySelectorAll("#quiz-options input").forEach(input => {
        input.disabled = true;
      });

      quiz.querySelector("#check-answer").style.display = "none";
      quiz.querySelector("#next-question").style.display = "inline-block";

      quiz.querySelector("#next-question").textContent =
        currentQuestion === questions.length - 1
          ? "Ver resultado"
          : "Próxima questão →";
    }

    function showQuizResult() {
      const percentage = Math.round(
        (quizScore / questions.length) * 100
      );

      quiz.innerHTML = `
        <div style="text-align:center;padding:15px 5px;">
          <div style="font-size:55px;">🏆</div>

          <h2 style="font-size:25px;margin:12px 0;">
            Quiz concluído!
          </h2>

          <p style="color:#52617a;margin-bottom:15px;">
            Você terminou as 10 questões do CODELAB.
          </p>

          <div style="
            font-size:42px;
            color:#0868f7;
            font-weight:900;
            margin:15px 0;
          ">${quizScore}/10</div>

          <p style="font-weight:800;">
            ${percentage}% de aproveitamento
          </p>

          <p style="color:#52617a;margin:15px 0;">
            ${
              percentage >= 80
                ? "Excelente trabalho! Você está avançando muito bem."
                : percentage >= 50
                  ? "Muito bem! Continue praticando para aprender ainda mais."
                  : "Continue estudando. Cada tentativa é uma oportunidade de aprender!"
            }
          </p>

          <button id="restart-quiz" style="
            border:0;
            background:#0868f7;
            color:white;
            padding:13px 20px;
            border-radius:9px;
            font-weight:800;
          ">Refazer quiz</button>
        </div>
      `;

      if (!exerciseCompleted) {
        exerciseCompleted = true;
        localStorage.setItem("codelabExercise", "true");
        updateProgress();
      }

      quiz.querySelector("#restart-quiz")
        .addEventListener("click", () => {
          currentQuestion = 0;
          quizScore = 0;
          renderQuiz();
        });
    }

    renderQuiz();
  }

  /* =========================================
     7. BOTÃO DE EXERCÍCIO
  ========================================= */

  const exerciseButton = document.querySelector("#exercise-button");

  if (exerciseButton) {
    exerciseButton.addEventListener("click", () => {
      exerciseCompleted = true;

      localStorage.setItem("codelabExercise", "true");

      exerciseButton.textContent = "✓ Exercício marcado como concluído";

      updateProgress();
      showToast("Exercício concluído!");
    });

    if (exerciseCompleted) {
      exerciseButton.textContent = "✓ Exercício marcado como concluído";
    }
  }

  /* =========================================
     8. PESQUISA DO SITE
  ========================================= */

  const searchInput = document.querySelector("#search-input");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const search = searchInput.value
        .toLowerCase()
        .trim();

      document.querySelectorAll(".searchable").forEach(item => {
        const text = (
          item.textContent + " " +
          (item.dataset.search || "")
        ).toLowerCase();

        item.classList.toggle(
          "hidden",
          search !== "" && !text.includes(search)
        );
      });
    });
  }

  /* =========================================
     9. CRÉDITOS DO GRUPO
  ========================================= */

  function setupCredits() {
    const oldSection = document.querySelector("#professores");
    const existingCredits = document.querySelector("#creditos");

    const menuLinks = document.querySelectorAll(".menu-link");

    menuLinks.forEach(link => {
      if (link.getAttribute("href") === "#professores") {
        link.setAttribute("href", "#creditos");

        const span = link.querySelector("span");
        if (span) span.textContent = "Créditos do Grupo";
      }
    });

    let creditsSection = existingCredits;

    if (!creditsSection && oldSection) {
      creditsSection = document.createElement("section");
      creditsSection.id = "creditos";
      creditsSection.className = "credits-section";
      oldSection.replaceWith(creditsSection);
    }

    if (!creditsSection) {
      creditsSection = document.createElement("section");
      creditsSection.id = "creditos";
      creditsSection.className = "credits-section";

      const main = document.querySelector(".main");
      const footer = main?.querySelector("footer");

      if (main && footer) {
        main.insertBefore(creditsSection, footer);
      } else if (main) {
        main.appendChild(creditsSection);
      }
    }

    creditsSection.innerHTML = `
      <div class="credits-header">
        <span class="credits-tag">NOSSA EQUIPE</span>
        <h2>Créditos do Grupo</h2>
        <p>
          Conheça as pessoas que participaram da criação
          e desenvolvimento do CODELAB.
        </p>
      </div>

      <div class="credits-grid">

        <article class="credit-card">
          <div class="credit-photo">
            <img alt="Foto de Alex">
            <div class="credit-placeholder">
              <strong>👤</strong>
              Adicione uma foto
            </div>
            <label class="photo-upload">
              📷 Escolher foto
              <input type="file" accept="image/*" data-person="alex">
            </label>
          </div>

          <div class="credit-info">
            <h3>Alex</h3>
            <span>DESENVOLVIMENTO</span>
            <p>
              Responsável pelo desenvolvimento e conteúdo
              do projeto, além da contribuição com ideias.
            </p>
          </div>
        </article>

        <article class="credit-card">
          <div class="credit-photo">
            <img alt="Foto de Artur Bernardo">
            <div class="credit-placeholder">
              <strong>👤</strong>
              Adicione uma foto
            </div>
            <label class="photo-upload">
              📷 Escolher foto
              <input type="file" accept="image/*" data-person="artur">
            </label>
          </div>

          <div class="credit-info">
            <h3>Artur Bernardo</h3>
            <span>DESIGN</span>
            <p>
              Participação na criação visual e nas ideias
              para o desenvolvimento do CODELAB.
            </p>
          </div>
        </article>

        <article class="credit-card">
          <div class="credit-photo">
            <img alt="Foto de Mateus">
            <div class="credit-placeholder">
              <strong>👤</strong>
              Adicione uma foto
            </div>
            <label class="photo-upload">
              📷 Escolher foto
              <input type="file" accept="image/*" data-person="mateus">
            </label>
          </div>

          <div class="credit-info">
            <h3>Mateus</h3>
            <span>IDEIAS</span>
            <p>
              Contribuição com ideias e sugestões
              para o projeto.
            </p>
          </div>
        </article>

      </div>

      <div class="credits-footer">
        <strong>CODELAB</strong>
        <p>
          Um projeto construído com criatividade,
          dedicação e trabalho em equipe.
        </p>
      </div>
    `;

    /* Pré-visualização das fotos escolhidas */

    creditsSection.querySelectorAll('input[type="file"]')
      .forEach(input => {

        input.addEventListener("change", () => {
          const file = input.files[0];

          if (!file) return;

          if (!file.type.startsWith("image/")) {
            showToast("Escolha um arquivo de imagem.");
            input.value = "";
            return;
          }

          const photoBox = input.closest(".credit-photo");
          const image = photoBox.querySelector("img");

          const reader = new FileReader();

          reader.onload = event => {
            image.src = event.target.result;
            photoBox.classList.add("has-photo");
          };

          reader.readAsDataURL(file);
        });
      });
  }

  setupCredits();

  /* =========================================
     10. BOTÃO ANTIGO DE PROFESSORES
  ========================================= */

  const teacherButton = document.querySelector("#teacher-button");

  if (teacherButton) {
    teacherButton.textContent = "Conhecer participantes →";

    teacherButton.addEventListener("click", () => {
      document.querySelector("#creditos")?.scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  /* =========================================
     11. NAVEGAÇÃO ATIVA
  ========================================= */

  document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".menu-link").forEach(item => {
        item.classList.remove("active");
      });

      link.classList.add("active");
    });
  });

  /* =========================================
     12. BOTÕES DE NOTIFICAÇÃO
  ========================================= */

  const notificationButton = document.querySelector(".icon-button");

  if (notificationButton) {
    notificationButton.addEventListener("click", () => {
      showToast("Bem-vindo ao CODELAB! Continue aprendendo.");
    });
  }

  /* =========================================
     13. INICIALIZAÇÃO
  ========================================= */

  updateProgress();

  console.log("CODELAB iniciado com sucesso!");
  console.log("Cursos, quiz, laboratório e créditos carregados.");

});
