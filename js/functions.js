// Funções do site

function alerta(params) {
	alert("Você comprou: "+params+".");
	alert("Estamos indo entregar na sua casa, goste você ou não :) ");
}

function evento(numero){
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



// Funções do mapa
window.onload = function(){

	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-27.616637,-48.5923228),
			scrollwheel:false,
			zoom:12,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,content,click){
		var latLng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		if(click == true){
			google.maps.event.addListener(marker,'click',function(){
				infoWindow.open(map,marker);
			});
		}else{
			infoWindow.open(map,marker);
		}
		
	}

	initialize();

	var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;border-bottom:1px solid black;">Meu endereço</p>';
	addMarker(-27.616637,-48.5923228,'',conteudo,true);

	/*
	setTimeout(function(){
		map.panTo({'lat':-23.550520,'lng':-46.633309});
		map.setZoom(8);
	},4000);
	
	*/


}