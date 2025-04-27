const signInForm = document.querySelector('.signin')
const signUpForm = document.querySelector('.signup')
const toggleLinks = document.querySelectorAll('.form__text--special')
const input = document.querySelector('.form__input')

/// error messages

const errorPasswdSingup = document.querySelector('.error-password-singup')
const errorPasswdSingin = document.querySelector('.error-password-singin')
const errorRePasswdSingup = document.querySelector('.error-repassword-singup')

/// inputs

const inputPasswds = document.querySelectorAll('.input-password')
const inputPasswd = [...inputPasswds]
const firstInput = inputPasswd[0]
const secondInput = inputPasswd[1]
const thirdInput = inputPasswd[2]
const inputEmail = document.querySelector('.input-email')
const inputRePasswd = document.querySelector('.input-repassword')

/// LENGHTS

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

const checkLengthSingin = e => {
	const passwdTarget = e.target
	const passwdLength = passwdTarget.value.length
	if (passwdLength === 0) {
		errorPasswdSingin.classList.remove('medium')
		errorPasswdSingin.classList.remove('good')
		errorPasswdSingin.textContent = 'Wprowadź prawidłowe dane'
		errorPasswdSingin.classList.add('bad')
	} else if (passwdLength < MIN_LENGTH) {
		errorPasswdSingin.classList.remove('good')
		errorPasswdSingin.classList.remove('medium')
		errorPasswdSingin.textContent = 'Masz słabe hasło!'
		errorPasswdSingin.classList.add('bad')
	} else if (passwdLength >= MIN_LENGTH && passwdLength < MID_LENGTH) {
		errorPasswdSingin.classList.remove('good')
		errorPasswdSingup.classList.remove('bad')
		errorPasswdSingin.textContent = 'Masz średnie hasło!'
		errorPasswdSingin.classList.add('medium')
	} else if (passwdLength >= MID_LENGTH && passwdLength <= MAX_LENGTH) {
		errorPasswdSingin.classList.remove('medium')
		errorPasswdSingup.classList.remove('bad')
		errorPasswdSingin.textContent = 'Masz dobre hasło!'
		errorPasswdSingin.classList.add('good')
	} else if (passwdLength > MAX_LENGTH) {
		errorPasswdSingin.classList.remove('medium')
		errorPasswdSingin.classList.remove('good')
		errorPasswdSingin.textContent = 'Hasło posiada za dużo znaków'
		errorPasswdSingin.classList.add('bad')
	}
}

const checkLenghtSingup = e => {
	const passwdTarget = e.target
	const passwdLength = passwdTarget.value.length

	if (passwdLength === 0) {
		errorPasswdSingup.classList.remove('medium')
		errorPasswdSingup.classList.remove('good')
		errorPasswdSingup.textContent = 'Wprowadź prawidłowe dane'
		errorPasswdSingup.classList.add('bad')
	} else if (passwdLength < MIN_LENGTH) {
		errorPasswdSingup.classList.remove('good')
		errorPasswdSingup.classList.remove('medium')
		errorPasswdSingup.textContent = 'Masz słabe hasło!'
		errorPasswdSingup.classList.add('bad')
	} else if (passwdLength >= MIN_LENGTH && passwdLength < MID_LENGTH) {
		errorPasswdSingup.classList.remove('good')
		errorPasswdSingup.classList.remove('bad')
		errorPasswdSingup.textContent = 'Masz średnie hasło!'
		errorPasswdSingup.classList.add('medium')
	} else if (passwdLength >= MID_LENGTH && passwdLength <= MAX_LENGTH) {
		errorPasswdSingup.classList.remove('medium')
		errorPasswdSingup.classList.remove('bad')
		errorPasswdSingup.textContent = 'Masz dobre hasło!'
		errorPasswdSingup.classList.add('good')
	} else if (passwdLength > MAX_LENGTH) {
		errorPasswdSingup.classList.remove('medium')
		errorPasswdSingup.classList.remove('good')
		errorPasswdSingup.textContent = 'Hasło posiada za dużo znaków'
		errorPasswdSingup.classList.add('bad')
	}
}

const checkMatchPasswd = e => {
	const passwd = firstInput.value
	const repasswd = secondInput.value

	if (repasswd === '') {
		errorRePasswdSingup.textContent = 'Powtórz hasło'
		errorRePasswdSingup.classList.add('bad')
		errorRePasswdSingup.classList.remove('good')
	} else if (passwd === repasswd) {
		errorRePasswdSingup.textContent = 'Hasła są zgodne'
		errorRePasswdSingup.classList.remove('bad')
		errorRePasswdSingup.classList.add('good')
	} else {
		errorRePasswdSingup.textContent = 'Hasła się różnią'
		errorRePasswdSingup.classList.add('bad')
		errorRePasswdSingup.classList.remove('good')
	}
}

/// LISTENER

firstInput.addEventListener('input', checkLenghtSingup)
secondInput.addEventListener('input', checkMatchPasswd)
thirdInput.addEventListener('input', checkLengthSingin)

toggleLinks.forEach(link => {
	link.addEventListener('click', changesForm)
})
