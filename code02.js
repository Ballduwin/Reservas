
	function calcular() {
  
						//Stan MP / Top MP / Suite J MP
	
	var CARNAVAL = 		[3550, 3900, 0, 4720, 5200, 5710, 5390, 5930, 6520]
	var PASCOA =  		[2900, 3200, 3660, 3600, 3960, 4360]
	var TIRADENTES = 	[2900, 3200, 3660, 3600, 3960, 4360]
	var MAIO_1 = 	 	[1630, 1780, 2200, 2420, 2670, 2940, 3060, 3370, 3700]
	var CORPUS = 	 	[1650, 1810, 0, 2240, 2465, 2700, 2820, 3100, 3415]
	var DIADOSPAIS = 	[990, 1090, 1200, 1650, 1815, 1950, 0, 0, 0]
	var DIADASMAES = 	[990, 1088, 1230, 1650, 1813, 2050, 0, 0, 0]
	var PROCLAMACAO =	[1980, 2100, 2200, 2700, 2970, 3270, 0, 0, 0]
	var OUTUBRO_12 = 	[2100, 2300, 0, 2740, 3015, 3320, 3300, 3600, 3975]
	var FINADOS = 		[2245, 2470, 2720, 3065, 3370, 3710, 3630, 3990, 4400]
	var NATAL = 		[4760, 5230, 0, 6100, 6710, 7380, 7120, 7830, 8620]
	var REVEILLON = 	[6700, 7370, 8100, 8100, 8910, 9800, 9750, 10725, 11800, 11550, 12700, 13980]
	
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
	  ndias = ["3", "4"]
	  nomepacote = "PÁSCOA"
	  paragrafo4d.style.display = "none"
	  paragrafo5d.style.display = "none"	  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes está incluso café da manhã e jantar*`	  
	  
    } else if (valorSelecionado == "TIRADENTES") {
      valor = TIRADENTES
	  ndias = ["3", "4"]
	  nomepacote = "TIRADENTES"
	  paragrafo4d.style.display = "none"
	  paragrafo5d.style.display = "none"
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes está incluso café da manhã e jantar*`  
	  
    } else if (valorSelecionado == "MAIO_1") {
      valor = MAIO_1
	  ndias = ["2", "3", "4"]
	  nomepacote = "1° DE MAIO"
	  paragrafo4d.style.display = "block"
	  paragrafo5d.style.display = "none"	  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes está incluso café da manhã e jantar*`
	  
	} else if (valorSelecionado == "CORPUS") {
      
      valor = CORPUS
	  ndias = ["2", "3", "4"]
	  nomepacote = "CORPUS CHRISTI"
	  paragrafo4d.style.display = "block"
	  paragrafo5d.style.display = "none"
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes está incluso café da manhã e jantar*`
			    	  
	} else if (valorSelecionado == "DIADOSPAIS") {
      valor = DIADOSPAIS
	  ndias = ["2", "3"]
	  nomepacote = "DIA DOS PAIS"
	  paragrafo3d.style.display = "block"
	  paragrafo4d.style.display = "none"
	  paragrafo5d.style.display = "none"	  
	  document.getElementById("cafe_e_jantar").innerHTML = `Em nossos pacotes está incluso café da manhã e jantar, e no domingo um almoço para *duas pessoas* (uma criança de até 5 anos é cortesia)`
		    	  
	} else if (valorSelecionado == "DIADASMAES") {
      valor = DIADASMAES
	  ndias = ["2", "3"]
	  nomepacote = "DIA DAS MÃES"
	  paragrafo3d.style.display = "block"
	  paragrafo4d.style.display = "none"
	  paragrafo5d.style.display = "none"	  
	  document.getElementById("cafe_e_jantar").innerHTML = `Em nossos pacotes está incluso café da manhã e jantar, e no domingo um almoço para *duas pessoas* (uma criança de até 5 anos é cortesia)`
	  		
	} else if (valorSelecionado == "PROCLAMACAO") {
      valor = PROCLAMACAO
	  ndias = ["2", "3"]
	  nomepacote = "PROCLAMAÇÃO DA REPÚBLICA"
	  paragrafo3d.style.display = "block"
	  paragrafo4d.style.display = "none"
	  paragrafo5d.style.display = "none"	  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes está incluso café da manhã e jantar*`
	  
	} else if (valorSelecionado == "OUTUBRO_12") {
      valor = OUTUBRO_12
	  ndias = ["2", "3", "4"]
	  nomepacote = "12 DE OUTUBRO"
	  paragrafo4d.style.display = "block"
	  paragrafo5d.style.display = "none"	  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes está incluso café da manhã e jantar*`
	  
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
	  nomepacote = "REVEILLON"
	  paragrafo4d.style.display = "block"
	  paragrafo5d.style.display = "block"	 	  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes está incluso café da manhã e jantar, a Ceia de Réveillon com coquetel de entrada e banda ao vivo, @bandabala, além de recreação infantil todos os dias*` 
	  	  		  
	} else if (valorSelecionado == "CARNAVAL") {
      valor = CARNAVAL
	  ndias = ["3", "4", "5"]
	  nomepacote = "CARNAVAL"
	  paragrafo4d.style.display = "block"
	  paragrafo5d.style.display = "none"  
	  document.getElementById("cafe_e_jantar").innerHTML = `*Em nossos pacotes está incluso café da manhã e jantar*`
			  
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
