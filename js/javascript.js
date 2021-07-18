const button = document.getElementById('registration')

button.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
let data = {name, email };
let convertedData = JSON.stringify(data);
localStorage.setItem('registroDoUsuario',convertedData)


})