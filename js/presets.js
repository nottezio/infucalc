// Drug presets. Clinical content carried over unchanged from InfuCalc v2.0.
// `cls` (added in the redesign) maps each drug to an ISO 26825 user-applied
// syringe-label colour class. Confirm against your unit's labelling policy.

export const PRESETS = [
  {
    id:'norep', name:'Norepinefrin', drugMg:4, volMl:50, solvent:'NaCl 0.9%',
    unit:'mcg/kg/menit', tip:'0.01 – 3 mcg/kg/menit (titrasi sesuai MAP target)',
    note:'Vasopressor lini pertama sepsis (Surviving Sepsis Campaign 2021)',
    sediaan:[
      {bentuk:'Ampul 4 mg/4 mL (1 mg/mL)',  status:'FORNAS', ket:'Norepinefrin bitartrat; tersedia RS tipe B/C/D'},
      {bentuk:'Ampul 8 mg/8 mL (1 mg/mL)',  status:'FORNAS', ket:'Sediaan alternatif RS tipe A'},
    ]
  },
  {
    id:'dobu', name:'Dobutamin', drugMg:250, volMl:50, solvent:'NaCl 0.9%',
    unit:'mcg/kg/menit', tip:'2 – 20 mcg/kg/menit',
    note:'Inotropik pilihan gagal jantung akut / syok kardiogenik',
    sediaan:[
      {bentuk:'Vial 250 mg/20 mL (12.5 mg/mL)', status:'FORNAS', ket:'Dobutamin HCl; tersedia RS tipe A/B'},
      {bentuk:'Vial 250 mg/5 mL (50 mg/mL)',    status:'FORNAS', ket:'Wajib larutkan sebelum digunakan'},
    ]
  },
  {
    id:'dopa', name:'Dopamin', drugMg:200, volMl:50, solvent:'NaCl 0.9%',
    unit:'mcg/kg/menit', tip:'2 – 20 mcg/kg/menit',
    note:'Renal: 1–3 | Inotropik: 3–10 | Vasopresor: >10 mcg/kg/menit',
    sediaan:[
      {bentuk:'Ampul 200 mg/5 mL (40 mg/mL)',  status:'FORNAS', ket:'Dopamin HCl; tersedia luas seluruh RS'},
      {bentuk:'Ampul 200 mg/10 mL (20 mg/mL)', status:'FORNAS', ket:'Sediaan alternatif; wajib larutkan'},
    ]
  },
  {
    id:'vaso', name:'Vasopresin', drugMg:20, volMl:50, solvent:'NaCl 0.9%',
    unit:'mcg/menit', tip:'0.01 – 0.04 Unit/menit (≈ 1.2 – 2.4 mL/jam)',
    note:'20 Unit dimasukkan sebagai 20 mg-ekuivalen dalam kalkulator ini',
    sediaan:[
      {bentuk:'Ampul 20 Unit/mL', status:'Non-FORNAS', ket:'⚠️ Ketersediaan terbatas; verifikasi formularium RS'},
    ]
  },
  {
    id:'milri', name:'Milrinon', drugMg:10, volMl:50, solvent:'D5%',
    unit:'mcg/kg/menit', tip:'0.25 – 0.75 mcg/kg/menit (tanpa loading dose rutin)',
    note:'Inhibitor PDE-3; titrasi pelan; awasi aritmia dan hipotensi',
    sediaan:[
      {bentuk:'Vial 10 mg/10 mL (1 mg/mL)', status:'Non-FORNAS', ket:'⚠️ Tidak termasuk FORNAS; sering tersedia RS tipe A'},
    ]
  },
  {
    id:'epi', name:'Epinefrin', drugMg:1, volMl:50, solvent:'NaCl 0.9%',
    unit:'mcg/kg/menit', tip:'0.01 – 1 mcg/kg/menit (titrasi)',
    note:'Anafilaksis, syok kardiogenik, cardiac arrest — pertimbangkan norepinefrin pada sepsis',
    sediaan:[
      {bentuk:'Ampul 1 mg/mL (1:1000)',     status:'FORNAS', ket:'Adrenalin; tersedia di seluruh faskes'},
      {bentuk:'Ampul 0.1 mg/mL (1:10000)', status:'FORNAS', ket:'Pre-dilusi; umumnya untuk cardiac arrest IV'},
    ]
  },
  {
    id:'furo', name:'Furosemid (Drip)', drugMg:100, volMl:50, solvent:'NaCl 0.9%',
    unit:'mg/jam', tip:'5 – 40 mg/jam (titrasi sesuai respons diuresis)',
    note:'Diuretik loop; pantau elektrolit dan kreatinin berkala',
    sediaan:[
      {bentuk:'Ampul 10 mg/mL (2 mL = 20 mg)', status:'FORNAS', ket:'Tersedia luas; larutkan dalam NS untuk drip'},
      {bentuk:'Ampul 10 mg/mL (5 mL = 50 mg)', status:'FORNAS', ket:'Sediaan alternatif di beberapa RS'},
    ]
  },
  {
    id:'ntg', name:'Nitrogliserin / NTG', drugMg:50, volMl:50, solvent:'D5%',
    unit:'mcg/menit', tip:'5 – 200 mcg/menit',
    note:'Hindari infus set PVC (adsorpsi obat); gunakan set kaca/polietilen',
    sediaan:[
      {bentuk:'Ampul 5 mg/mL', status:'Non-FORNAS', ket:'⚠️ Verifikasi ketersediaan; simpan terhindar cahaya'},
      {bentuk:'Vial 50 mg/10 mL (5 mg/mL)', status:'Non-FORNAS', ket:'Larutkan dalam D5%; botol kaca'},
    ]
  },
  {
    id:'isdn', name:'ISDN (Isosorbide Dinitrate)', drugMg:10, volMl:50, solvent:'NaCl 0.9%',
    unit:'mg/jam', tip:'1 – 10 mg/jam',
    note:'Vasodilator; titrasi sesuai MAP; awasi hipotensi',
    sediaan:[
      {bentuk:'Ampul 10 mg/10 mL (1 mg/mL)', status:'FORNAS', ket:'Isosorbide dinitrat IV; tersedia RS tipe B ke atas'},
      {bentuk:'Ampul 10 mg/mL (undiluted)',   status:'FORNAS', ket:'Wajib diencerkan sebelum digunakan'},
    ]
  },
  {
    id:'nica', name:'Nikardipin', drugMg:5, volMl:50, solvent:'NaCl 0.9%',
    unit:'mg/jam', tip:'5 – 15 mg/jam',
    note:'CCB; emergensi hipertensi — gunakan infusion pump; awasi hipotensi',
    sediaan:[
      {bentuk:'Ampul 10 mg/10 mL (1 mg/mL)', status:'FORNAS', ket:'Nikardipin HCl (Perdipine®); tersedia RS tipe A/B'},
    ]
  },
  {
    id:'ephed', name:'Efedrin (Ephedrine)', drugMg:50, volMl:50, solvent:'NaCl 0.9%',
    unit:'mg/jam', tip:'30 – 60 mg/jam (0.5 – 1 mg/menit) · Drip singkat 30 menit',
    note:'⚠️ Utamanya BOLUS IV. Drip hanya bila vasopressor lain tidak tersedia. Risiko tachyphylaxis tinggi setelah dosis berulang.',
    sediaan:[
      {bentuk:'Ampul 50 mg/1 mL (50 mg/mL)', status:'FORNAS',    ket:'Efedrin HCl · WAJIB DIENCERKAN sebelum IV · Tersedia kamar operasi/IGD'},
      {bentuk:'Ampul 25 mg/1 mL (25 mg/mL)', status:'FORNAS',    ket:'Sediaan lebih aman untuk titrasi bolus'},
      {bentuk:'Bolus lazim: 5–10 mg/dosis IV',status:'INFO-KLINIS',ket:'Encerkan 50 mg → 10 mL (5 mg/mL). Maks total 50 mg. Titrasi per tekanan darah.'},
    ]
  },
  {
    id:'phe', name:'Fenilefrin (Phenylephrine)', drugMg:10, volMl:50, solvent:'NaCl 0.9%',
    unit:'mcg/kg/menit', tip:'0.5 – 1.4 mcg/kg/menit (periop) · 0.5 – 6 mcg/kg/menit (syok vasodilatasi) · Maks 200 mcg/menit',
    note:'Pure α-1 agonis · Pilihan utama hipotensi spinal · Dapat menyebabkan bradikardia refleks · Awasi heart rate',
    sediaan:[
      {bentuk:'Ampul 10 mg/1 mL (10 mg/mL)',   status:'Non-FORNAS',  ket:'⚠️ Tidak termasuk FORNAS nasional · Tersedia terbatas RS tipe A / anestesi · WAJIB diencerkan'},
      {bentuk:'Prep drip: 10 mg / 50 mL NS',   status:'INFO-KLINIS', ket:'→ 200 mcg/mL (syringe pump). Atau 10 mg / 500 mL → 20 mcg/mL (infusion pump, lebih aman)'},
      {bentuk:'Bolus IV: 50–100 mcg/dosis',     status:'INFO-KLINIS', ket:'Maks 200 mcg/dosis · Tiap 1–2 menit sesuai respons · Encerkan ke 100 mcg/mL sebelum bolus'},
    ]
  },
];

// vaso: vasopressors / inotropes (violet)
// hipo: hypotensive agents / vasodilators (violet with white stripes)
// lain: others (white)
const CLASS_BY_ID = {
  norep: 'vaso', dobu: 'vaso', dopa: 'vaso', vaso: 'vaso', milri: 'vaso',
  epi: 'vaso', ephed: 'vaso', phe: 'vaso',
  ntg: 'hipo', isdn: 'hipo', nica: 'hipo',
  furo: 'lain',
};
PRESETS.forEach(p => { p.cls = CLASS_BY_ID[p.id] || 'lain'; });

export const CLASS_LABEL = {
  vaso: 'Vasopresor / Inotropik',
  hipo: 'Antihipertensi / Vasodilator',
  lain: 'Lain-lain',
  manual: 'Campuran manual',
  fluid: 'Cairan',
};
