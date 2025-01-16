const password = document.querySelector('#password')
const email = document.querySelector('#email')
const p = document.querySelector('.box__form-infopasswd')
const btn = document.querySelector('button')

// Wyrażenia regularne
const lowPasswd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,9}$/ // 8+ znaków, 1 litera, 1 cyfra
const mediumPasswd =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,15}$/ // 10+ znaków, 1 litera, 1 cyfra, 1 znak specjalny
const goodPasswd =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{16,25}$/ // 16+ znaków, 1 wielka litera, 1 cyfra, 1 znak specjalny

const checkPassword = () => {
  const passwordValue = password.value
  p.textContent = ''

  if (lowPasswd.test(passwordValue) || passwordValue.lenght < 1) {
    p.classList.remove('show')
    p.style.color = 'red'
    p.textContent = 'słabe hasło'
  } else if (mediumPasswd.test(passwordValue)) {
    p.classList.remove('show')
    p.style.color = 'yellow'
    p.textContent = 'średnie hasło'
  } else if (goodPasswd.test(passwordValue)) {
    p.classList.remove('show')
    p.style.color = 'green'
    p.textContent = 'dobre hasło'
  } else {
    p.classList.remove('show')
    p.style.color = 'red'
    p.textContent = 'podaj prawidłowe wartości!'
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault()
  checkPassword()
})
