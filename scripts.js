document.getElementById('formCadastro').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validação da senha
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    // Se os dados estiverem ok, você pode enviar o formulário ou fazer algo com os dados
    alert('Formulário enviado com sucesso!');
    this.submit(); // envia o formulário
});
