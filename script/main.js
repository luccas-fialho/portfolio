const campoNomeNav = document.getElementById('nome');
const campoNomeTitulo = document.querySelector('.nome')
const campoCargo = document.getElementById('cargo')

const nome = '<Luccas/>';

function efeitoDigitacao(nome, campo, tempo) {
  let charAtual = '';
  let charIndex = 0;
  setInterval(() => {
    charAtual = nome.slice(0, charIndex++);
    campo.textContent = charAtual;
  }, tempo);
}

efeitoDigitacao(nome, campoNomeNav, 400);
