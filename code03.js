document.getElementById("botao_voucher").addEventListener("click", function() {
    // Exibe a caixa de diálogo
    document.getElementById("dialog").style.display = "block";
});

document.getElementById("confirmOption").addEventListener("click", function() {
    // Obtém o valor selecionado na caixa de seleção
	
	var valor_voucher = ""
	var npessoas = Number(document.getElementById("npessoas").value)
    const ckeckin = new Date(document.getElementById("checkin").value)
    const checkout = new Date(document.getElementById("ckeckout").value)	
	var data1 = ckeckin
	var data2 = checkout

	var nome_ap = ""
	var refeicao = ""
	var desc_pix = ""	
	var adult = "Adultos"
	var child = "Crianças"	
	
    var numero_criancas = Number(document.getElementById("chil").value)
	
	var day1 = ckeckin.getUTCDate()
	var day2 = checkout.getUTCDate()
	var year1 = ckeckin.getUTCFullYear()
	var year2 = checkout.getUTCFullYear()	
	var month1 = ckeckin.getUTCMonth()+1
	var month2 = checkout.getUTCMonth()+1	
	
    var selectedValue = document.getElementById("options").value;
	
	if (npessoas == 1) {
		adult  = "Adulto"
		
	} else {
		
	}
	
	if (numero_criancas == 1) {
		child  = "Criança"
		
	} else {
		
	}
	
	if (selectedValue == "OP01") {
      valor_voucher = tot_desc_stanmp
      nome_ap = "Standard"
	  desc_pix = stanmp_pix	  
	  refeicao = "café da manhã e jantar"
	  
    } else if (selectedValue == "OP02") {
      valor_voucher = tot_desc_topmp	  
	  nome_ap = "Top Class"
	  desc_pix = topmp_pix
	  refeicao = "café da manhã e jantar"
	  
    } else if (selectedValue == "OP03") {
      valor_voucher = tot_desc_sjmp	  
	  nome_ap = "Suíte Junior"
	  desc_pix = suitemp_pix
	  refeicao = "café da manhã e jantar"
	  
	} else if (selectedValue == "OP04") {
      valor_voucher = tot_desc_smmp
	  nome_ap = "Suíte Master"
	  desc_pix = smmp_pix
	  refeicao = "café da manhã e jantar"
	  
    } else if (selectedValue == "OP05") {
      valor_voucher = tot_desc_stancm
	  nome_ap = "Standard"
	  desc_pix = stancm_pix
	  refeicao = "café da manhã"
	  
	} else if (selectedValue == "OP06") {
      valor_voucher = tot_desc_topcm
	  nome_ap = "Top Class"
	  desc_pix = topcm_pix
	  refeicao = "café da manhã"
	  
    } else if (selectedValue == "OP07") {
      valor_voucher = tot_desc_smcm
	  nome_ap = "Suíte Master"
	  desc_pix = smcm_pix
	  refeicao = "café da manhã"
	  
    } else {
	 	
    }  	
	
    // Texto com a variável selecionada
    var textWithVariable = `*_Obrigado pela escolha do Ubatuba Palace Hotel._*<br>
	<br>
Conforme solicitado segue abaixo a reserva.<br>
<br>
Qtde de Aptos: *01 Apto ${nome_ap} para ${npessoas} ${adult}${numero_criancas === 0 ? '*' : numero_criancas === 1 ? ' e 1 criança*' : ' e 2 crianças*'}<br>
<br>
*Check-in: ${day1}/${month1}/${year1} às 14:00 hs*<br>
<br>
*Check-out: ${day2}/${month2}/${year2} às 12:00 hs*<br>
<br>
Valor do Pacote: *${valor_voucher}* *(No Pix ${desc_pix})*<br>
<br>
*Incluso ${refeicao}*<br>
<br>
Prazo para Pagamento:<br>
<br>
*Prazo para o pagamento até o dia ${day1+2}/${month1}/${year1}, após essa data a reserva será cancelada.<br>
<br>
*Por favor, nos enviar o comprovante de depósito, sujeito a confirmação somente após a validação do financeiro.<br>
<br>
Prazo para Cancelamento:<br>
<br>
*Cancelamento até 5 dias antes do Check-in. Respeitando o prazo, o valor integral já pago poderá ser devolvido, ou caso tenha preferência, deixado como crédito para utilização em qualquer outra data.<br>
<br>
*Reservas canceladas após o prazo, estão sujeitas à cobrança do valor total já pago.<br>
<br>
*O não comparecimento acarretará a cobrança de No Show, 100% do valor já pago.<br>
<br>
*Saída antecipada acarretará a cobrança de No Show, 100% do valor já pago.<br>
<br>
Documentação menor de 18 anos:<br>
<br>
Por favor, pedimos por gentileza que tragam os documentos das crianças menores de 18 anos.<br>
<br>
*Foi decretada uma Lei n° 12.038 que os Hotéis são obrigados a solicitar a documentação de crianças menores de 18 anos ou se não tiverem acompanhadas dos pais além da documentação da criança uma autorização reconhecida pelo cartório dos próprios pais autorizando a viagem.<br>
`;

    // Abre uma nova guia no navegador com o texto que inclui a variável
    var newWindow = window.open("", "_blank");
    newWindow.document.write(textWithVariable);

    // Oculta a caixa de diálogo novamente
    document.getElementById("dialog").style.display = "none";
});
