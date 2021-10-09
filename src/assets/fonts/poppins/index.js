const path = require('path')
const fs = require('fs')

const files = fs.readdirSync('./')

for (let i = 0; i < files.length; i++) {
  const curr = files[i]
  if (curr.includes('index')) {
    continue
  }

  if (curr.includes('zip')) {
    continue
  }

  const newName = curr.replace('Poppins-regular', 'Poppins-400')
  fs.renameSync(`./${curr}`, newName)
}
