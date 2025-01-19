let score = 0;
let selectedOption = null;

// Função para exibir as opções de resposta após escolher o menu
function showResponseOptions(option) {
    selectedOption = option;
    const responses = document.getElementById('responses');
    const responseDiv = document.getElementById('response-options');
    
    // Limpar as opções anteriores
    responses.innerHTML = '';
    
    if (option === 1) {
        responses.innerHTML = `
            <button class="response-button" data-answer="8">8g hidratos de carbono</button>
            <button class="response-button" data-answer="16">16g hidratos de carbono</button>
            <button class="response-button" data-answer="32">32g hidratos de carbono</button>
        `;
    } else if (option === 2) {
        responses.innerHTML = `
            <button class="response-button" data-answer="10">10g hidratos de carbono</button>
            <button class="response-button" data-answer="20">20g hidratos de carbono</button>
            <button class="response-button" data-answer="30">30g hidratos de carbono</button>
        `;
    } else if (option === 3) {
        responses.innerHTML = `
            <button class="response-button" data-answer="10">10g hidratos de carbono</button>
            <button class="response-button" data-answer="15">15g hidratos de carbono</button>
            <button class="response-button" data-answer="20">20g hidratos de carbono</button>
        `;
    }

    // Ocultar as outras perguntas
    document.querySelectorAll('.question').forEach(question => {
        question.style.display = 'none';
    });

    // Exibir as opções de resposta
    responseDiv.style.display = 'block';
    
    // Exibir o botão "Próxima Pergunta"
    document.getElementById('next-question').style.display = 'block';

    // Configurar a pontuação das respostas
    const buttons = document.querySelectorAll('.response-button');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedAnswer = parseInt(event.target.dataset.answer);
            // Atribuir a pontuação com base na resposta
            if ((option === 1 && selectedAnswer === 8) ||
                (option === 2 && selectedAnswer === 20) ||
                (option === 3 && selectedAnswer === 20)) {
                score += 12.5;
            } else if ((option === 1 && selectedAnswer === 16) ||
                       (option === 2 && selectedAnswer === 30) ||
                       (option === 3 && selectedAnswer === 15)) {
                score += 4;
            }
            // Atualizar a pontuação
            document.getElementById('score').textContent = score;
            // Desabilitar os botões
            document.querySelectorAll('.answer').forEach(button => button.disabled = true);
            document.querySelectorAll('.response-button').forEach(button => button.disabled = true);
        });
    });
}

// Função de escolha do menu
document.querySelectorAll('.answer').forEach(button => {
    button.addEventListener('click', (event) => {
        const option = parseInt(event.target.dataset.option);
        showResponseOptions(option);
        document.querySelectorAll('.answer').forEach(button => button.disabled = true);
    });
});

// Próxima Pergunta
document.getElementById('next-question').addEventListener('click', () => {
    // Aqui você pode adicionar a lógica para avançar para a próxima pergunta
    alert("Próxima pergunta ainda não implementada.");
    // Por enquanto, vamos mostrar a pontuação final
    document.querySelector('.result').style.display = 'block';
});

// Finalizar jogo
document.getElementById('finish-game').addEventListener('click', () => {
    alert(`Jogo finalizado! Sua pontuação final é: ${score}`);
});
