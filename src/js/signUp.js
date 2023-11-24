const signUp = (planName, period) => {
  console.log(
    `Signing up for ${String(planName).toUpperCase()} plan` +
      `and ${String(period).toUpperCase()} billing frequency!`
  )
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
