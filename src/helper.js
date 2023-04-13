const RL = require('readline')
const UTIL = require('util')

async function readLine(message) {
    const readline = RL.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const question = UTIL.promisify(readline.question).bind(readline)
    const line = await question(`${message}> `)
    readline.close()
    return line
}

function checkPassword(name, password) {
    const DB = { lili: { pw: 'k29cjs' } }

    if (!(name in DB))
        return false

    data = DB[name]
    return password == data.pw
}

module.exports = {
    readLine: readLine,
    checkPassword: checkPassword,
}