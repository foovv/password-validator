const signInForm = document.querySelector('.signin')
const signUpForm = document.querySelector('.signup')
const toggleLinks = document.querySelectorAll('.form__text--special')
const input = document.querySelector('.form__input')
const errorPasswdSingup = document.querySelector('.error-password-singup')
const errorPasswdSingin = document.querySelector('.error-password-singin')
const inputPasswds = document.querySelectorAll('.input-password')
const inputPasswd = [...inputPasswds]
const firstInput = inputPasswd[0]
const secondInput = inputPasswd[1]
const inputEmail = document.querySelector('.input-email')
const inputRePasswd = document.querySelector('.input-repassword')
const MAX_LENGTH = 26
const MID_LENGTH = 15
const MIN_LENGTH = 7

/// FUNCTIONS

const changesForm = () => {
  signInForm.classList.toggle('show')
  signInForm.classList.toggle('hide')
  signUpForm.classList.toggle('show')
  signUpForm.classList.toggle('hide')
}

const getInputPasswd = () => {}

const checkLength = (e) => {
  const passwdTarget = e.target
  const passwdLength = passwdTarget.value.length
  textContent = ''

  if (passwdLength === 0 || passwdLength < MIN_LENGTH) {
    errorPasswdSingin.classList.remove('good')
    errorPasswdSingin.classList.remove('medium')
    errorPasswdSingin.textContent = 'Masz słabe hasło!'
    errorPasswdSingin.classList.add('bad')
  } else if (passwdLength <= MIN_LENGTH || passwdLength < MID_LENGTH) {
    errorPasswdSingin.classList.remove('good')
    errorPasswdSingin.textContent = 'Masz średnie hasło!'
    errorPasswdSingin.classList.add('medium')
  } else if (passwdLength <= MID_LENGTH || passwdLength <= MAX_LENGTH) {
    errorPasswdSingin.classList.remove('medium')
    errorPasswdSingin.textContent = 'Masz dobre hasło!'
    errorPasswdSingin.classList.add('good')
  } else {
    errorPasswdSingin.classList.remove('medium')
    errorPasswdSingin.classList.remove('good')
    errorPasswdSingin.textContent = 'Wprowadz prawidłowe dane'
    errorPasswdSingin.classList.add('bad')
  }
  console.log(passwdLength)
}

/// LISTENER

secondInput.addEventListener('input', checkLength)
toggleLinks.forEach((link) => {
  link.addEventListener('click', changesForm)
})

console.log(firstInput)
console.log(inputPasswd)
