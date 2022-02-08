const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.createElement('form')
const errorElement = document.getElementById('error')
form.addEventListener('submit', (e) => {
let messages = []
if (Name.value === '' || Name.value == null) {
    messages.push('Name is required')
}

if (password.value.length <= 6){
    messages.push('Password must be at least 6 characters')
}
if (password.value ==='Password') {
messages.push('Password cannot be password')
}

if (messages.length > 0){
  
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
}
})