import GeraCPF from './modules/GeraCPF';
import '/src/assets/css/style.css';

(function() {
    const gera = new GeraCPF()
    const cpfGerado = document.querySelector('.cpf-gerado')
    const btnGerarCPF = document.querySelector('.generate-button');

    // Função para gerar e exibir um novo CPF
    function gerarNovoCPF() {
        const novoCPF = gera.geraNovoCpf();
        cpfGerado.innerHTML = novoCPF;
    }

    // Adiciona um evento de clique ao botão
    btnGerarCPF.addEventListener('click', gerarNovoCPF);

    // Gera e exibe o CPF inicialmente
    gerarNovoCPF();
})()

