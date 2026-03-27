/* ═══════════════════════════════════════════════════════════════
   IdiomVault — Flashcard Standalone Engine  (app.js)
   Requires: data.js  (exposes DATA array + getState / saveState
             / updateStreak / typeColor / shuffle helpers)
═══════════════════════════════════════════════════════════════ */

/* ── DATA RESOLUTION ───────────────────────────────────────────
   data.js from the main IdiomVault project exposes a global
   const DATA = [{n, expr, type, meaning, example}, …].
   We fall back gracefully if it isn't loaded.                  */
const SOURCE = (typeof DATA !== 'undefined' && Array.isArray(DATA) && DATA.length)
  ? DATA
  : (typeof window.idiomDatabase !== 'undefined' ? window.idiomDatabase : []);

/* ── COLOUR MAP ─────────────────────────────────────────────── */
const TYPE_COLOR = {
  'idiom':        '#4A8FD9',
  'proverb':      '#4DC48A',
  'slang':        '#D96AB0',
  'phrasal verb': '#7ED4F7',
};
function colorOf(type) { return TYPE_COLOR[type] || '#888'; }

/* ── SHUFFLE (Fisher-Yates) ─────────────────────────────────── */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── STATE ──────────────────────────────────────────────────── */
let deck         = [...SOURCE];   // working deck (may be shuffled)
let idx          = 0;             // current position
let isFlipped    = false;
let score        = 0;
let streak       = 0;

/* localStorage keys */
const LS = {
  score:  'iv_standalone_score',
  streak: 'iv_standalone_streak',
};

/* ── LOAD PERSISTED SCORES ──────────────────────────────────── */
function loadScores() {
  score  = parseInt(localStorage.getItem(LS.score)  || '0', 10);
  streak = parseInt(localStorage.getItem(LS.streak) || '0', 10);
}

function persistScores() {
  localStorage.setItem(LS.score,  score);
  localStorage.setItem(LS.streak, streak);
}

/* ── DOM REFS ───────────────────────────────────────────────── */
const $ = id => document.getElementById(id);

const els = {
  card:       $('flashcard'),
  expr:       $('expression'),
  badge:      $('typeBadge'),
  meaning:    $('meaning'),
  example:    $('example'),
  idxSpan:    $('currentIndex'),
  totalSpan:  $('totalCount'),
  scoreSpan:  $('score'),
  streakSpan: $('streak'),
  audioUS:    $('audioUSBtn'),
  audioUK:    $('audioUKBtn'),
  prev:       $('prevBtn'),
  next:       $('nextBtn'),
  random:     $('randomBtn'),
  shuffle:    $('shuffleBtn'),
  reset:      $('resetScoreBtn'),
};

/* ── RENDER CARD ────────────────────────────────────────────── */
function renderCard() {
  if (!deck.length) {
    els.expr.textContent = 'No data loaded.';
    return;
  }

  isFlipped = false;
  const entry = deck[idx];

  /* header stripe colour */
  els.card.style.setProperty('--stripe', colorOf(entry.type));
  els.card.style.cssText += `--stripe:${colorOf(entry.type)};`;
  els.card.style.setProperty('--before-bg', colorOf(entry.type));

  /* force ::before colour via inline custom property trick */
  els.card.setAttribute('data-color', colorOf(entry.type));
  els.card.setAttribute('data-num', `#${String(entry.n || idx + 1).padStart(3,'0')}`);

  /* expression */
  els.expr.textContent = `"${entry.expr || entry.expression}"`;

  /* type badge */
  const type    = entry.type || 'idiom';
  const typeKey = type === 'phrasal verb' ? 'phrasal' : type;
  els.badge.textContent = type;
  els.badge.className   = `type-badge type-${typeKey}`;

  /* hide revealed parts */
  hideRevealed();

  /* stats */
  updateStats();

  /* inject stripe colour — ::before can't be driven by JS directly,
     so we patch it via a <style> tag we own */
  applyStripe(colorOf(entry.type));
}

/* Patch the ::before stripe colour */
let stripeStyleEl = null;
function applyStripe(color) {
  if (!stripeStyleEl) {
    stripeStyleEl = document.createElement('style');
    stripeStyleEl.id = 'iv-stripe';
    document.head.appendChild(stripeStyleEl);
  }
  stripeStyleEl.textContent = `#flashcard::before { background: ${color} !important; }`;
}

/* ── REVEAL ─────────────────────────────────────────────────── */
function revealCard() {
  if (isFlipped) return;
  isFlipped = true;

  const entry = deck[idx];

  /* animate */
  els.card.classList.remove('flip-anim');
  void els.card.offsetWidth;
  els.card.classList.add('flip-anim');

  /* inject divider + labels */
  ensureDivider();

  /* meaning */
  els.meaning.innerHTML = `
    <div class="section-label">Meaning</div>
    ${entry.meaning}
  `;
  els.meaning.classList.add('visible');

  /* example */
  els.example.innerHTML = highlightExpr(entry.example || '', entry.expr || entry.expression || '');
  els.example.classList.add('visible');

  /* hide tap hint, show actions */
  const hint = els.card.querySelector('.tap-hint');
  if (hint) hint.style.display = 'none';

  showActionRow();
}

/* Highlight the expression inside the example sentence */
function highlightExpr(example, expr) {
  if (!expr) return example;
  const safe = expr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const reg  = new RegExp(`(${safe})`, 'gi');
  return `<div class="section-label" style="margin-bottom:8px;">Example</div>` +
    example.replace(reg, '<strong style="color:var(--accent);font-style:normal;">$1</strong>');
}

/* Build divider once per card reveal */
function ensureDivider() {
  let div = els.card.querySelector('.card-divider');
  if (!div) {
    div = document.createElement('div');
    div.className = 'card-divider';
    div.innerHTML = `
      <div class="card-divider-line"></div>
      <div class="card-divider-dot"></div>
      <div class="card-divider-line"></div>
    `;
    /* insert before meaning */
    els.card.insertBefore(div, els.meaning);
  }
  div.classList.add('visible');
}

function hideRevealed() {
  els.meaning.className = 'meaning';
  els.meaning.innerHTML = '';
  els.example.className = 'example';
  els.example.innerHTML = '';

  /* remove divider */
  const div = els.card.querySelector('.card-divider');
  if (div) div.classList.remove('visible');

  /* rebuild tap hint */
  let hint = els.card.querySelector('.tap-hint');
  if (!hint) {
    hint = document.createElement('div');
    hint.className = 'tap-hint';
    hint.innerHTML = '<span>👆</span> Tap to reveal meaning';
    els.card.appendChild(hint);
  }
  hint.style.display = 'flex';

  /* hide action row */
  const row = document.getElementById('actionRow');
  if (row) row.style.display = 'none';
}

/* ── ACTION ROW (I Know / Review Again) ─────────────────────── */
function showActionRow() {
  let row = document.getElementById('actionRow');
  if (!row) {
    row = document.createElement('div');
    row.id = 'actionRow';
    row.style.cssText = `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 20px;
    `;
    row.innerHTML = `
      <button id="iKnowBtn"   style="padding:13px;border-radius:12px;font-size:14px;font-weight:700;
        background:rgba(64,208,144,0.15);border:1px solid rgba(64,208,144,0.35);color:#40d090;
        cursor:pointer;font-family:var(--font-body);transition:all .2s;">✓ I Know This</button>
      <button id="reviewBtn"  style="padding:13px;border-radius:12px;font-size:14px;font-weight:700;
        background:rgba(240,64,96,0.12);border:1px solid rgba(240,64,96,0.28);color:#f04060;
        cursor:pointer;font-family:var(--font-body);transition:all .2s;">↩ Review Again</button>
    `;
    /* append inside card so it scrolls with it */
    els.card.appendChild(row);

    document.getElementById('iKnowBtn').addEventListener('click', e => {
      e.stopPropagation(); // don't re-flip
      markKnown();
    });
    document.getElementById('reviewBtn').addEventListener('click', e => {
      e.stopPropagation();
      markReview();
    });
  }
  row.style.display = 'grid';
}

/* ── MARK KNOWN / REVIEW ─────────────────────────────────────── */
function markKnown() {
  score  += 10;
  streak += 1;
  if (streak % 3 === 0) {
    score += 5;
    showToast('🎉 Bonus +5 XP — 3 in a row!');
  } else {
    showToast('✓ Marked as learned! +10 pts');
  }
  persistScores();
  updateStats();
  setTimeout(nextCard, 380);
}

function markReview() {
  streak = 0;
  persistScores();
  updateStats();
  showToast('↩ Added to review list');
  setTimeout(nextCard, 380);
}

/* ── NAVIGATION ─────────────────────────────────────────────── */
function nextCard() {
  idx = (idx + 1) % deck.length;
  if (idx === 0) showToast('🎉 Deck complete! Starting over.');
  renderCard();
}

function prevCard() {
  idx = (idx - 1 + deck.length) % deck.length;
  renderCard();
}

function randomCard() {
  if (deck.length <= 1) return;
  let newIdx;
  do { newIdx = Math.floor(Math.random() * deck.length); }
  while (newIdx === idx);
  idx = newIdx;

  els.card.classList.remove('random-anim');
  void els.card.offsetWidth;
  els.card.classList.add('random-anim');
  renderCard();
  showToast('🎲 Random card!');
}

function doShuffle() {
  deck = shuffleArray(deck);
  idx  = 0;
  renderCard();
  showToast('🃏 Deck shuffled!');
}

/* ── STATS ──────────────────────────────────────────────────── */
function updateStats() {
  els.idxSpan.textContent   = idx + 1;
  els.totalSpan.textContent = deck.length;
  els.scoreSpan.textContent = score;
  els.streakSpan.textContent = streak;
}

/* ── AUDIO (Web Speech API) ──────────────────────────────────── */
let activeAudioBtn = null;

function speak(text, variant) {
  if (!window.speechSynthesis) {
    showToast('⚠️ Speech not supported in this browser');
    return;
  }

  window.speechSynthesis.cancel();

  /* clear active state */
  if (activeAudioBtn) activeAudioBtn.classList.remove('speaking');

  const btn = variant === 'US' ? els.audioUS : els.audioUK;
  btn.classList.add('speaking');
  activeAudioBtn = btn;

  const utterance    = new SpeechSynthesisUtterance(text);
  utterance.lang     = variant === 'US' ? 'en-US' : 'en-GB';
  utterance.rate     = 0.82;
  utterance.pitch    = 1;

  /* voice selection */
  function trySpeak() {
    const voices = window.speechSynthesis.getVoices();
    const voice  = voices.find(v => utterance.lang === 'en-US'
      ? v.lang.startsWith('en-US')
      : v.lang.startsWith('en-GB'));
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  }

  if (window.speechSynthesis.getVoices().length) {
    trySpeak();
  } else {
    window.speechSynthesis.onvoiceschanged = trySpeak;
  }

  utterance.onend = utterance.onerror = () => {
    btn.classList.remove('speaking');
    if (activeAudioBtn === btn) activeAudioBtn = null;
  };
}

function pronounce(variant) {
  const entry = deck[idx];
  const text  = entry ? (entry.expr || entry.expression) : '';
  if (!text) return;
  const label = variant === 'US' ? 'American' : 'British';
  speak(text, variant);
  showToast(`🔊 ${label} English`);
}

/* ── RESET SCORE ─────────────────────────────────────────────── */
function resetScore() {
  if (!confirm('Reset your score and streak to zero?')) return;
  score  = 0;
  streak = 0;
  persistScores();
  updateStats();
  showToast('Score reset');
}

/* ── TOAST ───────────────────────────────────────────────────── */
let toastEl   = null;
let toastTmr  = null;

function showToast(msg) {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'toast';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTmr);
  toastTmr = setTimeout(() => toastEl.classList.remove('show'), 2200);
}

/* ── KEYBOARD ────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  switch (e.key) {
    case ' ':
    case 'Enter':
      e.preventDefault();
      isFlipped ? nextCard() : revealCard();
      break;
    case 'ArrowRight': e.preventDefault(); nextCard();   break;
    case 'ArrowLeft':  e.preventDefault(); prevCard();   break;
    case 'r': case 'R': randomCard(); break;
    case 'k': case 'K': if (isFlipped) markKnown();   break;
    case 'x': case 'X': if (isFlipped) markReview();  break;
    case 'u': case 'U': pronounce('US'); break;
    case 'b': case 'B': pronounce('UK'); break;
  }
});

/* ── WIRE EVENTS ─────────────────────────────────────────────── */
els.card.addEventListener('click',   revealCard);
els.prev.addEventListener('click',   prevCard);
els.next.addEventListener('click',   nextCard);
els.random.addEventListener('click', randomCard);
els.shuffle.addEventListener('click',doShuffle);
els.reset.addEventListener('click',  resetScore);
els.audioUS.addEventListener('click', () => pronounce('US'));
els.audioUK.addEventListener('click', () => pronounce('UK'));

/* ── INIT ────────────────────────────────────────────────────── */
(function init() {
  if (!SOURCE.length) {
    document.getElementById('expression').textContent =
      'data.js not loaded — check your <script> path.';
    return;
  }
  loadScores();
  renderCard();
})();
