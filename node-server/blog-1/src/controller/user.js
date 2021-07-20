const {exec} = require('../db/mysql.js')
const login = (username, password) => {
    const sql = `select username, realname from users where username='${username}' and password='${password}'`
    console.log(sql)
    return exec(sql).then(rows => {
        return rows[0] || {}
    })
    // if (username === 'sunrifa' && password === '123456') {
    //     return true
    // }
    // return false
}
module.exports = {
    login
}