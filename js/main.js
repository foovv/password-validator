const signInForm = document.querySelector('.signin')
const signUpForm = document.querySelector('.signup')
const toggleLinks = document.querySelectorAll('.form__text--special')
const input = document.querySelector('.form__input')
const errorMessPasswd = document.querySelector('.form__error-passwd')
const inputPasswd = document.querySelector('.input-password')
const inputEmail = document.querySelector('.input-email')
const inputRePasswd = document.querySelector('.input-repassword')
const MAX_LENGHT = 26
const MID_LENGTH = 15
const MIN_LENGHT = 7

const changesForm = () => {
  signInForm.classList.toggle('show')
  signInForm.classList.toggle('hide')
  signUpForm.classList.toggle('show')
  signUpForm.classList.toggle('hide')
}

toggleLinks.forEach((link) => {
  link.addEventListener('click', changesForm)
})

const checkLenght = () => {
  const passwdLenght = inputPasswd.value.length
  textContent = ''

  if (passwdLenght === 0 || passwdLenght < MIN_LENGHT) {
    errorMessPasswd.classList.remove('medium')
    errorMessPasswd.textContent = 'Masz słabe hasło!'
    errorMessPasswd.classList.add('bad')
  } else if (passwdLenght <= MIN_LENGHT || passwdLenght < MID_LENGTH) {
    errorMessPasswd.classList.remove('good')
    errorMessPasswd.textContent = 'Masz średnie hasło!'
    errorMessPasswd.classList.add('medium')
  } else if (passwdLenght <= MID_LENGTH || passwdLenght <= MAX_LENGHT) {
    errorMessPasswd.classList.remove('medium')
    errorMessPasswd.textContent = 'Masz dobre hasło!'
    errorMessPasswd.classList.add('good')
  } else {
    errorMessPasswd.classList.remove
    errorMessPasswd.textContent = 'Wprowadz prawidłowe dane'
    errorMessPasswd.classList.add('bad')
  }
}

inputPasswd.addEventListener('input', checkLenght)
