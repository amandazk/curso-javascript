// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo');
});

// Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
imagens.forEach((item) => {
    const possuiAlt = imagens.hasAttribute('alt'); 
    console.log(possuiAlt);
});
   
// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');
