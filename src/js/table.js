// Create table with data from data.json

import data from '../data/data.json'

let period = 'monthly' // 'monthly' or 'yearly'
const icon = new URL('../assets/svg/double-check-icon.svg', import.meta.url)

const updateTable = () => {
  period = period === 'monthly' ? 'yearly' : 'monthly'
  const periodCell = document.getElementById('period')
  periodCell.innerHTML = period

  data.forEach((item) => {
    const price = document.getElementById(`price-${item.name}`)
    const currentPrice = parseInt(price.innerHTML)
    const targetPrice =
      period === 'monthly' ? item.monthlyPrice : item.monthlyPrice * 12
    const animationSteps = 50
    const stepValue = (targetPrice - currentPrice) / animationSteps

    let currentValue = currentPrice
    let stepCount = 0

    const animatePrice = () => {
      currentValue += stepValue
      price.innerHTML = Math.round(currentValue)

      stepCount++
      if (stepCount < animationSteps) {
        requestAnimationFrame(animatePrice)
      }
    }

    animatePrice()
  })
}

export const createTable = () => {
  const tableContainer = document.getElementById('table-wrapper')
  const table = document.createElement('table')

  // Thead
  const thead = document.createElement('thead')
  const trHead = document.createElement('tr')
  trHead.innerHTML =
    '<th></th>' + data.map((item) => `<th>${item.name}</th>`).join('')
  thead.appendChild(trHead)
  table.appendChild(thead)

  // Tbody
  const tbody = document.createElement('tbody')

  // Rows
  const rows = [
    [
      'Price',
      ...data.map(
        (item) =>
          `$<span id="price-${item.name}">${item.monthlyPrice}</span>.00`
      ),
    ],
    [
      'Billing Frequency',
      ...data.map(
        () => `<span class="capitalize" id="period">${period}</span>`
      ),
    ],
  ]

  for (let i = 1; i <= data[0].features.length; i++) {
    const featureName = `Feature ${i}`
    const featureRow = [
      featureName,
      ...data.map((item) => (item.features[i - 1].exist ? '✔' : '✘')),
    ]
    rows.push(featureRow)
  }

  // Buttons Row
  const buttonsRow = [
    '',
    ...data.map(
      (item) =>
        `<button class="ripple" data-period="${period}" ` +
        `data-plan="${item.name}">Sign Up <img src="${icon}" width="16" alt="check icon" /></button>`
    ),
  ]

  // Switch
  const control = document.createElement('div')
  control.classList.add('control')
  const input = document.createElement('input')
  input.setAttribute('type', 'checkbox')
  input.setAttribute('id', 'toggle')
  input.classList.add('checkbox')
  input.addEventListener('change', updateTable)
  const label = document.createElement('label')
  label.setAttribute('for', 'toggle')
  label.classList.add('switch')
  control.appendChild(input)
  control.appendChild(label)

  // Creating rows in tbody
  rows.forEach((row, index) => {
    const tr = document.createElement('tr')
    tr.classList.add(`row-${index + 1}`)

    row.forEach((cellContent, cellIndex) => {
      if (index === 1 && cellIndex > 1) return
      const td = document.createElement('td')
      td.classList.add(`col-${cellIndex + 1}`)
      if (index === 1 && cellIndex === 1) {
        const flexContainer = document.createElement('div')
        flexContainer.classList.add('flex-container')
        flexContainer.innerHTML = cellContent
        flexContainer.appendChild(control)
        td.setAttribute('colspan', 3)
        td.appendChild(flexContainer)
      } else {
        td.innerHTML = cellContent
      }
      tr.appendChild(td)
    })

    tbody.appendChild(tr)
  })

  // Buttons Row
  const buttonsTr = document.createElement('tr')
  buttonsRow.forEach((cellContent) => {
    const td = document.createElement('td')
    td.innerHTML = cellContent
    buttonsTr.appendChild(td)
  })
  tbody.appendChild(buttonsTr)

  table.appendChild(tbody)
  tableContainer.appendChild(table)
}
