const signInForm = document.querySelector('.signin')
const signUpForm = document.querySelector('.signup')
const toggleLinks = document.querySelectorAll('.form__text--special')
const input = document.querySelector('.form__input')

/// error messages

const errorPasswdSingup = document.querySelector('.error-password-singup')
const errorPasswdSingin = document.querySelector('.error-password-singin')
const errorRePasswdSingup = document.querySelector('.error-repassword-singup')
const errorEmails = document.querySelectorAll('.error-email')
const loginBtn = document.querySelector('.signin-btn')

/// inputs

const inputPasswds = document.querySelectorAll('.input-password')
const inputEmails = document.querySelectorAll('.input-email')
const inputEmail = [...inputEmails]

const inputPasswd = [...inputPasswds]
const firstInput = inputPasswd[0]
const secondInput = inputPasswd[1]
const thirdInput = inputPasswd[2]

/// PASSWORDS REQUIREMENTS

const passwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/
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
	const passwdValue = passwdTarget.value

	if (passwdLength === 0) {
		errorPasswdSingin.classList.remove('medium')
		errorPasswdSingin.classList.remove('good')
		errorPasswdSingin.textContent = 'Enter valid data'
		errorPasswdSingin.classList.add('bad')
	} else if (passwdLength < MIN_LENGTH && !passwdRegex.test(passwdValue)) {
		errorPasswdSingin.classList.remove('good')
		errorPasswdSingin.classList.remove('medium')
		errorPasswdSingin.textContent = 'Your password is weak'
		errorPasswdSingin.classList.add('bad')
	} else if (passwdLength >= MIN_LENGTH && passwdLength < MID_LENGTH && passwdRegex.test(passwdValue)) {
		errorPasswdSingin.classList.remove('good')
		errorPasswdSingup.classList.remove('bad')
		errorPasswdSingin.textContent = 'Your password is medium'
		errorPasswdSingin.classList.add('medium')
	} else if (passwdLength >= MID_LENGTH && passwdLength <= MAX_LENGTH && passwdRegex.test(passwdValue)) {
		errorPasswdSingin.classList.remove('medium')
		errorPasswdSingup.classList.remove('bad')
		errorPasswdSingin.textContent = 'Your password is strong'
		errorPasswdSingin.classList.add('good')
	} else if (passwdLength > MAX_LENGTH) {
		errorPasswdSingin.classList.remove('medium')
		errorPasswdSingin.classList.remove('good')
		errorPasswdSingin.textContent = 'Your password is too long'
		errorPasswdSingin.classList.add('bad')
	}
}

const checkLenghtSingup = e => {
	const passwdTarget = e.target
	const passwdLength = passwdTarget.value.length
	const passwdValue = passwdTarget.value

	if (passwdLength === 0) {
		errorPasswdSingup.classList.remove('medium')
		errorPasswdSingup.classList.remove('good')
		errorPasswdSingup.textContent = 'Enter valid data'
		errorPasswdSingup.classList.add('bad')
	} else if (passwdLength < MIN_LENGTH && !passwdRegex.test(passwdValue)) {
		errorPasswdSingup.classList.remove('good')
		errorPasswdSingup.classList.remove('medium')
		errorPasswdSingup.textContent = 'Your password is to weak'
		errorPasswdSingup.classList.add('bad')
	} else if (passwdLength >= MIN_LENGTH && passwdLength < MID_LENGTH && passwdRegex.test(passwdValue)) {
		errorPasswdSingup.classList.remove('good')
		errorPasswdSingup.classList.remove('bad')
		errorPasswdSingup.textContent = 'Your password is medium'
		errorPasswdSingup.classList.add('medium')
	} else if (passwdLength >= MID_LENGTH && passwdLength <= MAX_LENGTH && passwdRegex.test(passwdValue)) {
		errorPasswdSingup.classList.remove('medium')
		errorPasswdSingup.classList.remove('bad')
		errorPasswdSingup.textContent = 'Your password is strong'
		errorPasswdSingup.classList.add('good')
	} else if (passwdLength > MAX_LENGTH) {
		errorPasswdSingup.classList.remove('medium')
		errorPasswdSingup.classList.remove('good')
		errorPasswdSingup.textContent = 'Your password is too long'
		errorPasswdSingup.classList.add('bad')
	}
}

const checkMatchPasswd = e => {
	const passwd = firstInput.value
	const repasswd = secondInput.value

	if (repasswd === '') {
		errorRePasswdSingup.textContent = 'Repeat password'
		errorRePasswdSingup.classList.add('bad')
		errorRePasswdSingup.classList.remove('good')
	} else if (passwd === repasswd) {
		errorRePasswdSingup.textContent = 'Passwords match'
		errorRePasswdSingup.classList.remove('bad')
		errorRePasswdSingup.classList.add('good')
	} else {
		errorRePasswdSingup.textContent = 'The passwords do not match'
		errorRePasswdSingup.classList.add('bad')
		errorRePasswdSingup.classList.remove('good')
	}
}

const checkEmail = (e, errorElement) => {
	const emailTarget = e.target
	const emailValue = emailTarget.value
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (emailValue === '') {
		errorElement.textContent = 'Enter valid data'
		errorElement.classList.add('bad')
		errorElement.classList.remove('good')
	} else if (!emailRegex.test(emailValue)) {
		errorElement.textContent = 'Invalid email format'
		errorElement.classList.add('bad')
		errorElement.classList.remove('good')
	} else {
		errorElement.textContent = ''
	}
}

const checkCorrectLogin = e => {
	e.preventDefault()

	// test data
	const correctPasswd = 'danio123'
	const correctMail = 'fovcode@proton.me'
	const passwd = thirdInput.value
	const mail = inputEmail.value

	if (passwd === correctPasswd && mail === correctMail) {
		window.location.href = '/html/main.html'
	} else {
		errorPasswdSingin.textContent = 'Incorrect password'
		errorPasswdSingin.classList.add('bad')
		errorPasswdSingin.classList.remove('medium')
		errorPasswdSingin.classList.remove('good')
	}
}

/// LISTENER

firstInput.addEventListener('input', checkLenghtSingup)
secondInput.addEventListener('input', checkMatchPasswd)
thirdInput.addEventListener('input', checkLengthSingin)

inputEmails.forEach((emailInput, index) => {
	emailInput.addEventListener('input', e => {
		const errorElement = errorEmails[index] // Wybierz odpowiedni element błędu
		checkEmail(e, errorElement)
	})
})

toggleLinks.forEach(link => {
	link.addEventListener('click', changesForm)
})

loginBtn.addEventListener('click', checkCorrectLogin)
