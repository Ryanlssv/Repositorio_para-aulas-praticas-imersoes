// Adiciona um evento de clique ao botão 
document.getElementById('generate-btn').addEventListener('click', () => {
 // Gera uma cor aleatória em formato hexadecimal
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
// Atualiza o texto do elemento que exibe a cor
document.getElementById('color-display').textContent = randomColor;
// Altera a cor de fundo da página
document.body.style.backgroundColor = randomColor;    
})