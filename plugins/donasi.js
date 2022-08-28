let handler = async m => m.reply(`
╭─「 Donate 」
│ • You can follow my github account 
│ • https://github.com/SACHIBOT
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler