let sec_text = document.querySelector('.sec-text');
let sec_espaco_text = document.querySelector('.sec-espaco-text');

let botCopiar = document.querySelector('.botCopiar');
let texto = document.querySelector('textarea');
let textoDescriptografado;
let textoCriptografado;

let botaoModoVisu = document.querySelector('.modoVisualizacao');
let body = document.querySelector('body');

botaoModoVisu.addEventListener('click', () => {
    if(body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        botaoModoVisu.classList.replace('fa-sun', 'fa-moon')
    }else {
        body.classList.replace('light-mode', 'dark-mode')
        botaoModoVisu.classList.replace('fa-moon', 'fa-sun')
    }
}) //Usando addEventListener para fixar mais na cabeça, pois com o onclick já está bem fixo.

//
function verificarVazio() {
    let p = document.createElement('p');
    let h2 = document.createElement('h2');
    let div_sec_vazio = document.createElement('div');
    let img = document.createElement('img');
    
    div_sec_vazio.id = 'id_sec_vazio';
    div_sec_vazio.classList.add('vazioSec');
    h2.innerText = "Nenhuma mensagem encontrada";
    p.innerText = "Digite um texto que você deseja criptografar ou descriptografar."
    img.src = 'img/sec-vazio.png';

if(sec_text.textContent === "") {
    sec_text.style.display = 'none'
    botCopiar.style.display = 'none';
    sec_espaco_text.appendChild(div_sec_vazio);
    div_sec_vazio.appendChild(img);
    div_sec_vazio.appendChild(h2);
    div_sec_vazio.appendChild(p);
} else {
    botCopiar.removeAttribute('style');
    sec_text.removeAttribute('style');
    document.querySelector('#id_sec_vazio').remove();
    sec_espaco_text.style.justifyContent = 'start';
    sec_espaco_text.style.padding = '0 5% 10% 5%';
}
}

// 
function descriptografar() {
    let textoDescriptografado = document.querySelector('textarea').value;
    textoDescriptografado = textoDescriptografado.toLowerCase().normalize('NFKD')
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    sec_text.textContent = textoDescriptografado;
    verificarVazio();
}

function criptografar() {
    let textoCriptografado = document.querySelector('textarea').value;
    textoCriptografado = textoCriptografado.toLocaleLowerCase().normalize('NFKD')
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    sec_text.textContent = textoCriptografado;
    verificarVazio();
}

verificarVazio();

function copiar() {
    navigator.clipboard.writeText(sec_text.textContent);
}
// e = enter
// i = imes
// a = ai
// o = ober
// u = ufat