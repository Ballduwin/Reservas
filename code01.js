function calcular() {


//====================================================================================================	
	//				TABELA DE VALORES		
	//	Stan MP / Top MP / Suite J MP / Stan CM / Top CM  
	
	var jan = [1150, 1270, 1400, 1020, 1120]
	var fev = [870, 960, 1060, 700, 770]
	var mar = [790, 870, 960, 640, 700]
	var abr = [790, 870, 960, 640, 700]
	var mai = [720, 790, 870, 640, 700]
	var jun = [720, 790, 870, 640, 700]
	var jul = [600, 660, 700, 430, 475]
	var ago = [550, 600, 660, 430, 475]
	var set = [600, 660, 700, 430, 475]
	var out = [650, 715, 785, 510, 560]
	var nov = [715, 790, 870, 610, 670]
	var dez = [785, 865, 950, 735, 810]	

	var tarifa = [0, 0, 0, 0, 0]
	var mes = ""
  
    var npessoas = Number(document.getElementById("npessoas").value)
    const ckeckin = new Date(document.getElementById("checkin").value)
    const checkout = new Date(document.getElementById("ckeckout").value)	
	var data1 = ckeckin
	var data2 = checkout	
	
    var numero_criancas = Number(document.getElementById("chil").value)
	
	var adult = "Adultos"
	var child = "crianças"	
	
	var stan_pix = 0
	var top_pix = 0
	var suite_pix = 0

    var tot_smmp = 0
	var tot_desc_smmp = 0
	var smmp_pix = 0
	
	var tot_smcm = 0
	var tot_desc_smcm = 0
	var smcm_pix = 0	
	
	var day1 = ckeckin.getUTCDate()
	var day2 = checkout.getUTCDate()
	var year1 = ckeckin.getUTCFullYear()
	var year2 = checkout.getUTCFullYear()	
	var month1 = ckeckin.getUTCMonth()+1
	var month2 = checkout.getUTCMonth()+1
	
	if (npessoas == 1) {
		adult  = "Adulto"
		
	} else {
		
	}
	
	if (numero_criancas == 1) {
		child  = "criança"
		
	} else {
		
	}
			 
    switch (month1) {
  
      case 1:
        tarifa = jan
		mes = "Janeiro"
        break
  
      case 2:
		tarifa = fev
		mes = "Fevereiro"		
        break
  
      case 3:
        tarifa = mar		
        mes = "Março"
		break
  
      case 4:
        tarifa = abr		
        mes = "Abril"
		break
  
      case 5:
        tarifa = mai		
        mes = "Maio"
		break
  
      case 6:
		tarifa = jun		
        mes = "Junho"
		break
  
      case 7:
        tarifa = jul		
        mes = "Julho"
		break
  
      case 8:
        tarifa = ago		
        mes = "Agosto"
		break
  
      case 9:
        tarifa = set		
        mes = "Setembro"
		break
  
      case 10:
        tarifa = out		
        mes = "Outubro"
		break
  
      case 11:
        tarifa = nov		
        mes = "Novembro"
		break
  
      case 12:
        tarifa = dez		
        mes = "Dezembro"
		break
  
    }
  
    var difdiarias = Math.abs(checkout.getTime() - ckeckin.getTime())
    var diarias = Math.ceil(difdiarias / (1000 * 60 * 60 * 24))
  
	var tot_stanmp = diarias * tarifa[0]
	var tot_topmp = diarias * tarifa[1]
	var tot_sjmp = diarias * tarifa[2]
	var tot_smmp = diarias * ((tarifa[1] * 0.70) + tarifa[1])	
	var tot_stancm = diarias * tarifa[3]
	var tot_topcm = diarias * tarifa[4]
	var tot_smcm = diarias * ((tarifa[4] * 0.70) + tarifa[4])
	

	if (npessoas == 3) {
      tot_stancm = npess(tot_stancm, 0.30)
      tot_stanmp = npess(tot_stanmp, 0.30)
      tot_topcm = npess(tot_topcm, 0.30)
      tot_topmp = npess(tot_topmp, 0.30)     
      tot_sjmp = npess(tot_sjmp, 0.30)
    } else if (npessoas == 4) {
      tot_stancm = npess(tot_stancm, 0.60)
      tot_stanmp = npess(tot_stanmp, 0.60)
      tot_topcm = npess(tot_topcm, 0.60)
      tot_topmp = npess(tot_topmp, 0.60)      
      tot_sjmp = npess(tot_sjmp, 0.60)
    } else if (npessoas == 1) {
      tot_stancm = desconto(tot_stancm, 0.10)
      tot_stanmp = desconto(tot_stanmp, 0.10)
      tot_topcm = desconto(tot_topcm, 0.10)
      tot_topmp = desconto(tot_topmp, 0.10)      
      tot_sjmp = desconto(tot_sjmp, 0.10)
    } else {
  
    }  

    if (diarias == 2) {
      tot_desc_stancm = desconto(tot_stancm, 0.10)
      tot_desc_stanmp = desconto(tot_stanmp, 0.10)
      tot_desc_topcm = desconto(tot_topcm, 0.10)
      tot_desc_topmp = desconto(tot_topmp, 0.10)     
      tot_desc_sjmp = desconto(tot_sjmp, 0.10)
	  tot_desc_smmp = desconto(tot_smmp, 0.10)
	  tot_desc_smcm = desconto(tot_smcm, 0.10)
	  
    } else if (diarias == 3) {
      tot_desc_stancm = desconto(tot_stancm, 0.15)
      tot_desc_stanmp = desconto(tot_stanmp, 0.15)
      tot_desc_topcm = desconto(tot_topcm, 0.15)
      tot_desc_topmp = desconto(tot_topmp, 0.15)    
      tot_desc_sjmp = desconto(tot_sjmp, 0.15)
	  tot_desc_smmp = desconto(tot_smmp, 0.15)
	  tot_desc_smcm = desconto(tot_smcm, 0.15)
	  
    } else if (diarias >= 4) {
      tot_desc_stancm = desconto(tot_stancm, 0.20)
      tot_desc_stanmp = desconto(tot_stanmp, 0.20)
      tot_desc_topcm = desconto(tot_topcm, 0.20)
      tot_desc_topmp = desconto(tot_topmp, 0.20)     
      tot_desc_sjmp = desconto(tot_sjmp, 0.20)
	  tot_desc_smmp = desconto(tot_smmp, 0.20)
	  tot_desc_smcm = desconto(tot_smcm, 0.20)  
	  
	} else {  
	  tot_desc_stancm = desconto(tot_stancm, 0.00)
      tot_desc_stanmp = desconto(tot_stanmp, 0.00)
      tot_desc_topcm = desconto(tot_topcm, 0.00)
      tot_desc_topmp = desconto(tot_topmp, 0.00)     
      tot_desc_sjmp = desconto(tot_sjmp, 0.00)
	  tot_desc_smmp = desconto(tot_smmp, 0.00)
	  tot_desc_smcm = desconto(tot_smcm, 0.00)
	  
    } 

  //==================================================================================================
  // VALOR POR DIA
  
	var valor_pordia1 = tot_desc_stanmp / diarias
	var valor_pordia2 = tot_desc_topmp / diarias
    var valor_pordia3 = tot_desc_sjmp / diarias
    var valor_pordia4 = tot_desc_smmp / diarias     
    var valor_pordia5 = tot_desc_stancm / diarias
	var valor_pordia6 = tot_desc_topcm / diarias
	var valor_pordia7 = tot_desc_smcm / diarias

	
  //==================================================================================================
  // DESCONTO PIX
  
	stanmp_pix = desconto(tot_desc_stanmp, 0.05)
	topmp_pix = desconto(tot_desc_topmp, 0.05)
	suitemp_pix = desconto(tot_desc_sjmp, 0.05)
	smmp_pix = desconto(tot_desc_smmp, 0.05)
	
	stancm_pix = desconto(tot_desc_stancm, 0.05)
	topcm_pix = desconto(tot_desc_topcm, 0.05)
	smcm_pix = desconto(tot_desc_smcm, 0.05)
	
  
  //==================================================================================================
  
  
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

// Arredondar os valores sem centavos
tot_desc_stanmp = roundDownWithoutCents(tot_desc_stanmp)
tot_desc_topmp = roundDownWithoutCents(tot_desc_topmp)
tot_desc_sjmp = roundDownWithoutCents(tot_desc_sjmp)
tot_desc_smmp = roundDownWithoutCents(tot_desc_smmp)
tot_desc_stancm = roundDownWithoutCents(tot_desc_stancm)
tot_desc_topcm = roundDownWithoutCents(tot_desc_topcm)
tot_desc_smcm = roundDownWithoutCents(tot_desc_smcm)

stanmp_pix = roundDownWithoutCents(stanmp_pix)
topmp_pix = roundDownWithoutCents(topmp_pix)
suitemp_pix = roundDownWithoutCents(suitemp_pix)
smmp_pix = roundDownWithoutCents(smmp_pix)
stancm_pix = roundDownWithoutCents(stancm_pix)
topcm_pix = roundDownWithoutCents(topcm_pix)
smcm_pix = roundDownWithoutCents(smcm_pix)

tot_stanmp = roundDownWithoutCents(tot_stanmp)
tot_topmp = roundDownWithoutCents(tot_topmp)
tot_sjmp = roundDownWithoutCents(tot_sjmp)
tot_smmp = roundDownWithoutCents(tot_smmp)
tot_stancm = roundDownWithoutCents(tot_stancm)
tot_topcm = roundDownWithoutCents(tot_topcm)
tot_smcm = roundDownWithoutCents(tot_smcm)

valor_pordia1 = roundDownWithoutCents(valor_pordia1)
valor_pordia2 = roundDownWithoutCents(valor_pordia2)
valor_pordia3 = roundDownWithoutCents(valor_pordia3)
valor_pordia4 = roundDownWithoutCents(valor_pordia4)
valor_pordia5 = roundDownWithoutCents(valor_pordia5)
valor_pordia6 = roundDownWithoutCents(valor_pordia6)
valor_pordia7 = roundDownWithoutCents(valor_pordia7)


//============================================================================================

// CONVERTER A MOEDA PARA REAL BRASILEIRO
	
	tot_stanmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_stanmp)
	tot_stancm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_stancm)
	tot_desc_stanmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_stanmp)
	tot_desc_stancm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_stancm)
	stanmp_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(stanmp_pix)
	stancm_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(stancm_pix)
	
	tot_topmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_topmp)
	tot_topcm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_topcm)
	tot_desc_topmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_topmp)
	tot_desc_topcm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_topcm)
	topmp_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(topmp_pix)
	topcm_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(topcm_pix)
	
	tot_sjmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_sjmp)
	tot_desc_sjmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_sjmp)
	suitemp_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(suitemp_pix)
	
	tot_smmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_smmp)
	tot_smcm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_smcm)
	tot_desc_smmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_smmp)
	tot_desc_smcm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_smcm)
	smmp_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(smmp_pix)
	smcm_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(smcm_pix)
	
	valor_pordia1 =  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor_pordia1)
	valor_pordia2 =  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor_pordia2)
	valor_pordia3 =  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor_pordia3)
	valor_pordia4 =  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor_pordia4)
	valor_pordia5 =  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor_pordia5)
	valor_pordia6 =  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor_pordia6)
	valor_pordia7 =  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor_pordia7)
	
	
		


//===========================================================================================================	

	document.getElementById("periodo").innerHTML = `<strong>Período: de *${day1}/${month1}/${year1} à ${day2}/${month2}/${year2}*</strong><br>`

    document.getElementById("stmp").innerHTML = `O valor em Apto Standard é de ${tot_stanmp} por *<strong>${tot_desc_stanmp}</strong>* - no PIX *<strong>${stanmp_pix}</strong>* Incluso *<strong>café da manhã e jantar</strong>*<br>
	(Valor da diária *<strong>${valor_pordia1}</strong>*)`
	    
    document.getElementById("tcmp").innerHTML = `O valor em Apto Top Class é de ${tot_topmp} por *<strong>${tot_desc_topmp}</strong>* - no PIX *<strong>${topmp_pix}</strong>* Incluso *<strong>café da manhã e jantar</strong>*<br>	
	(Valor da diária *<strong>${valor_pordia2}</strong>*)`
	
    document.getElementById("sjmp").innerHTML = `O valor em Apto Suíte Junior é de ${tot_sjmp} por *<strong>${tot_desc_sjmp}</strong>* - no PIX *<strong>${suitemp_pix}</strong>* Incluso *<strong>café da manhã e jantar</strong>*<br>	
	(Valor da diária *<strong>${valor_pordia3}</strong>*)`
	
	document.getElementById("smmp").innerHTML = `O valor em Apto Suíte Master é de ${tot_smmp} por *<strong>${tot_desc_smmp}</strong>* - no PIX *<strong>${smmp_pix}</strong>* Incluso *<strong>café da manhã e jantar</strong>*<br>
	(Valor da diária *<strong>${valor_pordia4}</strong>*)`
			
	document.getElementById("stcm").innerHTML = `O valor em Apto Standard é de ${tot_stancm} por *<strong>${tot_desc_stancm}</strong>* - no PIX *<strong>${stancm_pix}</strong>* Incluso *<strong>café da manhã</strong>*<br>
	(Valor da diária *<strong>${valor_pordia5}</strong>*)`
	
	document.getElementById("tccm").innerHTML = `O valor em Apto Top Class é de ${tot_topcm} por *<strong>${tot_desc_topcm}</strong>* - no PIX *<strong>${topcm_pix}</strong>* Incluso *<strong>café da manhã</strong>*<br>
	(Valor da diária *<strong>${valor_pordia6}</strong>*)`
	
	document.getElementById("smcm").innerHTML = `O valor em Apto Suíte Master é de ${tot_smcm} por *<strong>${tot_desc_smcm}</strong>* - no PIX *<strong>${smcm_pix}</strong>* Incluso *<strong>café da manhã</strong>*<br>
	(Valor da diária *<strong>${valor_pordia7}</strong>*)`
	
    	
	document.getElementById("tarifario").innerHTML = `Tarifas: <strong>${mes} ${year1}</strong><br>
	<br>
	<strong>Standard MP R$ ${tarifa[0]},00<br> Top Class MP R$ ${tarifa[1]},00<br> Suite Junior MP R$ ${tarifa[2]},00<br> Standard CM R$ ${tarifa[3]},00<br> Top Class CM R$ ${tarifa[4]},00<br></strong>`

if (numero_criancas === 0) {
  // Se numero_criancas for igual a 0, exiba apenas parte do parágrafo
  document.getElementById("ndias").innerHTML = `*_Obrigado por escolher o Ubatuba Palace Hotel!!!_*<br><br>Ao todo são *<strong>${diarias}</strong> diárias para <strong>${npessoas} ${adult}*</strong>`;
} else {
  // Caso contrário, exiba o parágrafo completo
  document.getElementById("ndias").innerHTML = `*_Obrigado por escolher o Ubatuba Palace Hotel!!!_*<br><br>Ao todo são *<strong>${diarias}</strong> diárias para <strong>${npessoas} ${adult} e ${numero_criancas} ${child}*</strong>`;
}







}