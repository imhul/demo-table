const signUp = (planName) => {
  console.log(`Signing up for ${planName} plan`)
}

export const handleSignUp = () => {
  const buttons = document.querySelectorAll('.sign-up-btn')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const planName = button.getAttribute('data-plan')
      signUp(planName)
    })
  })
}
