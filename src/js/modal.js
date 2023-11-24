const removeModal = (modal) => {
  modal.classList.remove('modal-visible')
  setTimeout(() => {
    document.body.removeChild(modal)
  }, 300)
}

export const openModal = (text) => {
  let modal = document.querySelector('div.modal')
  if (modal) removeModal(modal)

  modal = document.createElement('div')
  modal.classList.add('modal')
  modal.innerHTML = `<span>${text}</span>`
  document.body.appendChild(modal)

  setTimeout(() => {
    modal.classList.add('modal-visible')
  }, 0)

  setTimeout(() => {
    removeModal(modal)
  }, 3000)
}
