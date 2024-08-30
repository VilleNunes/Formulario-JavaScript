
const button = document.getElementById('button').setAttribute('onclick', 'consultar()')
const email = document.getElementById('email');
const nome = document.getElementById('nome');

function consultar()
{   
    const valorNome = nome.value;
    const valorEmail = email.value;
    
    if(valorNome == "" || valorEmail == ""){
        alert("Preencha todos os campos");
    }

    
}



