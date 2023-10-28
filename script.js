function alternarDivs() {
    var div_mp = document.getElementById('mydiv_mp');
    var div_cm = document.getElementById('mydiv_cm');
	
    if (div_mp.style.display === 'block') {
        div_mp.style.display = 'none'; // Torna mydiv_mp invisível
        div_cm.style.display = 'block'; // Torna mydiv_cm visível
		document.getElementById('refeiçao').textContent = `Café da manhã`;
    } else {
        div_mp.style.display = 'block'; // Torna mydiv_mp visível
        div_cm.style.display = 'none'; // Torna mydiv_cm invisível
		document.getElementById('refeiçao').textContent = `Café da manhã e Jantar`;
    }
}


function npess(a, b) {
    return a + (a * b)
  }
  
  function desconto(a, b) {
    return a - (a * b)
  }
  
  function desconto2(a, b) {
    return a - (a / b)
  }
   
// Função para arredondar um número para baixo sem casas decimais
  function roundDownWithoutCents(value) {
	return Math.floor(value);
}