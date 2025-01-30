const signInForm = document.querySelector('.signin')
const signUpForm = document.querySelector('.signup')
const toggleLinks = document.querySelectorAll('.form__text--special')

const changesForm = () => {
  signInForm.classList.toggle('show')
  signInForm.classList.toggle('hide')
  signUpForm.classList.toggle('show')
  signUpForm.classList.toggle('hide')
}

toggleLinks.forEach((link) => {
  link.addEventListener('click', changesForm)
})
