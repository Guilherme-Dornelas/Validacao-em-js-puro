function valida(event) {
    event.preventDefault();

    let email = document.getElementById('email');
    let emailValue = email.value;
    let senha = document.getElementById('senha');
    let senhaValue = senha.value;
    let mensagemError = document.querySelector('.mensagem');

        // Recupera os dados do localStorage
        let storedUser = JSON.parse(localStorage.getItem('usuario'));

        if (storedUser) {
            let storedEmail = storedUser.email;
            let storedSenha = storedUser.senha;

              // Verifica se o email e a senha inseridos correspondem aos armazenados no localStorage
            if (emailValue === storedEmail && senhaValue === storedSenha) {
                email.style.border = '1px solid green';
                senha.style.border = '1px solid green';
                mensagemError.innerHTML = 'Login bem-sucedido';
                mensagemError.style.color = 'green';

                window.location.href = 'page.html';
            } else {
                email.style.border = '1px solid red';
                senha.style.border = '1px solid red';
                mensagemError.innerHTML = 'Email ou senha inválidos';
                mensagemError.style.color = 'red';

                console.log('Email ou senha inválidos');
            }
        } else {
            console.log('Nenhum usuário armazenado no localStorage');
        }



    console.log(storedEmail + "local email" + " " + storedSenha + " " + "local senha");


}

let button = document.getElementById('button');
button.addEventListener('click', valida);