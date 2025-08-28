// Seleciona o botão pelo ID
const myButton = document.getElementById('myButton');

// Adiciona um evento de clique ao botão
myButton.addEventListener('click', () => {
    // Exibe uma mensagem ao clicar
    alert('Obrigado por clicar!');

    // Anima o botão brevemente
    myButton.style.transform = 'scale(0.9)';
    setTimeout(() => {
        myButton.style.transform = 'scale(1)';
    }, 150);

    // Muda a cor do botão temporariamente
    myButton.style.backgroundColor = '#28a745';
    setTimeout(() => {
        myButton.style.backgroundColor = '#4A90E2';
    }, 1000);
});

// Anima o conteúdo principal ao carregar a página
window.addEventListener('load', () => {
    const main = document.querySelector('main');
    main.style.opacity = '0';
    main.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        main.style.opacity = '1';
    }, 100);
});