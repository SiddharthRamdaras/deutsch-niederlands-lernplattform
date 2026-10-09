const vocabulary = [
  { word: 'der Hund', article: 'der', meaning: 'de hond', category: 'dieren' },
  { word: 'die Katze', article: 'die', meaning: 'de kat', category: 'dieren' },
  { word: 'das Kind', article: 'das', meaning: 'het kind', category: 'familie' },
  { word: 'die Mutter', article: 'die', meaning: 'de moeder', category: 'familie' },
  { word: 'der Vater', article: 'der', meaning: 'de vader', category: 'familie' },
  { word: 'die Schwester', article: 'die', meaning: 'de zus', category: 'familie' },
  { word: 'der Bruder', article: 'der', meaning: 'de broer', category: 'familie' },
  { word: 'die Eltern', article: 'die', meaning: 'de ouders', category: 'familie' },
  { word: 'die Schule', article: 'die', meaning: 'de school', category: 'school' },
  { word: 'der Lehrer', article: 'der', meaning: 'de leraar', category: 'school' },
  { word: 'die Lehrerin', article: 'die', meaning: 'de lerares', category: 'school' },
  { word: 'das Haus', article: 'das', meaning: 'het huis', category: 'huis' },
  { word: 'die Stadt', article: 'die', meaning: 'de stad', category: 'plaats' },
  { word: 'das Land', article: 'das', meaning: 'het land', category: 'plaats' },
  { word: 'die Sprache', article: 'die', meaning: 'de taal', category: 'taal' },
  { word: 'das Hobby', article: 'das', meaning: 'het hobby', category: 'vrije tijd' },
  { word: 'der Sport', article: 'der', meaning: 'de sport', category: 'vrije tijd' },
  { word: 'die Musik', article: 'die', meaning: 'de muziek', category: 'vrije tijd' },
  { word: 'das Buch', article: 'das', meaning: 'het boek', category: 'school' },
  { word: 'das Auto', article: 'das', meaning: 'de auto', category: 'transport' },
  { word: 'die Straße', article: 'die', meaning: 'de straat', category: 'plaats' },
  { word: 'das Brot', article: 'das', meaning: 'het brood', category: 'eten' },
  { word: 'der Tisch', article: 'der', meaning: 'de tafel', category: 'huis' },
  { word: 'die Lampe', article: 'die', meaning: 'de lamp', category: 'huis' },
  { word: 'das Wasser', article: 'das', meaning: 'het water', category: 'eten' },
  { word: 'die Arbeit', article: 'die', meaning: 'het werk', category: 'werk' },
  { word: 'die Freundschaft', article: 'die', meaning: 'de vriendschap', category: 'relaties' },
  { word: 'die Familie', article: 'die', meaning: 'de familie', category: 'familie' },
  { word: 'der Geburtstag', article: 'der', meaning: 'de verjaardag', category: 'feest' },
  { word: 'die Antwort', article: 'die', meaning: 'het antwoord', category: 'school' },
  { word: 'die Frage', article: 'die', meaning: 'de vraag', category: 'school' },
  { word: 'das Fenster', article: 'das', meaning: 'het raam', category: 'huis' },
  { word: 'die Tür', article: 'die', meaning: 'de deur', category: 'huis' },
  { word: 'das Wochenende', article: 'das', meaning: 'het weekend', category: 'vrije tijd' },
  { word: 'die Stadt', article: 'die', meaning: 'de stad', category: 'plaats' },
  { word: 'das Dorf', article: 'das', meaning: 'het dorp', category: 'plaats' },
  { word: 'die Sprache', article: 'die', meaning: 'de taal', category: 'taal' },
  { word: 'das Obst', article: 'das', meaning: 'het fruit', category: 'eten' },
  { word: 'das Gemüse', article: 'das', meaning: 'het groente', category: 'eten' },
  { word: 'die Universität', article: 'die', meaning: 'de universiteit', category: 'school' },
  { word: 'das Studium', article: 'das', meaning: 'het studie', category: 'school' },
  { word: 'die Kasse', article: 'die', meaning: 'de kassa', category: 'dagelijks' },
  { word: 'die Bank', article: 'die', meaning: 'de bank', category: 'dagelijks' },
  { word: 'der Park', article: 'der', meaning: 'het park', category: 'plaats' },
  { word: 'die Sonne', article: 'die', meaning: 'de zon', category: 'natuur' },
  { word: 'der Regen', article: 'der', meaning: 'de regen', category: 'natuur' },
  { word: 'die Wolke', article: 'die', meaning: 'de wolk', category: 'natuur' },
  { word: 'der Winter', article: 'der', meaning: 'de winter', category: 'natuur' },
  { word: 'die Reise', article: 'die', meaning: 'de reis', category: 'toerisme' },
  { word: 'das Hotel', article: 'das', meaning: 'het hotel', category: 'toerisme' },
  { word: 'die Tasche', article: 'die', meaning: 'de tas', category: 'dagelijks' },
  { word: 'der Ball', article: 'der', meaning: 'de bal', category: 'sport' }
];

const grammarNotes = [
  {
    title: '1. Lidwoorden (der/die/das)',
    content: `
      In het Duits heb je drie hoofdartikelen: der (mannelijk), die (vrouwelijk), das (onzijdig).
      Voorbeelden: der Hund, die Katze, das Kind.
      Het artikel hoort bij het woord. Hierdoor leer je meteen ook het geslacht van het zelfstandig naamwoord.
    `
  },
  {
    title: '2. Werkwoord: sein',
    content: `
      Sein = zijn.
      ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.
      Voorbeeld: Ich bin müde. = Ik ben moe.
    `
  },
  {
    title: '3. Werkwoord: haben',
    content: `
      Haben = hebben.
      ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.
      Voorbeeld: Ich habe eine Schwester. = Ik heb een zus.
    `
  },
  {
    title: '4. Personalpronomen',
    content: `
      ich = ik, du = jij, er/sie/es = hij/zij/het, wir = wij, ihr = jullie, sie = zij, Sie = u / u.
      Ze helpen om zinnen kort en logisch te maken.
    `
  },
  {
    title: '5. Basiszinbouw',
    content: `
      In het Duits staat het werkwoord vaak op de tweede plaats in de zin.
      Voorbeeld: Ich gehe nach Hause. = Ik ga naar huis.
      In vragen kan het werkwoord ook eerst staan: Gehst du heute? = Ga jij vandaag?
    `
  },
  {
    title: '6. Vraagzinnen',
    content: `
      Je kunt vragen maken met het werkwoord op de tweede plaats of in het begin.
      Voorbeeld: Wo wohnst du? = Waar woon jij?
      Wie bist du? = Wie ben jij?
      Gebruik een kort, duidelijk antwoord om te oefenen.
    `
  }
];

const categories = [...new Set(vocabulary.map(item => item.category))];

const state = {
  index: 0,
  flipped: false,
  filtered: [...vocabulary],
  currentCategory: 'all',
  score: 0,
  questionIndex: 0,
  quizQuestions: []
};

function renderCategoryOptions() {
  const select = document.getElementById('categoryFilter');
  const options = categories
    .map(category => `<option value="${category}">${capitalize(category)}</option>`)
    .join('');

  select.innerHTML = `<option value="all">Alle categorieën</option>${options}`;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getFilteredVocabulary() {
  return state.currentCategory === 'all'
    ? [...vocabulary]
    : vocabulary.filter(item => item.category === state.currentCategory);
}

function renderFlashcard() {
  const cards = getFilteredVocabulary();
  if (!cards.length) return;

  const current = cards[state.index % cards.length];
  const card = document.getElementById('flashcard');
  const frontWord = document.getElementById('frontWord');
  const frontMeta = document.getElementById('frontMeta');
  const backWord = document.getElementById('backWord');
  const backMeta = document.getElementById('backMeta');

  frontWord.textContent = current.word;
  frontMeta.textContent = current.meaning;
  backWord.textContent = current.meaning;
  backMeta.textContent = `Artikel: ${current.article}`;

  card.classList.toggle('flipped', state.flipped);
}

function nextCard() {
  const cards = getFilteredVocabulary();
  if (!cards.length) return;
  state.index = (state.index + 1) % cards.length;
  state.flipped = false;
  renderFlashcard();
}

function prevCard() {
  const cards = getFilteredVocabulary();
  if (!cards.length) return;
  state.index = (state.index - 1 + cards.length) % cards.length;
  state.flipped = false;
  renderFlashcard();
}

function shuffleCards() {
  const cards = getFilteredVocabulary();
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  state.index = 0;
  state.flipped = false;
  renderFlashcard();
}

function renderGrammar() {
  const container = document.getElementById('grammarContent');
  container.innerHTML = grammarNotes
    .map(
      item => `
        <article class="grammar-card">
          <h3>${item.title}</h3>
          <p>${item.content.replace(/\n/g, '<br>')}</p>
        </article>
      `
    )
    .join('');
}

function buildQuiz() {
  const questions = [];
  const selected = [...vocabulary].sort(() => Math.random() - 0.5).slice(0, 8);

  selected.forEach(item => {
    const options = [item.article, 'der', 'die', 'das'];
    const unique = [...new Set(options)].sort(() => Math.random() - 0.5);

    questions.push({
      question: `Wat is het juiste lidwoord bij “${item.word}”?`,
      answer: item.article,
      options: unique,
      type: 'article'
    });
  });

  state.quizQuestions = questions;
  state.questionIndex = 0;
  state.score = 0;
  renderQuiz();
}

function renderQuiz() {
  const question = state.quizQuestions[state.questionIndex];
  const quizProgress = document.getElementById('quizProgress');
  const quizScore = document.getElementById('quizScore');
  const questionEl = document.getElementById('quizQuestion');
  const optionsEl = document.getElementById('quizAnswers');
  const nextBtn = document.getElementById('nextQuestionBtn');

  if (!question) {
    questionEl.textContent = `Klaar! Je score is ${state.score} / ${state.quizQuestions.length}.`;
    optionsEl.innerHTML = '';
    quizProgress.textContent = 'Einde';
    quizScore.textContent = `Score: ${state.score}`;
    nextBtn.classList.add('hidden');
    return;
  }

  quizProgress.textContent = `Vraag ${state.questionIndex + 1} / ${state.quizQuestions.length}`;
  quizScore.textContent = `Score: ${state.score}`;
  questionEl.textContent = question.question;
  optionsEl.innerHTML = question.options
    .map(
      option => `
        <button class="quiz-option" data-answer="${option}">${option}</button>
      `
    )
    .join('');

  nextBtn.classList.add('hidden');

  optionsEl.querySelectorAll('.quiz-option').forEach(button => {
    button.addEventListener('click', () => {
      const chosen = button.dataset.answer;
      const allButtons = optionsEl.querySelectorAll('.quiz-option');

      allButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('correct', 'wrong');

        if (btn.dataset.answer === question.answer) {
          btn.classList.add('correct');
        }

        if (btn.dataset.answer === chosen && chosen !== question.answer) {
          btn.classList.add('wrong');
        }
      });

      if (chosen === question.answer) {
        state.score += 1;
      }

      quizScore.textContent = `Score: ${state.score}`;
      nextBtn.classList.remove('hidden');
    });
  });
}

function renderVocabularyTable() {
  const tbody = document.getElementById('vocabTable');
  const searchValue = document.getElementById('searchInput').value.toLowerCase();

  const filtered = vocabulary.filter(item => {
    const term = item.word.toLowerCase() + item.meaning.toLowerCase() + item.article.toLowerCase() + item.category.toLowerCase();
    return term.includes(searchValue);
  });

  tbody.innerHTML = filtered
    .map(
      item => `
        <tr>
          <td>${item.word}</td>
          <td>${item.article}</td>
          <td>${item.meaning}</td>
          <td>${capitalize(item.category)}</td>
        </tr>
      `
    )
    .join('');

  document.getElementById('wordCount').textContent = vocabulary.length;
}

function bindNavigation() {
  document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(panel => panel.classList.remove('active'));

      button.classList.add('active');
      const target = button.dataset.target;
      document.getElementById(target).classList.add('active');
    });
  });
}

function bindFlashcardControls() {
  document.getElementById('flipBtn').addEventListener('click', () => {
    state.flipped = !state.flipped;
    renderFlashcard();
  });

  document.getElementById('nextCard').addEventListener('click', nextCard);
  document.getElementById('prevCard').addEventListener('click', prevCard);
  document.getElementById('shuffleBtn').addEventListener('click', shuffleCards);
  document.getElementById('markKnowBtn').addEventListener('click', () => {
    nextCard();
  });

  document.getElementById('categoryFilter').addEventListener('change', event => {
    state.currentCategory = event.target.value;
    state.index = 0;
    state.flipped = false;
    renderFlashcard();
  });
}

function bindSearch() {
  document.getElementById('searchInput').addEventListener('input', renderVocabularyTable);
}

function bindQuizControls() {
  document.getElementById('nextQuestionBtn').addEventListener('click', () => {
    state.questionIndex += 1;
    renderQuiz();
  });
}

function init() {
  renderCategoryOptions();
  renderGrammar();
  renderFlashcard();
  renderVocabularyTable();
  buildQuiz();
  bindNavigation();
  bindFlashcardControls();
  bindSearch();
  bindQuizControls();
}

init();
