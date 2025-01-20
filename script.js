let score = 0; // Pontuação inicial

// Função que lida com a seleção de uma resposta
function handleAnswer(resposta) {
    // Pontuação das respostas corretas
    let respostaCerta = {
        1: 0,  // Ovos Mexidos com Torrada Integral - Pontuação errada
        2: 12.5,  // Panqueca de Aveia e Banana (com porção controlada) - Resposta certa
        3: 0  // Pão com Manteiga de Amendoim - Pontuação errada
    };

    // Atualiza a pontuação
    score += respostaCerta[resposta];

    // Exibe o resultado após a resposta
    document.getElementById('score').textContent = `Pontuação: ${score}`;
    document.getElementById('result').style.display = 'block';

    // Desativa os botões de resposta
    document.querySelectorAll('.answer-btn').forEach(button => {
        button.disabled = true;
    });
}

// Atribui a função `handleAnswer` a cada botão de resposta
document.querySelectorAll('.answer-btn').forEach(button => {
    button.addEventListener('click', function() {
        let resposta = this.getAttribute('data-resposta');
        handleAnswer(resposta);
    });
});
