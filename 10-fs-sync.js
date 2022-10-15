const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first)
console.log(second)

//se i file non esistono con write li crei
//il flag indica se deve appendere o no
writeFileSync('./content/result-sync.txt',
`here is the result : ${first}, ${second}`,
{flag:'a'}
)