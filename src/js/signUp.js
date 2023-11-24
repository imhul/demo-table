const signUp = (planName) => {
  console.log(
    `Signing up for ${planName} plan and ${period} billing frequency!`
  )
  // Code to sign up user for plan
}

export const handleSignUp = () => {
  const buttons = document.querySelectorAll('.sign-up-btn')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const planName = button.getAttribute('data-plan')
      const period = button.getAttribute('data-period')
      signUp(planName, period)
    })
  })
}
