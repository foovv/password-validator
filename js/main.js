const signInForm = document.querySelector('.signin')
const signUpForm = document.querySelector('.signup')
const toggleLinks = document.querySelectorAll('.form__text--special')

toggleLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    signInForm.classList.toggle('show')
    signInForm.classList.toggle('hide')
    signUpForm.classList.toggle('show')
    signUpForm.classList.toggle('hide')
  })
})
