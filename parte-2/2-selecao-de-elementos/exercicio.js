// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const img = document.querySelectorAll('img[src^="img/imagem"]');
console.log(img);

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p'); // pegando todos os 'p's
console.log(paragrafos[paragrados.length -1]);
