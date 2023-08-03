const form = document.getElementById('form');
const imgAprovado = '<img src="./media/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./media/reprovado.png" alt="Emoji celebrando" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="aprovado">Aprovado</span>';
const spanReprovado = '<span class="reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima do sistema:'));

var linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha() {
    const nomeAtividade = document.getElementById('materia');
    const notaAtividade = document.getElementById('nota');

    if (atividades.includes(nomeAtividade.value)) {
        alert(`A atividade "${nomeAtividade.value}" já foi inserida`)
        document.getElementById('materia').style.borderColor = 'red';
    }
    else {
        atividades.push(nomeAtividade.value);
        notas.push(parseFloat(notaAtividade.value));

        var linha = '<tr>';
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

    linhas += linha;
    }

    nomeAtividade.value = '';
    notaAtividade.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-sticker').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    var somaDasNotas = 0;

    for (var i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}