function calculateDays() {
    const startDateInput = document.getElementById('start-date').value;
    const endDateInput = document.getElementById('end-date').value;
    const businessDaysOnly = document.getElementById('business-days').checked;
    const start = document.getElementById('start-date');
    const end = document.getElementById('end-date');
    const startError = document.getElementById('start-error');
    const endError = document.getElementById('end-error');

    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    // Limpa mensagens de erro
    startError.style.display = 'none';
    endError.style.display = 'none';

    // Verifique se as datas são válidas
    let valid = true;
    if (isNaN(startDate.getTime())) {
        start.style.borderColor = 'red';
        startError.style.display = 'block';
        startError.style.margin= 0;
        startError.style.marginTop= '10px'; // Mostra a mensagem de erro
        valid = false;
    } else {
        start.style.borderColor = '#7F00FF'; // Resetar a borda para a cor padrão se válido
    }

    if (isNaN(endDate.getTime())) {
        end.style.borderColor = 'red';
        endError.style.display = 'block';
        endError.style.margin= 0;
        endError.style.marginTop= '10px'; // Mostra a mensagem de erro
        valid = false;
    } else {
        end.style.borderColor = '#7F00FF'; // Resetar a borda para a cor padrão se válido
    }

    if (!valid) {
        return; // Se alguma data não for válida, saia da função
    }

    let totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    let result = totalDays;

    if (businessDaysOnly) {
        result = 0;
        let currentDate = new Date(startDate); // Clone a data inicial
        
        while (currentDate <= endDate) {
            const dayOfWeek = currentDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Ignora domingos (0) e sábados (6)
                result++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
    }

    document.getElementById('result').innerText = `Total de dias: ${result}`;
}

document.getElementById('mobile-menu').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});
