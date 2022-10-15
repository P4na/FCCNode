//BUILT-IN MODULE
//PATH MODULE

const path = require('path')

//separatore
console.log(path.sep)

//trova un percorso
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//file finale
const base = path.basename(filePath)
console.log(base)

//percorso assoluto
const absolute = path.resolve(__dirname, 'content', 'subfolder','test.txt')
console.log(absolute)