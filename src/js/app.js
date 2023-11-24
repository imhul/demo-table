// app.js
import { createTable } from './table.js'
import { handleSignUp } from './signUp.js'
import '@fontsource/roboto/latin-400.css'
import '@fontsource/roboto/latin-700.css'

document.addEventListener('DOMContentLoaded', () => {
  createTable()
  handleSignUp()
})
