
function somarDias() {
    const dias = document.getElementById('contador')
    let hoje = new Date();
    let dataInicio = new Date("2024-03-04")

    var diferencaEmMilissegundos = hoje - dataInicio;

    var diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

    dias.textContent = diferencaEmDias
}

window.addEventListener('load', somarDias)