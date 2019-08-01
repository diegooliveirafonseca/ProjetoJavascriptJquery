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
/*
$(function(){
	$('#azul').click(function(){
		$('p').fadeOut('slow');
		$('p').delay(3000);
		$('p').fadeIn('slow');
	});
});
*/

//Exercicio de Gravar Mensagem
/*
$('#azul').click(function(){
	$('p').css("background-color","red");
	$('#mensagem').text("Cor alterada com sucesso!");
	$('#mensagem').css("color","red");
	$('#mensagem').css("border","1px solid red");
	$('#mensagem').delay(3000);
	$('#mensagem').fadeOut();
});
*/

//Exercicio de encadeamento em bloco
//Evita a repetição da chamada do elemento
/*
$('#azul').click(function(){
	$('p').css("background-color","red");
	$('#mensagem')
		.text("Cor alterada com sucesso!")
			.css("color","red")
				.css("border","1px solid red")
					.delay(3000).fadeOut();
});
*/

//Exercicio de declaração multipla de css
//Declarações compostas devem usar CamelCase
/*
$('#azul').click(function(){
	$('p').css("background-color","red");
	$('#mensagem')
		.text("Cor alterada com sucesso!")
		.css({color:"red",border:"1px solid red",backgroundColor:'#F08080'})
		.delay(3000)
		.fadeOut();
});
*/

//Exercicio Adicionando e removendo classes
//No Css as propriedades inline tem prioridade sobre propriedade de arquivos e tag style
//O ponto e virgula define o fim do comando. Como vemos a baixo o comando só termina após a remoção da class red do botão. Então serve para elementos diferentes na mesma instrução.
/*
$('#azul').click(function(){
	$('p').css("background-color","red");
	$('#mensagem')
		.text("Cor alterada com sucesso!")
		.css({color:"red",border:"1px solid red"})
		.delay(3000)
		.addClass('green')

	$('button').removeClass('red');
});
*/

//Exercicio de slideshow

$(function(){
	$('img').css({width:'300px',height:'300px'});
	$('#l1').click(function(){
		$('#i2').hide();
		$('#i3').hide();
		$('#i1').show();
	});
	$('#l2').click(function(){
		$('#i1').hide();
		$('#i3').hide();
		$('#i2').show();
	});
	$('#l3').click(function(){
		$('#i1').hide();
		$('#i2').hide();
		$('#i3').show();
	});
});