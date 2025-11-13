const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btn = document.getElementById('calc-btn');
const sumEl = document.getElementById('sum');

function parseNumber(v){
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
}

function updateSum(){
  const a = parseNumber(num1.value);
  const b = parseNumber(num2.value);
  const s = a + b;
  // show integer without decimal when appropriate
  sumEl.textContent = Number.isInteger(s) ? s : String(s);
}

// calculate on button click
btn.addEventListener('click', updateSum);
// bonus: auto-calculate when inputs change
num1.addEventListener('input', updateSum);
num2.addEventListener('input', updateSum);

// initialize
updateSum();
