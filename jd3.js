let unioneForm = document.getElementById('myForm')
unioneForm.addEventListener('submit', function(e){
    e.preventDefault()
})
console.log('INVIO DATI')

const nameInputField = document.getElementById('name')
const surnameInputField = document.getElementById('surname')
const phoneInputField = document.getElementById('phone')
const emailInputField = document.getElementById('email')
const passwordInputField = document.getElementById('password')



const retrievedName = nameInputField.value
const retrievedSurname = surnameInputField.value
const retrievedPhone = phoneInputField.value
const retrievedEmail = emailInputField.value




console.log("Dati dell'utente:")
console.log('name:', name)
console.log('age:', age)
console.log('city:', city)
console.log('details:', details)




console.log('CONTATTO INSERITO', Contact)

let newContact = document.createElement('div')
newContact.classList.add('saved-contacts')
newContact.innerHTML = `
<p>${retrievedName} 
${retrievedSurname}</p>
<p>${retrievedPhone}</p>
<p>${retrievedEmail}</p>
<button>ELIMINA</button>
`

const savedContactsDiv = document.getElementById('saved-contacts')
  savedContactsDiv.appendChild(newContactCard)
  const allTheDeleteButtons = document.querySelectorAll('.contact-card button')
  allTheDeleteButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
        let buttonIJustClicked = e.target
        let cardToRemove = buttonIJustClicked.parentElement
       
        cardToRemove.remove()
      })
    })
    nameInput.value = ''
    surnameInput.value = ''
    phoneInput.value = ''
    emailInput.value = ''
  
    const nameInput = document.getElementById('name')
   nameInput.setCucstomeValidity ('completato')
