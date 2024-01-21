let form = document.querySelector('form')
form.addEventListener('submit',function(event) {
    event.preventDefault();
    console.log('Envoi du form detecté !')
})

let email = document.querySelector('#email')

if(email.value ==''){
    console.log("invalide")
}else {
    console.log('valide')
}

if(email.value ==''){
    console.log("invalide")
} else {
    email.classList.add('success')
}

let motdepasse = document.querySelector('#motdepasse')

if(motdepasse.value ==''){
    console.log("invalide")
}else {
    console.log('valide')
}

if(motdepasse.value ==''){
    console.log("invalide")
}else {
    motdepasse.classList.add('succes')
}


