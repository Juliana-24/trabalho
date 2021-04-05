function submit_form_login() {
    if(document.form_login.input_nome.value == 'Juliana') {
        if(document.form_login.input_email.value == 'juh@Fasipe.com') {
            if(document.form_login.input_senha.value == '123456') {     
                alert("Bem vindo ao seu site!");

            } else {
                alert("Você errou seu nome!")
            }  
        } else {
            alert("Você errou o domínio!")

        }
    } else {
        alert("Você errou sua senha!")
    }         

}   

