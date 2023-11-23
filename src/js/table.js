// Create table with data from data.js
import { data } from './data.js'

export const createTable = (period) => {
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
          `$${(period === 'monthly'
            ? item.monthlyPrice
            : item.monthlyPrice * 12
          ).toFixed(2)}`
      ),
    ],
    ['Billing Frequency', ...data.map(() => period)],
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
        `<button class="sign-up-btn" data-plan="${item.name}">Sign Up</button>`
    ),
  ]

  // Creating rows in tbody
  rows.forEach((row, index) => {
    const tr = document.createElement('tr')
    tr.classList.add(`row-${index + 1}`)

    row.forEach((cellContent, cellIndex) => {
      const td = document.createElement('td')
      td.classList.add(`col-${cellIndex + 1}`)
      td.innerHTML = cellContent
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
