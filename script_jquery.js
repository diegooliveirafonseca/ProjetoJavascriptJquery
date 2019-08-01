//Como usar o jquery

//$(seletor).ação();

//-------------------------------------
// Exercicio de Jquery
//Esconder h1

//Forma coloquial
/*
$(document).ready(function(){
	$('button').click(function(){
		$('h1').hide();
	});
});
*/
//Forma simplificada
/*
$(function(){
	$('button').click(function(){
		$('h1').hide();
	});
});

//--------------------------------------
*/

//Exercicio de mudar CSS com jquery de todos os h1
/*
$(function(){
	$('button').click(function(){
		$('h1').css("color","blue");
	});
});
*/

//Exercicio de mudar CSS com jquery de um unico elemento usando o id
/*
$(function(){
	$('button').click(function(){
		$('body').css("background-color","red");
		$('#ola2').css("color","white");
	});
});
*/
//Exercicio de esconder elemento de forma mais suave (fadeIn e fadeOut)
/*
$(function(){
	$('#azul').click(function(){
		$('p').css("color","blue");	
		$('p').fadeOut('slow');
	});
	$('#vermelho').click(function(){
		$('p').css("color","red");	
		$('p').fadeIn();
	});
});
*/

//Exercicio de delay - (espera a quantidade de microsegundos passados)

$(function(){
	$('#azul').click(function(){
		$('p').fadeOut('slow');
		$('p').delay(3000);
	});
});
