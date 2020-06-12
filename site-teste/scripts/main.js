
//Variáveis
//declarando variáveis/valores
let minhavariavel = [2,'Bob',5]
//declarando variável resultado e fazendo a soma [Operadores]
let resultado = minhavariavel[0] + minhavariavel[2]
//verificando se é igual a 3
let diferença = [resultado >= 3]
//demonstrando no console
console.log (resultado)
console.log (diferença)
console.log (minhavariavel[1])
//demonstrando no console de forma única
console.log (resultado, diferença, minhavariavel[1]);

//Condicionais
//declarando variável
/* desabilitado porque requer confirmação e atrapalha as outras posteriores (basta retirar de comentário para utilizar)
let sorvete = 'cebola'
    if (sorvete === 'chocolate')
    {
    alert ("Eu adoro chocolate!")
    }  
    else{
    alert ('Mas chocolate é o melhor...')
    console.log ('Ok...condicional verificada')
    }
    */

    //Funções
    function multiplica(num1,num2)
    {
    let resultado1 = num1 * num2
    return resultado1; //para o resultado, execute a função multiplica(*,*) no console.
    }
    function soma(num1,num2,num3)
    {let resultado2 = num1+num2+num3
    return resultado2;
    }

    //Eventos
    document.querySelector('h1').onclick=function() {
        alert('Ai! Pare de me cutucar!')
    }
    /*Aqui selecionamos o elemento <html>, 
    definindo sua propriedade onclick igual a uma função anônima (ou seja, sem nome),
    que contém o código que queremos que o evento clique execute.
    Abaixo, outra forma de escrever*/
    let meuHTML = document.querySelector('ul');
    meuHTML.onclick = function(){
        alert ("Pode parar!")
    }

    //Adicionando um modificador de imagem (tem que recarregar o site para funcionar)
    let minhaImagem = document.querySelector('img');

    minhaImagem.onclick = function() {
        let meuSrc = minhaImagem.getAttribute('src');

        if (meuSrc === 'imagens/1.jpg') {
            minhaImagem.setAttribute ('src', 'imagens/2.jpg');
        }
            else { 
                minhaImagem.setAttribute ('src', 'imagens/1.jpg');
            }
    } 
    /* Você armazena uma referência ao seu elemento <img> na variável minhaImagem. 
    Depois, você faz a propriedade do manipulador de evento onclick dessa variável igual a uma função sem nome (uma função "anônima"). 
    Agora, toda vez que esse elemento de imagem é clicado:
    Você recupera o valor do atributo src da imagem.
    Você usa uma condicional para checar se o valor src é igual ao caminho da imagem original:
    Se for, você muda o valor de src para o caminho da segunda imagem, forçando a outra imagem a ser carregada dentro do elemento <img>.
    Se não é (significando que já mudou), nós mudamos o valor src de volta ao caminho da imagem, para o estado original.
    */


    //Adicionando uma mensagem de boas vindas
let meubotao = document.querySelector('button')
let meucabecalho = document.querySelector('p')

function defineNomeUsuário(){
    let meuNome = prompt('Por favor, digite seu nome.');
    if (!meuNome || meuNome === null) {
        defineNomeUsuário();
    } else {
    localStorage.setItem('nome',meuNome)
    meucabecalho.innerHTML = 'Bem vindo, ' + meuNome +'!'
    }
}

if (!localStorage.getItem('nome')) {
    defineNomeUsuário();
} else {
    let nomeguardado = localStorage.getItem('nome')
    meucabecalho.textContent = 'Bem vindo, ' + nomeguardado+'!';
}

meubotao.onclick = function() { defineNomeUsuário();
}