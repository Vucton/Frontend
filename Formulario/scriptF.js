const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const passwordConfimation = document.getElementById("password-confimation");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    checkForm();
})

username.addEventListener("blur", () =>{
    checkInputUsename();
})

password.addEventListener("blur", () =>{
    checkInputPassword();
})

passwordConfimation.addEventListener("blur", ()=>{
    checkInputPasswordConfirmation();
})

function checkInputUsename(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        //mostrar msg de error...
        erroInput(username, "Informe o nome de usuario!");
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
        
    }

}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        erroInput(password, "Senha é obrigatório.")
    }else if(passwordValue.length < 4){
        erroInput(password, "Senha não pode ser menor que 4 digitos!!")
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confimationPasswordConfirmationValue = passwordConfimation.value;

    if(confimationPasswordConfirmationValue === ""){
        erroInput(passwordConfimation, "A confirmação de senha é obrigatória.")

    }else if(confimationPasswordConfirmationValue.length < 4){
        erroInput(passwordConfimation, "Senha não pode ser menor que 4 digitos!!")

    }else if(confimationPasswordConfirmationValue !== passwordValue){
        erroInput(passwordConfimation, "As senhas não são iguais...")

    }else{
        const formItem = passwordConfimation.parentElement;
        formItem.className = "form-content"
    }
}

function erroInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "form-content error"
}

function checkForm(){
    checkInputUsename();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every((item) =>{
        return item.className === "form-content"
    });

    if(isValid){
        alert("CADASTRADO COM SUCESSO!!")
    }


}