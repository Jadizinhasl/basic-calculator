const resultado = document.getElementById('telaResultado');
const botoes = document.querySelectorAll('.btn'); 
let numeroDigitado = ''; 


botoes.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        const valor = e.target.value;
        if (valor === '=') {
            calcularResultado();
        } else if (e.target.id === 'limpar') {
            limparDisplay(); 
        } else if (e.target.id === 'backspace') {
            apagarUltimo(); 
        } else {
            adicionarValor(valor); 
        }
    });
});

function adicionarValor(valor) {
    const ultimoCaractere = numeroDigitado.slice(-1);
    if (['+', '-', '*', '/', '.'].includes(valor) && ['+', '-', '*', '/', '.'].includes(ultimoCaractere)) {
        return;
    }

    numeroDigitado += valor;
    atualizarDisplay();
}

function limparDisplay() {
    numeroDigitado = ''; 
    atualizarDisplay('0'); 
}

function apagarUltimo() {
    numeroDigitado = numeroDigitado.slice(0, -1); 
    atualizarDisplay(numeroDigitado || '0'); 
}
function calcularResultado() {
    try {
        const resultadoCalculado = math.evaluate(numeroDigitado);
        numeroDigitado = `${resultadoCalculado}`; 
        atualizarDisplay();
    } catch (error) {
        atualizarDisplay('Invalido');
        numeroDigitado = ''; 
    }
}

function atualizarDisplay(valor = numeroDigitado) {
    resultado.textContent = valor; 
}
