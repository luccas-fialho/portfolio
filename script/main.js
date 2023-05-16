const campoNomeNav = document.getElementById('nome');
const campoNomeTitulo = document.querySelector('.nome')
const campoCargo = document.getElementById('cargo')

const nome = '<Luccas/>';
const nomeTitulo = 'Luccas Fialho'
const nomeCargo = 'FrontEnd Developer'


function efeitoDigitacao(nome, campo, tempo) {
  let charAtual = '';
  let charIndex = 0;
  setInterval(() => {
    charAtual = nome.slice(0, charIndex++);
    campo.textContent = charAtual;
  }, tempo);
}

efeitoDigitacao(nome, campoNomeNav, 400);
efeitoDigitacao(nomeTitulo, campoNomeTitulo, 200);
efeitoDigitacao(nomeCargo, campoCargo, 100)
