// Passagem de Login

var perfis = [{nome:"Lucas", senha:"davi"}, {nome:"Davi", senha:"lucas"}]

var flag = false
var flagSenha = false

function login(nome, senha){
    nome = document.querySelector("#name-login").value
    senha = document.querySelector("#password-login").value

    var btn = document.querySelector("#btn-login")

    if(nome == "" || senha == ""){
        alert("Preencha todos os campos!")
    }else{
        for(var i = 0; i < perfis.length; i++){
            if(nome == perfis[i].nome){
                flag = true
                console.log("Nome encontrado!")
    
                if(senha == perfis[i].senha){
                    flagSenha = true
    
                    btn.href="index.html"
    
                    console.log("Senha encontrada!")
                    alert("Login Efetuado")
                }
            }
        }
        if(flag == false || flagSenha == false){
            alert("Alguma informação está errada!")
        }
    }   
}

function mostrarSenha(senha){
    senha = document.querySelector("#password-login")
    // if(senha.type == "password"){
    //     senha.type = "text"
    // }else{
    //     senha.type = "password"
    // }

    senha.type == "password" ? senha.type = "text" : senha.type = "password"
}