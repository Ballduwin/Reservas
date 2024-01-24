
	function calcular() {
  
						//Stan MP / Top MP / Suite J MP
	
	var CARNAVAL = 		[3550, 3900, 0, 4720, 5200, 5710, 5390, 5930, 6520]
	var PASCOA =  		[2200, 2420, 2660, 2900, 3200, 3500]
	var TIRADENTES = 	[1530, 1680, 0, 2260, 2480, 2730]
	var MAIO_1 = 	 	[1530, 1680, 0, 2260, 2480, 2730]
	var CORPUS = 	 	[1650, 1810, 0, 2240, 2465, 2700, 2820, 3100, 3415]
	var DIADOSPAIS = 	[825, 900, 990, 1375, 1500, 1650, 0, 0, 0]
	var INDEPENDENCIA = [1760, 1940, 0, 2300, 2530, 2780, 2930, 3230, 3540]
	var OUTUBRO_12 = 	[2100, 2300, 0, 2740, 3015, 3320, 3300, 3600, 3975]
	var FINADOS = 		[2245, 2470, 2720, 3065, 3370, 3710, 3630, 3990, 4400]
	var NATAL = 		[4320, 4760, 0, 5520, 6080, 6720, 6470, 7100, 7830]
	var REVEILLON = 	[6080, 6680, 0, 7360, 8100, 8900, 8850, 9750, 10703, 10500, 11900, 13300]
	
    var npessoas = Number(document.getElementById("npessoas").value)
	var criancas = Number(document.getElementById("chil").value)
	var nomepacote = ""
	var adult = "Adultos"
	var child = "crianças"
	
	if (npessoas == 1) {
		adult = "Adulto"
	} else {
		
	}
	
	if (criancas == 1) {
		child = "criança"
	} else {
		
	}
	    
	var pacotes = document.getElementsByName("Pacotes")[0]
	var valorSelecionado = pacotes.options[pacotes.selectedIndex].value
	var paragrafo3d = document.querySelector('#tres_dias')
	var paragrafo4d = document.querySelector('#quatro_dias')
	var paragrafo5d = document.querySelector('#cinco_dias')
	var cafe_e_jantar = document.querySelector('#cafe_e_jantar')
	var ceia_natal = document.querySelector('#ceia_natal')
	var ceia_revei = document.querySelector('#ceia_revei')
  
	var valor = 0
	var ndias = ""
	
  
	if (valorSelecionado == "PASCOA") {
      valor = PASCOA
	  ndias = ["2", "3"]
	  nomepacote = "PÁSCOA"
	  paragrafo4d.style.display = "none"
	  paragrafo5d.style.display = "none"	  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes esta incluso café da manhã e jantar*`	  
	  
    } else if (valorSelecionado == "TIRADENTES") {
      valor = TIRADENTES
	  ndias = ["2", "3"]
	  nomepacote = "TIRADENTES"
	  paragrafo4d.style.display = "none"
	  paragrafo5d.style.display = "none"	  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes esta incluso café da manhã e jantar*`  
	  
    } else if (valorSelecionado == "MAIO_1") {
      valor = MAIO_1
	  ndias = ["2", "3"]
	  nomepacote = "1° DE MAIO"
	  paragrafo4d.style.display = "none"
	  paragrafo5d.style.display = "none"	  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes esta incluso café da manhã e jantar*`
	  
	} else if (valorSelecionado == "CORPUS") {
      
      valor = CORPUS
	  ndias = ["3", "4", "5"]
	  nomepacote = "CORPUS 24"
	  paragrafo4d.style.display = "block"
	  paragrafo5d.style.display = "none"	  
	  cafe_e_jantar.style.display = "block"	  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes esta incluso café da manhã e jantar*`
			    	  
	} else if (valorSelecionado == "DIADOSPAIS") {
      valor = DIADOSPAIS
	  ndias = ["2", "3"]
	  nomepacote = "DIA DOS PAIS"
	  paragrafo3d.style.display = "block"
	  paragrafo4d.style.display = "none"
	  paragrafo5d.style.display = "none"	  
	  document.getElementById("cafe_e_jantar").innerHTML = `Em nossos pacotes está incluso café da manhã e jantar, e no domingo dia 13/08, um almoço para *duas pessoas* (uma criança de até 5 anos é cortesia)`
	  
	} else if (valorSelecionado == "INDEPENDENCIA") {
      valor = INDEPENDENCIA
	  ndias = ["2", "3", "4"]
	  nomepacote = "INDEPENDÊNCIA"
	  paragrafo4d.style.display = "block"
	  paragrafo3d.style.display = "block"
	  paragrafo5d.style.display = "none"	  
	  cafe_e_jantar.style.display = "block"
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes esta incluso café da manhã e jantar*`
	  
	} else if (valorSelecionado == "OUTUBRO_12") {
      valor = OUTUBRO_12
	  ndias = ["2", "3", "4"]
	  nomepacote = "12 DE OUTUBRO"
	  paragrafo4d.style.display = "block"
	  paragrafo5d.style.display = "none"	  
	  cafe_e_jantar.style.display = "block"	  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes esta incluso café da manhã e jantar*`
	  
	} else if (valorSelecionado == "FINADOS") {
	alert("FAZER DIÁRIA NORMAL CHEIA SEM DESCONTO")	      
	/*valor = FINADOS
	  ndias = ["2", "3", "4"]
	  nomepacote = "FINADOS"
	  paragrafo4d.style.display = "block"
	  paragrafo5d.style.display = "none"
	  ceia_natal.style.display = "none"
	  ceia_revei.style.display = "none"	  
	  cafe_e_jantar.style.display = "block"*/
	  	  
	} else if (valorSelecionado == "NATAL") {
      valor = NATAL
	  ndias = ["3", "4", "5"]
	  nomepacote = "NATAL"
	  paragrafo4d.style.display = "block"
	  paragrafo5d.style.display = "none"	 	  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes de Natal está incluso café da manhã e jantar e no dia 24/12 a Ceia de Natal com música ao vivo e a visita do Papai Noel*`
	  
	} else if (valorSelecionado == "REVEILLON") {
      valor = REVEILLON
	  ndias = ["3", "4", "5", "7"]
	  nomepacote = "REVEILLON 23/24"
	  paragrafo4d.style.display = "block"
	  paragrafo5d.style.display = "block"	 	  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes esta incluso café da manhã e jantar, a Ceia de Réveillon com coquetel de entrada e banda ao vivo, @bandabala, além de recreação infantil todos os dias*` 
	  	  		  
	} else if (valorSelecionado == "CARNAVAL") {
      valor = CARNAVAL
	  ndias = ["3", "4", "5"]
	  nomepacote = "CARNAVAL 24"
	  paragrafo4d.style.display = "block"
	  paragrafo5d.style.display = "none"	  
	  cafe_e_jantar.style.display = "block"	  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes esta incluso café da manhã e jantar*`
			  
    } else {
  
    }
	
	if (npessoas == 3) {			
		valor = valor.map(pess_3)
		valor = valor.map(real_br)	
		
		} else if (npessoas == 4) {		
		valor = valor.map(pess_4)
		valor = valor.map(real_br)	
		
		} else if (npessoas == 1) {
		valor = valor.map(pess_1)
	  	valor = valor.map(real_br)
		
		} else {
		valor = valor.map(real_br)
    }
  	    
	function pess_3(num) {
	return num * .30 + num
	}
	
	function pess_4(num) {
	return num * .60 + num
	}
	
	function pess_1(num) {
	return - (num * .10) + num
	}
		
	function real_br (num) {
	return num  = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num)

	}	
	
if (criancas == 0) {
document.getElementById("nome_pacote").innerHTML = `*<strong>PACOTE DE <strong>${nomepacote}</strong>* – Para ${npessoas} ${adult}`
} else {
document.getElementById("nome_pacote").innerHTML = `*<strong>PACOTE DE <strong>${nomepacote}</strong>* – Para ${npessoas} ${adult} e ${criancas} ${child}`	
}
document.getElementById("dois_dias").innerHTML = `*<strong>${ndias[0]} Dias</strong>*<br>
Apto Standard – Pacote de *${valor[0]}*<br>
Apto Top Class – Pacote de *${valor[1]}*<br>
Apto Suíte Junior – Pacote de *${valor[2]}*<br>`

document.getElementById("tres_dias").innerHTML = `*<strong>${ndias[1]} Dias</strong>*<br>
Apto Standard – Pacote de *${valor[3]}*<br>
Apto Top Class – Pacote de *${valor[4]}*<br>
Apto Suíte Junior – Pacote de *${valor[5]}*<br>`

document.getElementById("quatro_dias").innerHTML = `*<strong>${ndias[2]} Dias</strong>*<br>
Apto Standard – Pacote de *${valor[6]}*<br>
Apto Top Class – Pacote de *${valor[7]}*<br>
Apto Suíte Junior – Pacote de *${valor[8]}*<br>`

document.getElementById("cinco_dias").innerHTML = `*<strong>${ndias[3]} Dias</strong>*<br>
Apto Standard – Pacote de *${valor[9]}*<br>
Apto Top Class – Pacote de *${valor[10]}*<br>
Apto Suíte Junior – Pacote de *${valor[11]}*<br>`

}
