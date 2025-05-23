/// else
const signInForm = document.querySelector('.signin')
const signUpForm = document.querySelector('.signup')
const toggleLinks = document.querySelectorAll('.form__text--special')

/// error messages
const errorPassSignUp = document.querySelector('.error-password-singup')
const errorRePassSignUp = document.querySelector('.error-repassword-singup')
const errorPassSignIn = document.querySelector('.error-password-singin')
const errorEmails = document.querySelectorAll('.error-email')
const loginBtn = document.querySelector('.signin-btn')

/// inputs email
const inputEmails = document.querySelectorAll('.input-email')
const inputEmail = [...inputEmails]

// inputs passwords
const inputPasswds = document.querySelectorAll('.input-password')
const inputPasswd = [...inputPasswds]
const inputPassSignUp = inputPasswd[0]
const inputRePassSignUp = inputPasswd[1]
const inputPassSignIn = inputPasswd[2]

/// passwords requirements
const passwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/
const MAX_LENGTH = 26
const MID_LENGTH = 15
const MIN_LENGTH = 7

/// functions

const changesForm = () => {
	signInForm.classList.toggle('show')
	signInForm.classList.toggle('hide')
	signUpForm.classList.toggle('show')
	signUpForm.classList.toggle('hide')
}

const checkPasswdStrenght = (e, errorElement) => {
	passwdValue = e.target.value
	passwdLength = passwdValue.length

	errorElement.classList.remove('bad', 'medium', 'good')

	if (passwdLength === 0) {
		errorElement.textContent = 'Enter valid data'
		errorElement.classList.add('bad')
	} else if (passwdLength < MIN_LENGTH || !passwdRegex.test(passwdValue)) {
		errorElement.textContent = 'Your password is weak'
		errorElement.classList.add('bad')
	} else if (passwdLength >= MIN_LENGTH && passwdLength < MID_LENGTH) {
		errorElement.textContent = 'Your password is medium'
		errorElement.classList.add('medium')
	} else if (passwdLength >= MID_LENGTH && passwdLength <= MAX_LENGTH) {
		errorElement.textContent = 'Your password is strong'
		errorElement.classList.add('good')
	} else if (passwdLength > MAX_LENGTH) {
		errorElement.textContent = 'Your password is too long'
		errorElement.classList.add('bad')
	}
}

const checkMatchPasswd = e => {
	const passwd = firstInput.value
	const repasswd = secondInput.value

	if (repasswd === '') {
		errorRePassSignUp.textContent = 'Repeat password'
		errorRePassSignUp.classList.add('bad')
		errorRePassSignUp.classList.remove('good')
	} else if (passwd === repasswd) {
		errorRePassSignUp.textContent = 'Passwords match'
		errorRePassSignUp.classList.remove('bad')
		errorRePassSignUp.classList.add('good')
	} else {
		errorRePassSignUp.textContent = 'The passwords do not match'
		errorRePassSignUp.classList.add('bad')
		errorRePassSignUp.classList.remove('good')
	}
}

const checkEmail = (e, errorElement) => {
	const emailTarget = e.target
	const emailValue = emailTarget.value
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	errorElement.classList.remove('bad', 'medium', 'good')

	if (emailValue === '') {
		errorElement.textContent = 'Enter valid data'
		errorElement.classList.add('bad')
	} else if (!emailRegex.test(emailValue)) {
		errorElement.textContent = 'Invalid email format'
		errorElement.classList.add('bad')
	} else {
		errorElement.textContent = ''
	}
}

const checkCorrectLogin = e => {
	e.preventDefault()

	const correctPasswd = 'danio123'
	const correctMail = 'fovcode@proton.me'
	const passwd = inputPassSignIn.value
	const mail = inputEmails[1].value

	errorPassSignIn.textContent = ''
	errorPassSignIn.classList.remove('bad', 'medium', 'good')
	errorEmails[1].textContent = ''
	errorEmails[1].classList.remove('bad')

	if (passwd === correctPasswd && mail === correctMail) {
		window.location.href = '/html/main.html'
	} else if (passwd !== correctPasswd) {
		errorPassSignIn.textContent = 'Incorrect password'
		errorPassSignIn.classList.add('bad')
	} else if (mail !== correctMail) {
		errorEmails[1].textContent = 'Incorrect email'
		errorEmails[1].classList.add('bad')
	}
}

/// LISTENER

inputPassSignUp.addEventListener('input', e => checkPasswdStrenght(e, errorPassSignUp))
inputRePassSignUp.addEventListener('input', checkMatchPasswd)
inputPassSignIn.addEventListener('input', e => checkPasswdStrenght(e, errorPassSignIn))

inputEmails.forEach((emailInput, index) => {
	emailInput.addEventListener('input', e => {
		const errorElement = errorEmails[index]
		checkEmail(e, errorElement)
	})
})

toggleLinks.forEach(link => {
	link.addEventListener('click', changesForm)
})

loginBtn.addEventListener('click', checkCorrectLogin)
