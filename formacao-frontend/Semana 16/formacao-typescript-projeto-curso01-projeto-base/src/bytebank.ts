let saldo: number = 3000;

alert("teste");
const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLInputElement;

if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;

elementoFormulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
    const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = parseFloat(inputValor.value);
    let data: Date = new Date(inputData.value);

    if (tipoTransacao === 'Depósito') {
        saldo += valor;
    } else if (tipoTransacao === 'Transferência' || tipoTransacao === 'Pagamento de Boleto') {
        saldo -= valor;
    } else {
        alert("Tipo de transação inválido.");
        return;
    }

    elementoSaldo.textContent = saldo.toString();
    
    const novaTransacao = {
        tipo: tipoTransacao,
        valor: valor,
        data: data
    };

    console.log(novaTransacao);
    elementoFormulario.reset();
});
