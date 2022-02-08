// O arquivo HTML passa a ser conhecido como o documento (document).
// getElementById irá encontrar um elemento no documento baseado em seu ID
// innerHTML altera ou retorna o conteúdo de um elemento

function updateClock() {
    let currentDate = new Date();
    document.getElementById("horas").innerHTML = currentDate.getHours();
    document.getElementById("minutos").innerHTML = currentDate.getMinutes();
    document.getElementById("segundos").innerHTML = currentDate.getSeconds();
}

// setInterval repetirá uma função a cada dados milissegundos.
setInterval(updateClock, 1000);