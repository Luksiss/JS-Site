const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


form.addEventListener('submit', (e) => { 
    let messages = []
    if (password.value === '' || email.value == null) {
    messages.push ('Requer senha')
    }

    if (messages.length > 0) {   
   
    errorElement.innertext = messages.join(' , ')
    }
    e.preventDefault();
  
})



    