import { PRESETS, CLASS_LABEL } from './presets.js';

const $ = id => document.getElementById(id);
const root = document.documentElement;

/* ─── Version ─────────────────────────────────────────── */
$('appVer').textContent = 'v' + (self.APP_VERSION || '');

/* ─── Theme (light / dark, user-selectable) ───────────── */
const THEME_KEY = 'infucalc-theme';
const darkMQ = window.matchMedia('(prefers-color-scheme: dark)');
const BAR_COLOR = { light: '#14171c', dark: '#050608' };

function effectiveTheme() {
  return root.dataset.theme || (darkMQ.matches ? 'dark' : 'light');
}
function syncTheme() {
  const eff = effectiveTheme();
  root.dataset.eff = eff;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = BAR_COLOR[eff];
  const next = eff === 'dark' ? 'terang' : 'gelap';
  $('themeBtn').setAttribute('aria-label', `Ganti ke tema ${next}`);
  $('themeBtn').title = `Ganti ke tema ${next}`;
}
$('themeBtn').addEventListener('click', () => {
  const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* storage unavailable */ }
  syncTheme();
});
darkMQ.addEventListener('change', syncTheme);
syncTheme();

/* ─── Helpers ─────────────────────────────────────────── */
function setVal(el, txt) {
  if (el) el.textContent = txt;
}
function reprint(card) {
  card.classList.remove('print');
  void card.offsetWidth;
  card.classList.add('print');
}
function setState(card, msgEl, state, msg) {
  card.dataset.state = state;
  if (msg !== undefined) msgEl.textContent = msg;
  if (state !== 'ok') {
    card.querySelectorAll('.rx-v, .dv .num').forEach(n => { n.textContent = '—'; });
  }
}
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function rows(list) {
  return list.map(r => `<div${r.tot ? ' class="tot"' : ''}><dt>${esc(r.k)}</dt><dd>${esc(r.v)}</dd></div>`).join('');
}

/* ─── Tabs ────────────────────────────────────────────── */
const tabs = [0, 1, 2].map(i => $(`tb${i}`));
function goTab(idx, focus) {
  tabs.forEach((btn, i) => {
    const on = i === idx;
    btn.setAttribute('aria-selected', String(on));
    btn.tabIndex = on ? 0 : -1;
    $(`p${i}`).hidden = !on;
  });
  if (focus) tabs[idx].focus();
  updatePeek();
}
tabs.forEach((btn, i) => {
  btn.addEventListener('click', () => goTab(i));
  btn.addEventListener('keydown', e => {
    const k = e.key;
    if (k === 'ArrowRight' || k === 'ArrowLeft' || k === 'Home' || k === 'End') {
      e.preventDefault();
      const n = k === 'Home' ? 0 : k === 'End' ? 2 : (i + (k === 'ArrowRight' ? 1 : 2)) % 3;
      goTab(n, true);
    }
  });
});

/* ═══ TAB 0 — POMPA INFUS ═══════════════════════════════ */
const MSG0 = 'Isi jumlah obat, total volume, dan target dosis.';
const STATUS = {
  'FORNAS':      { cls: 'st-fornas', label: 'FORNAS' },
  'Non-FORNAS':  { cls: 'st-non',    label: 'Non-FORNAS' },
  'INFO-KLINIS': { cls: 'st-info',   label: 'Info' },
  'INFO':        { cls: 'st-info',   label: 'Info' },
};

PRESETS.forEach(p => {
  const o = document.createElement('option');
  o.value = p.id; o.textContent = p.name;
  $('presetSel').appendChild(o);
});

function currentPreset() {
  return PRESETS.find(x => x.id === $('presetSel').value) || null;
}

function paintLabel0() {
  const p = currentPreset();
  const cls = p ? p.cls : 'manual';
  $('rx0').dataset.cls = cls;
  $('presetDot').dataset.cls = cls;
  $('rx0Name').textContent = p ? p.name : CLASS_LABEL.manual;
}

$('presetSel').addEventListener('change', () => {
  const p = currentPreset();
  paintLabel0();
  if (!p) { $('pInfo').hidden = true; p0calc(); return; }
  $('drugMg').value = p.drugMg; $('volMl').value = p.volMl; $('doseUnit').value = p.unit;
  $('pCls').textContent = CLASS_LABEL[p.cls];
  $('pCls').dataset.cls = p.cls;
  $('pRange').textContent = p.tip;
  $('pNote').textContent = `Pelarut: ${p.solvent} · ${p.note}`;
  $('pSediaan').innerHTML = (p.sediaan || []).map(s => {
    const st = STATUS[s.status] || STATUS.INFO;
    return `<li class="sed">
      <div class="sed-top"><span class="sed-b">${esc(s.bentuk)}</span><span class="st ${st.cls}">${st.label}</span></div>
      <span class="sed-k">${esc(s.ket)}</span>
    </li>`;
  }).join('');
  $('pInfo').hidden = false;
  $('doseInp').value = ''; $('wtInp').value = '';
  chkUnit(); p0calc();
});

function chkUnit() {
  $('wtRow').hidden = !$('doseUnit').value.includes('/kg');
}
$('doseUnit').addEventListener('change', () => { chkUnit(); p0calc(); });
['drugMg', 'volMl', 'wtInp', 'doseInp'].forEach(id => $(id).addEventListener('input', p0calc));

function p0calc() {
  const mg   = parseFloat($('drugMg').value);
  const vol  = parseFloat($('volMl').value);
  const dose = parseFloat($('doseInp').value);
  const unit = $('doseUnit').value;
  const wt   = parseFloat($('wtInp').value);
  const nk   = unit.includes('/kg');
  const card = $('rx0'), msg = $('r0msg');

  // concentration display
  if (mg > 0 && vol > 0) {
    const mm = (mg / vol).toFixed(4).replace(/\.?0+$/, '');
    const um = (mg * 1000 / vol).toFixed(2).replace(/\.?0+$/, '');
    $('concTxt').textContent = `${mm} mg/mL = ${um} mcg/mL`;
    $('concBox').hidden = false;
    $('rx0Conc').textContent = `${um} mcg/mL`;
  } else {
    $('concBox').hidden = true;
    $('rx0Conc').textContent = '';
  }

  if (!mg || mg <= 0 || !vol || vol <= 0 || !dose || dose <= 0) { setState(card, msg, 'wait', MSG0); return; }
  if (nk && (!wt || wt <= 0)) { setState(card, msg, 'err', 'Masukkan berat badan pasien (kg) untuk satuan dosis berbasis /kg.'); return; }

  const cMcg = (mg * 1000) / vol, cMg = mg / vol;
  let rate;
  switch (unit) {
    case 'mcg/kg/menit': rate = (dose * wt * 60) / cMcg; break;
    case 'mcg/kg/jam':   rate = (dose * wt) / cMcg;      break;
    case 'mcg/menit':    rate = (dose * 60) / cMcg;      break;
    case 'mcg/jam':      rate = dose / cMcg;             break;
    case 'mg/jam':       rate = dose / cMg;              break;
    case 'mg/kg/jam':    rate = (dose * wt) / cMg;       break;
    default: setState(card, msg, 'err', 'Satuan tidak dikenali.'); return;
  }
  if (!isFinite(rate) || rate < 0) { setState(card, msg, 'err', 'Hasil tidak valid. Periksa kembali angka yang dimasukkan.'); return; }

  setState(card, msg, 'ok');
  setVal($('v0r'), rate.toFixed(2));
  setVal($('v0m'), ((rate * 20) / 60).toFixed(2));
  setVal($('v0mi'), ((rate * 60) / 60).toFixed(2));
  reprint(card);

  $('s0').innerHTML = rows([
    { k: 'Dosis target', v: `${dose} ${unit}` },
    nk ? { k: 'Berat badan', v: `${wt} kg` } : null,
    { k: 'Dilusi', v: `${mg} mg / ${vol} mL` },
    { k: 'Konsentrasi', v: `${cMcg.toFixed(2)} mcg/mL` },
  ].filter(Boolean));
}

/* ═══ TAB 1 — HOLLIDAY-SEGAR ════════════════════════════ */
const MSG1 = 'Masukkan berat badan anak untuk menghitung kebutuhan cairan.';
$('hsWt').addEventListener('input', hsCalc);

function hsCalc() {
  const wt = parseFloat($('hsWt').value);
  const card = $('rx1'), msg = $('r1msg');

  if (!wt || wt <= 0) { setState(card, msg, 'wait', MSG1); setVal($('v1r'), '—'); return; }
  if (wt > 120) { setState(card, msg, 'err', 'Berat badan melebihi batas 120 kg untuk rumus ini.'); setVal($('v1r'), '—'); return; }

  // 100-50-20 (mL/day)
  let seg1 = 0, seg2 = 0, seg3 = 0;
  if (wt <= 10)      { seg1 = wt * 100; }
  else if (wt <= 20) { seg1 = 1000; seg2 = (wt - 10) * 50; }
  else               { seg1 = 1000; seg2 = 500; seg3 = (wt - 20) * 20; }
  const total  = seg1 + seg2 + seg3;
  const rateHr = total / 24;
  const makro  = (rateHr * 20) / 60;
  const mikro  = (rateHr * 60) / 60;

  setState(card, msg, 'ok');
  setVal($('v1t'), Math.round(total).toString());
  setVal($('v1r'), rateHr.toFixed(2));
  setVal($('v1m'), makro.toFixed(2));
  setVal($('v1mi'), mikro.toFixed(2));
  reprint(card);

  $('v1bd').innerHTML = rows([
    { k: `0 – ${Math.min(wt, 10).toFixed(1)} kg × 100 mL/kg/hari`, v: `${seg1} mL` },
    ...(seg2 > 0 ? [{ k: `10 – ${Math.min(wt, 20).toFixed(1)} kg × 50 mL/kg/hari`, v: `${seg2} mL` }] : []),
    ...(seg3 > 0 ? [{ k: `20 – ${wt.toFixed(1)} kg × 20 mL/kg/hari`, v: `${seg3} mL` }] : []),
    { k: 'Total cairan / hari', v: `${Math.round(total)} mL`, tot: true },
  ]);

  // 4-2-1 rule
  let r1 = 0, r2 = 0, r3 = 0;
  if (wt <= 10)      r1 = wt * 4;
  else if (wt <= 20) { r1 = 40; r2 = (wt - 10) * 2; }
  else               { r1 = 40; r2 = 20; r3 = (wt - 20) * 1; }
  const t421 = r1 + r2 + r3;
  $('v1_421').innerHTML = rows([
    { k: `0 – ${Math.min(wt, 10).toFixed(1)} kg × 4 mL/kg/jam`, v: `${r1.toFixed(2)} mL/jam` },
    ...(r2 > 0 ? [{ k: `10 – ${Math.min(wt, 20).toFixed(1)} kg × 2 mL/kg/jam`, v: `${r2.toFixed(2)} mL/jam` }] : []),
    ...(r3 > 0 ? [{ k: `> 20 kg × 1 mL/kg/jam`, v: `${r3.toFixed(2)} mL/jam` }] : []),
    { k: 'Total (4-2-1)', v: `${t421.toFixed(2)} mL/jam`, tot: true },
  ]);
}

/* ═══ TAB 2 — TARGET WAKTU ══════════════════════════════ */
const MSG2 = 'Masukkan volume dan durasi target untuk menghitung kecepatan infus.';
$('twVol').addEventListener('input', () => { syncChips(); twCalc(); });
$('twHr').addEventListener('input', () => { syncChips(); twCalc(); });

function syncChips() {
  document.querySelectorAll('.chip[data-vol]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.vol === $('twVol').value)));
  document.querySelectorAll('.chip[data-hr]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.hr === $('twHr').value)));
}
document.querySelectorAll('.chip[data-vol]').forEach(btn => btn.addEventListener('click', () => {
  $('twVol').value = btn.dataset.vol; syncChips(); twCalc();
}));
document.querySelectorAll('.chip[data-hr]').forEach(btn => btn.addEventListener('click', () => {
  $('twHr').value = btn.dataset.hr; syncChips(); twCalc();
}));

function twCalc() {
  const vol = parseFloat($('twVol').value);
  const hrs = parseFloat($('twHr').value);
  const card = $('rx2'), msg = $('r2msg');

  $('rx2Conc').textContent = vol > 0 && hrs > 0 ? `${vol} mL · ${hrs} jam` : '';
  if (!vol || vol <= 0 || !hrs || hrs <= 0) { setState(card, msg, 'wait', MSG2); return; }
  if (hrs > 720) { setState(card, msg, 'err', 'Durasi terlalu panjang (maks. 720 jam / 30 hari).'); return; }

  const rate  = vol / hrs;
  const makro = (rate * 20) / 60;
  const mikro = (rate * 60) / 60;

  setState(card, msg, 'ok');
  setVal($('v2r'), rate.toFixed(2));
  setVal($('v2m'), makro.toFixed(2));
  setVal($('v2mi'), mikro.toFixed(2));
  reprint(card);

  const dH = Math.floor(hrs);
  const dM = Math.round((hrs - dH) * 60);
  const dur = dM > 0 ? `${dH} jam ${dM} menit` : `${dH} jam`;
  $('s2').innerHTML = rows([
    { k: 'Volume cairan', v: `${vol} mL` },
    { k: 'Target durasi', v: dur },
    { k: 'Total menit', v: `${(hrs * 60).toFixed(0)} menit` },
    { k: 'Kecepatan', v: `${rate.toFixed(2)} mL/jam` },
  ]);
}

/* ─── Global reset ────────────────────────────────────── */
$('gReset').addEventListener('click', () => {
  $('presetSel').value = ''; $('drugMg').value = ''; $('volMl').value = '';
  $('doseInp').value = ''; $('wtInp').value = ''; $('doseUnit').value = 'mcg/kg/menit';
  $('pInfo').hidden = true;
  paintLabel0(); chkUnit(); p0calc();
  $('hsWt').value = ''; hsCalc();
  $('twVol').value = ''; $('twHr').value = ''; syncChips(); twCalc();
});

/* ─── Peek: compact result while the label is off-screen ─ */
const PEEK_SRC = [
  { card: 'rx0', v: 'v0r', u: 'mL/jam', name: () => $('rx0Name').textContent },
  { card: 'rx1', v: 'v1r', u: 'mL/jam', name: () => 'Holliday-Segar' },
  { card: 'rx2', v: 'v2r', u: 'mL/jam', name: () => 'Target waktu' },
];
const visible = new Set();
function activeIdx() { return tabs.findIndex(t => t.getAttribute('aria-selected') === 'true'); }
function updatePeek() {
  const src = PEEK_SRC[activeIdx()];
  const card = $(src.card);
  const show = card.dataset.state === 'ok' && !visible.has(src.card);
  const peek = $('peek');
  peek.classList.toggle('on', show);
  peek.setAttribute('aria-hidden', String(!show));
  peek.tabIndex = show ? 0 : -1;
  if (!show) return;
  peek.dataset.cls = card.dataset.cls;
  $('peekName').textContent = src.name();
  $('peekV').textContent = $(src.v).textContent;
  $('peekU').textContent = src.u;
  peek.setAttribute('aria-label', `Lihat hasil: ${src.name()} ${$(src.v).textContent} ${src.u}`);
}
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id); });
  updatePeek();
}, { threshold: 0.35 });
PEEK_SRC.forEach(s => {
  io.observe($(s.card));
  new MutationObserver(updatePeek).observe($(s.card), { attributes: true, attributeFilter: ['data-state', 'data-cls'], subtree: false });
});
$('peek').addEventListener('click', () => {
  const card = $(PEEK_SRC[activeIdx()].card);
  card.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
});
['drugMg','volMl','wtInp','doseInp','hsWt','twVol','twHr'].forEach(id => $(id).addEventListener('input', updatePeek));
document.querySelectorAll('.chip, #presetSel, #doseUnit').forEach(el => el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'click', updatePeek));

/* ─── Init ────────────────────────────────────────────── */
paintLabel0(); chkUnit(); p0calc(); hsCalc(); twCalc();

/* ─── Offline: service worker ─────────────────────────── */
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => { /* offline support unavailable */ });
  });
}
