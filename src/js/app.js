// app.js
import { createTable } from './table.js'
import { handleSignUp } from './signUp.js'
import '@fontsource/roboto'

document.addEventListener('DOMContentLoaded', () => {
  createTable()
  handleSignUp()
})
