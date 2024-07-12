function calcular() {


//====================================================================================================	
	//				TABELA DE VALORES		
	//	Stan MP / Top MP / Suite J MP / Stan CM / Top CM  
	
	var jan = [1065, 1165, 1280, 935, 1020]
	var fev = [800, 880, 965, 640, 700]
	var mar = [725, 800, 880, 590, 650]
	var abr = [725, 800, 880, 590, 650]
	var mai = [660, 725, 820, 590, 650]
	var jun = [630, 700, 770, 500, 550]
	var jul = [745, 820, 900, 615, 680]
	var ago = [660, 725, 820, 590, 680]
	var set = [710, 780, 860, 590, 680]
	var out = [785, 865, 950, 630, 690]
	var nov = [865, 950, 1050, 735, 810]
	var dez = [950, 1050, 1150, 810, 995]

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
	var show_desconto = ""
	var show_diarianormal = 0	
	
	var day1 = ckeckin.getUTCDate()
	var day2 = checkout.getUTCDate()
	var year1 = ckeckin.getUTCFullYear()
	var year2 = checkout.getUTCFullYear()	
	var month1 = ckeckin.getUTCMonth()+1
	var month2 = checkout.getUTCMonth()+1
	
	var difdiarias = Math.abs(checkout.getTime() - ckeckin.getTime())
    var diarias = Math.ceil(difdiarias / (1000 * 60 * 60 * 24))
	
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
  
    var diaria_stanmp = tarifa[0]
	var diaria_topmp = tarifa[1]
	var diaria_sjmp = tarifa[2]
	var diaria_smmp = ((tarifa[1] * 0.70) + tarifa[1])	
	var diaria_stancm = tarifa[3]
	var diaria_topcm = tarifa[4]
	var diaria_smcm = ((tarifa[4] * 0.70) + tarifa[4])
  
  if (npessoas == 3) {
      diaria_stanmp = npess(diaria_stanmp, 0.30)
      diaria_topmp = npess(diaria_topmp, 0.30)
      diaria_sjmp = npess(diaria_sjmp, 0.30)     
      diaria_stancm = npess(diaria_stancm, 0.30)
	  diaria_topcm = npess(diaria_topcm, 0.30)
	  
	  
    } else if (npessoas == 4) {
      diaria_stanmp = npess(diaria_stanmp, 0.60)
      diaria_topmp = npess(diaria_topmp, 0.60)
      diaria_sjmp = npess(diaria_sjmp, 0.60)      
      diaria_stancm = npess(diaria_stancm, 0.60)
	  diaria_topcm = npess(diaria_topcm, 0.60)
	  
    } else if (npessoas == 1) {
      diaria_stanmp = desconto(diaria_stanmp, 0.10)
      diaria_topmp = desconto(diaria_topmp, 0.10)
      diaria_sjmp = desconto(diaria_sjmp, 0.10)     
      diaria_stancm = desconto(diaria_stancm, 0.10)
	  diaria_topcm = desconto(diaria_topcm, 0.10)
	  
    } else {
  
    }
	
	//----------------------------------------------------------------------
	// Arredondar os valores sem centavos
	
	diaria_stanmp = roundDownWithoutCents(diaria_stanmp)
	diaria_topmp = roundDownWithoutCents(diaria_topmp)
	diaria_sjmp = roundDownWithoutCents(diaria_sjmp)
	diaria_smmp = roundDownWithoutCents(diaria_smmp)
	diaria_stancm = roundDownWithoutCents(diaria_stancm)
	diaria_topcm = roundDownWithoutCents(diaria_topcm)
	diaria_smcm = roundDownWithoutCents(diaria_smcm)
	
	//----------------------------------------------------------------------
	      
	var tot_stanmp = diarias * diaria_stanmp
	var tot_topmp = diarias * diaria_topmp
	var tot_sjmp = diarias * diaria_sjmp
	var tot_smmp = diarias * diaria_smmp	
	var tot_stancm = diarias * diaria_stancm
	var tot_topcm = diarias * diaria_topcm
	var tot_smcm = diarias * diaria_smcm	

    if (diarias == 2) {
		
		tot_desc_stanmp = desconto(tot_stanmp, 0.10)
		tot_desc_topmp = desconto(tot_topmp, 0.10)   
		tot_desc_sjmp = desconto(tot_sjmp, 0.10)
		tot_desc_smmp = desconto(tot_smmp, 0.10)
		tot_desc_stancm = desconto(tot_stancm, 0.10)
		tot_desc_topcm = desconto(tot_topcm, 0.10)
		tot_desc_smcm = desconto(tot_smcm, 0.10)
		show_desconto = "10%"
	  
    } else if (diarias == 3) {
		
        tot_desc_stanmp = desconto(tot_stanmp, 0.15)
		tot_desc_topmp = desconto(tot_topmp, 0.15)   
		tot_desc_sjmp = desconto(tot_sjmp, 0.15)
		tot_desc_smmp = desconto(tot_smmp, 0.15)
		tot_desc_stancm = desconto(tot_stancm, 0.15)
		tot_desc_topcm = desconto(tot_topcm, 0.15)
		tot_desc_smcm = desconto(tot_smcm, 0.15)
		show_desconto = "15%"
	  
    } else if (diarias >= 4) {
		
        tot_desc_stanmp = desconto(tot_stanmp, 0.20)
		tot_desc_topmp = desconto(tot_topmp, 0.20)   
		tot_desc_sjmp = desconto(tot_sjmp, 0.20)
		tot_desc_smmp = desconto(tot_smmp, 0.20)
		tot_desc_stancm = desconto(tot_stancm, 0.20)
		tot_desc_topcm = desconto(tot_topcm, 0.20)
		tot_desc_smcm = desconto(tot_smcm, 0.20)
		show_desconto = "20%"
	  
	} else {
		
	    tot_desc_stanmp = desconto(tot_stanmp, 0)
		tot_desc_topmp = desconto(tot_topmp, 0)   
		tot_desc_sjmp = desconto(tot_sjmp, 0)
		tot_desc_smmp = desconto(tot_smmp, 0)
		tot_desc_stancm = desconto(tot_stancm, 0)
		tot_desc_topcm = desconto(tot_topcm, 0)
		tot_desc_smcm = desconto(tot_smcm, 0)
		show_desconto = "0%"
	  
    } 
	
	tot_desc_stancm = roundDownWithoutCents(tot_desc_stancm)
	tot_desc_topmp = roundDownWithoutCents(tot_desc_topmp)
	tot_desc_sjmp = roundDownWithoutCents(tot_desc_sjmp)
	tot_desc_smmp = roundDownWithoutCents(tot_desc_smmp)
	tot_desc_stancm = roundDownWithoutCents(tot_desc_stancm)
	tot_desc_topcm = roundDownWithoutCents(tot_desc_topcm)
	tot_desc_smcm = roundDownWithoutCents(tot_desc_smcm)	
		
	var diaria_com_desconto_stanmp = tot_desc_stanmp / diarias
	var diaria_com_desconto_topmp = tot_desc_topmp / diarias
	var diaria_com_desconto_sjmp = tot_desc_sjmp / diarias
	var diaria_com_desconto_smmp = tot_desc_smmp / diarias
	var diaria_com_desconto_stancm = tot_desc_stancm / diarias
	var diaria_com_desconto_topcm = tot_desc_topcm / diarias
	var diaria_com_desconto_smcm = tot_desc_smcm / diarias	
		
	
	//========================================================================
	// DESCONTO PIX
  
	stanmp_pix = desconto(tot_desc_stanmp, 0.05)
	topmp_pix = desconto(tot_desc_topmp, 0.05)
	sjmp_pix = desconto(tot_desc_sjmp, 0.05)
	smmp_pix = desconto(tot_desc_smmp, 0.05)
	stancm_pix = desconto(tot_desc_stancm, 0.05)
	topcm_pix = desconto(tot_desc_topcm, 0.05)
	smcm_pix = desconto(tot_desc_smcm, 0.05)
	
	
	//==========================================================================
	// Arredondar os valores sem centavos
	
	stanmp_pix = roundDownWithoutCents(stanmp_pix)
	topmp_pix = roundDownWithoutCents(topmp_pix)
	sjmp_pix = roundDownWithoutCents(sjmp_pix)
	smmp_pix = roundDownWithoutCents(smmp_pix)
	stancm_pix = roundDownWithoutCents(stancm_pix)
	topcm_pix = roundDownWithoutCents(topcm_pix)
	smcm_pix = roundDownWithoutCents(smcm_pix)
	
	diaria_com_desconto_stanmp = roundDownWithoutCents(diaria_com_desconto_stanmp)
	diaria_com_desconto_topmp = roundDownWithoutCents(diaria_com_desconto_topmp)
	diaria_com_desconto_sjmp = roundDownWithoutCents(diaria_com_desconto_sjmp)
	diaria_com_desconto_smmp = roundDownWithoutCents(diaria_com_desconto_smmp)
	diaria_com_desconto_stancm = roundDownWithoutCents(diaria_com_desconto_stancm)
	diaria_com_desconto_topcm = roundDownWithoutCents(diaria_com_desconto_topcm)
	diaria_com_desconto_smcm = roundDownWithoutCents(diaria_com_desconto_smcm)
	
	
	//===========================================================================
	// CONVERTER A MOEDA PARA REAL BRASILEIRO
	
	tot_stanmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_stanmp)
	tot_topmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_topmp)
	tot_sjmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_sjmp)
	tot_smmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_smmp)
	tot_stancm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_stancm)
	tot_topcm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_topcm)
	tot_smcm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_smcm)
	
	stanmp_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(stanmp_pix)
	topmp_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(topmp_pix)
	sjmp_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sjmp_pix)
	smmp_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(smmp_pix)
	stancm_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(stancm_pix)
	topcm_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(topcm_pix)
	smcm_pix = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(smcm_pix)
	
	tot_desc_stanmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_stanmp)
	tot_desc_topmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_topmp)
	tot_desc_sjmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_sjmp)
	tot_desc_smmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_smmp)
	tot_desc_stancm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_stancm)
	tot_desc_topcm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_topcm)
	tot_desc_smcm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(tot_desc_smcm)
	
	diaria_stanmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_stanmp)
	diaria_topmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_topmp)
	diaria_sjmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_sjmp)
	diaria_smmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_smmp)
	diaria_stancm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_stancm)
	diaria_topcm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_topcm)
	diaria_smcm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_smcm)	
	
	diaria_com_desconto_stanmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_com_desconto_stanmp)
	diaria_com_desconto_topmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_com_desconto_topmp)
	diaria_com_desconto_sjmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_com_desconto_sjmp)
	diaria_com_desconto_smmp = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_com_desconto_smmp)
	diaria_com_desconto_stancm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_com_desconto_stancm)
	diaria_com_desconto_topcm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_com_desconto_topcm)
	diaria_com_desconto_smcm = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(diaria_com_desconto_smcm)

//===========================================================================================================

if (numero_criancas === 0) {
  // Se numero_criancas for igual a 0, exiba apenas parte do parágrafo
  document.getElementById('pacote').textContent = `Pacote de Hospedagem: ${diarias} Diárias para ${npessoas} ${adult}`;
} else {
  // Caso contrário, exiba o parágrafo completo
  document.getElementById('pacote').textContent = `Pacote de Hospedagem: ${diarias} Diárias para ${npessoas} ${adult} e ${numero_criancas} ${child}`;
}

//	document.getElementById('pacote').textContent = `Pacote de Hospedagem: ${diarias} Diárias para ${npessoas} ${adult} e ${numero_criancas} ${child}`;
	document.getElementById('periodo').textContent = `${day1}/${month1}/${year1} à ${day2}/${month2}/${year2}`;
	document.getElementById('desconto').textContent = `${show_desconto}`;	
	
	document.getElementById('valorStandard').textContent = `${tot_desc_stanmp}`;
    document.getElementById('descontoStandard').textContent = `${stanmp_pix}`;	
    document.getElementById('diariaNormalStandard').textContent = `${diaria_stanmp}`;
    document.getElementById('diariaDescontoStandard').textContent = `${diaria_com_desconto_stanmp}`;

    document.getElementById('valorTopClass').textContent = `${tot_desc_topmp}`;
    document.getElementById('descontoTopClass').textContent = `${topmp_pix}`;	
    document.getElementById('diariaNormalTopClass').textContent = `${diaria_topmp}`;
    document.getElementById('diariaDescontoTopClass').textContent = `${diaria_com_desconto_topmp}`;
 
    document.getElementById('valorSuiteJunior').textContent = `${tot_desc_sjmp}`;
    document.getElementById('descontoSuiteJunior').textContent = `${sjmp_pix}`;	
    document.getElementById('diariaNormalSuiteJunior').textContent = `${diaria_sjmp}`;
    document.getElementById('diariaDescontoSuiteJunior').textContent = `${diaria_com_desconto_sjmp}`;
	
	document.getElementById('valorSuiteMaster').textContent = `${tot_desc_smmp}`;
    document.getElementById('descontoSuiteMaster').textContent = `${smmp_pix}`;	
    document.getElementById('diariaNormalSuiteMaster').textContent = `${diaria_smmp}`;
    document.getElementById('diariaDescontoSuiteMaster').textContent = `${diaria_com_desconto_smmp}`;
		

	document.getElementById('valorStandard_cm').textContent = `${tot_desc_stancm}`;
    document.getElementById('descontoStandard_cm').textContent = `${stancm_pix}`;	
    document.getElementById('diariaNormalStandard_cm').textContent = `${diaria_stancm}`;
    document.getElementById('diariaDescontoStandard_cm').textContent = `${diaria_com_desconto_stancm}`;
	
	document.getElementById('valorTopClass_cm').textContent = `${tot_desc_topcm}`;
    document.getElementById('descontoTopClass_cm').textContent = `${topcm_pix}`;	
    document.getElementById('diariaNormalTopClass_cm').textContent = `${diaria_topcm}`;
    document.getElementById('diariaDescontoTopClass_cm').textContent = `${diaria_com_desconto_topcm}`;
	
	document.getElementById('valorSuiteMaster_cm').textContent = `${tot_desc_smcm}`;
    document.getElementById('descontoSuiteMaster_cm').textContent = `${smcm_pix}`;	
    document.getElementById('diariaNormalSuiteMaster_cm').textContent = `${diaria_smcm}`;
    document.getElementById('diariaDescontoSuiteMaster_cm').textContent = `${diaria_com_desconto_smcm}`;
	
	
	
	
	

}



