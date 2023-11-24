import { openModal } from './modal'

const signUp = (planName, period) => {
  const text =
    `Signing up for ${String(planName).toUpperCase()} plan ` +
    `and ${String(period).toUpperCase()} billing frequency!`

  console.info(text)
  openModal(text)
  // Code to sign up user for plan
}

export const handleSignUp = () => {
  const buttons = document.querySelectorAll('.ripple')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const planName = button.getAttribute('data-plan')
      const period = button.getAttribute('data-period')
      signUp(planName, period)
    })
  })
}
