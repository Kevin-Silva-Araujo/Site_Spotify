//manipulando elementos da pagina

function botao(){
	document.getElementById('agradecimento').innerHTML = 'VC É GAY?'
	alert('obrigado por clicar ')
}

function redirecionar(){
	window.open('https://www.youtube.com/channel/UCefhUuyYbgsljiw7bmdcHDg')
	//window.location.href =//mema coisa do de cima
}

function trocar(){
			document.getElementById('mousemove').innerHTML = 'bungas'
	//alert('trocar texto')
}

function voltar(){
	document.getElementById('mousemove').innerHTML = 'passa por cima'
}
function load(){
	alert('Pagina carregada')
}
function funcaoChange(elemento){
	console.log(elemento.value)
}

//outro curso falando sobre function
/*function soma(n1,n2){
	return n1+n2
}
function validarIdade(idade){
		var validar
		if(idade >= 18){
		validar = true
		
}else{
	validar = false
}
return validar
}



var idade = prompt('qual sua idade porra')
console.log(validarIdade(idade))
*/



//datas
/*var d = new Date()
alert(d.getDay())
alert(d.getHours())
alert(d.getMonth()+1)
alert(d.getMinutes())
*/


/*var count 
for(count = 0; count <= 5;  count++){
	alert(count)
}*/




/*var count = 0
while (count < 5){
console.log(count)
alert(count)
count++
}*/


// entendendo condicionais laços de repetição e date
/*var idade =prompt('qual sua idade por favor')


if (idade >= 18){
	alert('maior de idade')
}else{
	alert('menor de idade')
}
*/






/*var fruta = [{nome: 'maça', cor:'vermelha'},{nome: 'uva', cor:'roxa'}]
console.log(fruta.nome)
alert(fruta[1].nome)*/






/*
//falando sobre dicionario
var fruta = {nome: 'maça', cor:'vermelha'}
console.log(fruta.nome)
alert(fruta.cor)*/






//falando sobre arrays
//var lista = ['maça', 'pera', 'laranja']
//lista.push('uva')
//lista.pop('')

//console.log(lista[0])
//console.log(lista.toString()[0])
//console.log(lista.join('-'))











/*var nome = 'kevin dante'
var idade = '16'
var idade2 = '10'

var frase = 'Japão é o melhor time do mundo'
//alert( nome + "tem" + idade "anos")
//alert(idade + idade2)

//alert(nome + 'Tem' +  idade )

console.log(nome)
console.log(idade + idade2)
console.log(frase.replace('Japão', 'Brazil'))*/










