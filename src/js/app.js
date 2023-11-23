// app.js
import { createTable } from './table.js'
import { handleSignUp } from './signUp.js'

export const signUp = (planName) => {
  console.info(`Signing up for ${planName} plan`)
}

document.addEventListener('DOMContentLoaded', function () {
  let period = 'yearly' // 'monthly' or 'yearly'

  createTable(period)
  handleSignUp()
})
