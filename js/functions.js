// Funções do 

$(function(){ // comandos //

	$('form').submit(function(){

		if(formularioPreenchido()){
			var form = $('form');
			$('form').ajaxSubmit({
				beforeSubmit:function(){
					form.find('input[type=submit]').attr('disabled','true');
					form.find('input[type=submit]').animate({'opacity':'0.4'})
					form.find('input[type=submit]').attr('value','Carregando');

				},
				success:function(data){
					//Aqui você pode inserir uma div, por exemplo.
					//Qualquer mensagem de sucesso, após o formulario ter sido enviado.
					alert('Formulário foi enviado com sucesso!');
					form.find('input[type=submit]').removeAttr('disabled');
					form.find('input[type=submit]').animate({'opacity':'1'})
					form.find('input[type=submit]').attr('value','Enviar');
					form[0].reset();
				}
			});
		}else{
			//alert("Campos Vázios não são permitidos!");
		}
		return false;
	})

	function formularioPreenchido(){
		// var nome = $('[name=nome]').val();
		// var email = $('[name=email]').val();
		// var telefone = $('[name=telefone]').val();
		var mensagem = $('[name=mensagem]').val();
		if( mensagem == ''){
			return false;
		}else{
			if (mensagem == "!escala 0") {
				$(".chamadadarking").css({"background-size":"10%"})
			}else if (mensagem == "!escala 1") {
				$(".chamadadarking").css({"background-size":"contain"})
			}else if (mensagem == "!cocontagem") {
				var html = $(".chamadadarking").html();
				$(".chamadadarking").html(html+"<img src='/imagens/coco.webp' style='width:300px; z-index:10; position:fixed; top: 140px; right: 40%;' />")
			}else if(mensagem == "!resgatar acionista"){
				var audio = new Audio('audio/stonks.mp3'); audio.addEventListener('canplaythrough', function() {audio.play();});
			}else if(mensagem == "!atumalaca"){
				var audio = new Audio('audio/atumalaca.mpeg'); audio.addEventListener('canplaythrough', function() {audio.play();});
			}else if(mensagem == "!aisenhora"){
				var audio = new Audio('audio/AiSenhora.wav'); audio.addEventListener('canplaythrough', function() {audio.play();});
			}else{
				$(".erro").css({"top":"10vh"}); setTimeout(() => { $(".erro").css({"top":"-90vh"}); }, 3000);
			}
		}
	}
})

function alerta(params) { // alerta //
	var audio = new Audio('audio/compra.mp3'); audio.addEventListener('canplaythrough', function() {
		audio.play();
		alert("Você comprou: "+params+".");
		alert("Estamos indo entregar na sua casa, goste você ou não :) ");
	});
}

function evento(numero){ // evento de click //
	$(function(){
		// EVENTO 0 //
			if(numero == 0){
				$(".logo0").css({"background-image":"url(imagens/gato3.webp)"});

				setTimeout(() => {
					$(".logo0").css({"background-image":"url(imagens/gato2.webp)"});
				}, 3000);

				var audio = new Audio('audio/Miau1.mp3');
				audio.addEventListener('canplaythrough', function() {
					audio.play();
				});

				
			}
		////

		// EVENTO 1 //
			if(numero == 1){
				$(".onb").css({"background-image":"url(imagens/onibos1.webp)"});

				setTimeout(() => {
					$(".onb").css({"background-image":"url(imagens/onibos2.webp)"});
				}, 2000);
			}
		////
	})
}
