

const button = document.getElementById('button');
button.addEventListener('click', validaTelefone);

const registrar = () => {
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let telefone = document.getElementById('telefone').value;
    let nascimento = document.getElementById('data_nascimento').value;

    let dados = {
        nome: nome,
        email: email,
        senha: senha,
        telefone: telefone,
        nascimento: nascimento
    };

    // salvar no localStorage

    const dadosLocal = localStorage.setItem('usuario', JSON.stringify(dados));

    let verificarLocal = dadosLocal === null ? [] + console.log("error") : JSON.parse(dadosLocal) + console.log(localStorage.getItem('usuario'));    

    }


// Função para validar o telefone
function validaTelefone(event) {

    let telefone = document.getElementById('telefone');
    let telefoneValue = telefone.value;

    // Adicionar o código do país se não estiver presente
    if (!telefoneValue.startsWith('55')) {
        telefoneValue = '55' + telefoneValue;
    }

    // Verificar se o telefone contém apenas números
    let regex = /^\d+$/;
    if (!regex.test(telefoneValue)) {
        telefone.style.border = '1px solid red';
        event.preventDefault();
    } else {
        telefone.style.border = '1px solid green';
    }

    validaEmail(event);
    validaSenha(event);
}

const regex = (email) => {
    let Regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return Regx.test(email);
}

function validaEmail(event) {
    

    let email = document.getElementById('email');
    let emailValue = email.value;


    if (emailValue === '') {
        email.style.border = '1px solid red';
        event.preventDefault();
    } else if (emailValue === null) {
        email.style.border = '1px solid red';
        event.preventDefault();
    } else if (regex(emailValue)) {
        email.style.border = '1px solid green';
    } else {
        console.log('Email inválido');
        email.style.border = '1px solid red';
        event.preventDefault();
        form.reset();
    }
}


function validaSenha(event) {
   
   event.preventDefault();
    let senhaElement = document.getElementById('senha');
    let senha = senhaElement.value;
    let confirmaSenha = document.getElementById('confirmar_senha').value;
    let regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@#$%^&*]{8,}$/;
    let mensagemError = document.getElementById('mensagemError');

    if (senha === '') {
        senhaElement.style.border = '1px solid red';
        mensagemError.textContent = 'Senha não pode ser vazia';
    } else if (!/[A-Z]/.test(senha)) {
        senhaElement.style.border = '1px solid red';
        mensagemError.textContent = 'Senha deve conter pelo menos uma letra maiúscula';
    } else if (!/[a-z]/.test(senha)) {
        senhaElement.style.border = '1px solid red';
        mensagemError.textContent = 'Senha deve conter pelo menos uma letra minúscula';
    } else if (!/[0-9]/.test(senha)) {
        senhaElement.style.border = '1px solid red';
        mensagemError.textContent = 'Senha deve conter pelo menos um dígito numérico';
    } else if (senha.length < 11) {
        senhaElement.style.border = '1px solid red';
        mensagemError.textContent = 'Senha deve ter pelo menos 11 caracteres';
    } else if (regexSenha.test(senha)) {
        senhaElement.style.border = '1px solid green';
        mensagemError.textContent = 'Senha válida';
        window.location.href = "index.html"
    } else {
        senhaElement.style.border = '1px solid red';
        mensagemError.textContent = 'Senha inválida';
    }

    let confirm = confirmaSenha === senha ? true + console.log("senha correta") +  registrar(): console.log(false) + event.preventDefault();
}