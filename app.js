const app = document.querySelector("#app");
const navButtons = document.querySelectorAll(".nav-btn");

const state = {
  view: "quiz",
  history: [],
  nodeId: null,
  started: false,
  openCard: null,
};

function node(id) {
  return NODES[id];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function setView(view) {
  state.view = view;
  navButtons.forEach((button) => {
    button.classList.toggle("is-on", button.dataset.view === view);
  });
  render();
}

function start() {
  state.started = true;
  state.history = [];
  state.nodeId = "god";
  state.openCard = null;
  state.view = "quiz";
  render();
}

function choose(option) {
  state.history.push({ nodeId: state.nodeId, label: option.label });
  state.nodeId = option.to;
  render();
}

function follow(resultNode) {
  state.history.push({ nodeId: state.nodeId, label: resultNode.follow.label });
  state.nodeId = resultNode.follow.to;
  render();
}

function jumpTo(index) {
  const step = state.history[index];
  state.history = state.history.slice(0, index);
  state.nodeId = step.nodeId;
  render();
}

function restart() {
  state.started = false;
  state.history = [];
  state.nodeId = null;
  state.openCard = null;
  render();
}

function backOne() {
  const previous = state.history.pop();
  state.nodeId = previous ? previous.nodeId : null;
  if (!state.nodeId) state.started = false;
  render();
}

function pathMarkup() {
  if (!state.history.length) {
    return `<p class="empty-path">Ścieżka pojawi się po pierwszej odpowiedzi.</p>`;
  }
  const items = state.history
    .map((step, index) => {
      const current = node(step.nodeId);
      const title = current.type === "question" ? current.text : labelOf(step.nodeId);
      return `<li>
        <span class="dot"></span>
        <button type="button" data-jump="${index}">
          <span class="step-q">${escapeHtml(title)}</span>
          <span class="step-a">${escapeHtml(step.label)}</span>
        </button>
      </li>`;
    })
    .join("");
  return `<ol class="path">${items}</ol>`;
}

function labelOf(id) {
  const current = node(id);
  if (current.type === "result") return WORLDVIEWS[current.worldview].name;
  if (current.type === "prompt") return PROMPTS[current.prompt].title;
  return current.text;
}

function quizMarkup() {
  if (!state.started) {
    return `<section class="hero">
      <div class="hero-inner">
        <h1>Czy wiesz, jak nazywa się twój światopogląd?</h1>
        <div class="hero-copy">
          <p class="lede">Diagram prowadzi przez kolejne pytania. Każda odpowiedź otwiera jedną gałąź: od istnienia Boga po sens życia, poznanie Boga i zbawienie. Na końcu dostajesz nazwę, opis i pytania do rozmowy.</p>
          <button class="btn primary" type="button" data-start>Zacznij tutaj</button>
        </div>
      </div>
    </section>`;
  }

  const current = node(state.nodeId);
  return `<section class="layout wrap">
    <aside class="rail">
      <h2>Twoja ścieżka</h2>
      ${pathMarkup()}
      <div class="actions">
        <button class="btn ghost" type="button" data-back>Wstecz</button>
        <button class="btn ghost" type="button" data-restart>Od nowa</button>
      </div>
    </aside>
    <article class="panel">${bodyMarkup(current)}</article>
  </section>`;
}

function bodyMarkup(current) {
  if (current.type === "question") return questionMarkup(current);
  if (current.type === "result") return resultMarkup(current);
  return promptMarkup(current);
}

function questionMarkup(current) {
  const options = current.options
    .map(
      (option, index) => `<button class="option" type="button" data-choice="${index}">
        <span><span class="key">${index + 1}</span>${escapeHtml(option.label)}</span>
        <span class="arrow">→</span>
      </button>`
    )
    .join("");
  return `<p class="kicker">${escapeHtml(current.kicker)}</p>
    <h2 class="question">${escapeHtml(current.text)}</h2>
    <div class="options">${options}</div>`;
}

function resultMarkup(current) {
  const view = WORLDVIEWS[current.worldview];
  const questions = view.questions.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const follow = current.follow
    ? `<button class="btn primary" type="button" data-follow>${escapeHtml(current.follow.label)}</button>`
    : "";
  const earlier = earlierResult();
  const note = earlier
    ? `<p class="note">Wcześniej diagram zatrzymał się przy: ${escapeHtml(earlier)}. Ta gałąź doprecyzowuje, gdzie odnajdujesz sens życia.</p>`
    : "";
  return `<p class="kicker">Twój światopogląd na tym diagramie</p>
    <p><span class="result-label">${escapeHtml(view.name)}</span></p>
    <p class="summary">${escapeHtml(view.summary)}</p>
    <p class="description">${escapeHtml(view.description)}</p>
    ${note}
    <h3>Pytania do rozmowy</h3>
    <ul class="questions">${questions}</ul>
    <div class="actions">
      ${follow}
      <button class="btn" type="button" data-back>Zmień ostatnią odpowiedź</button>
      <button class="btn ghost" type="button" data-restart>Zacznij od nowa</button>
    </div>`;
}

function earlierResult() {
  const found = [...state.history].reverse().find((step) => node(step.nodeId).type === "result");
  if (!found) return "";
  return WORLDVIEWS[node(found.nodeId).worldview].name;
}

function promptMarkup(current) {
  const prompt = PROMPTS[current.prompt];
  return `<p class="kicker">Pytanie z brzegu diagramu</p>
    <h2 class="question">${escapeHtml(prompt.title)}</h2>
    <p class="description">${escapeHtml(prompt.text)}</p>
    <div class="actions">
      <button class="btn" type="button" data-back>Wróć i wybierz inną odpowiedź</button>
      <button class="btn ghost" type="button" data-restart>Zacznij od nowa</button>
    </div>`;
}

function atlasMarkup() {
  const cards = RESULT_ORDER.map((id) => {
    const view = WORLDVIEWS[id];
    return `<button class="atlas-card" type="button" data-card="${id}">
      <span class="result-label">${escapeHtml(view.name)}</span>
      <p>${escapeHtml(view.summary)}</p>
    </button>`;
  }).join("");
  const detail = state.openCard ? cardDetail(state.openCard) : "";
  return `<section class="wrap">
    <p class="kicker">Czternaście zakończeń</p>
    <h1>Karty światopoglądów</h1>
    <p class="lede">Każda karta zawiera opis i pytania do rozmowy z oryginalnego sondażu. Możesz je czytać bez przechodzenia diagramu.</p>
    <div class="atlas-grid">${cards}</div>
    ${detail}
  </section>`;
}

function cardDetail(id) {
  const view = WORLDVIEWS[id];
  const questions = view.questions.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  return `<article class="panel detail" id="karta">
    <p><span class="result-label">${escapeHtml(view.name)}</span></p>
    <p class="description">${escapeHtml(view.description)}</p>
    <h3>Pytania do rozmowy</h3>
    <ul class="questions">${questions}</ul>
  </article>`;
}

function render() {
  app.innerHTML = state.view === "atlas" ? atlasMarkup() : quizMarkup();
  if (state.openCard) {
    document.getElementById("karta")?.scrollIntoView({ block: "nearest" });
  }
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.start != null) start();
  else if (target.dataset.choice != null) choose(node(state.nodeId).options[Number(target.dataset.choice)]);
  else if (target.dataset.follow != null) follow(node(state.nodeId));
  else if (target.dataset.back != null) backOne();
  else if (target.dataset.restart != null) restart();
  else if (target.dataset.jump != null) jumpTo(Number(target.dataset.jump));
  else if (target.dataset.card) {
    state.openCard = target.dataset.card;
    render();
  }
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.addEventListener("keydown", (event) => {
  if (state.view !== "quiz" || !state.started) return;
  const current = node(state.nodeId);
  if (!current || current.type !== "question") return;
  const number = Number(event.key);
  if (number >= 1 && number <= current.options.length) choose(current.options[number - 1]);
});

render();
