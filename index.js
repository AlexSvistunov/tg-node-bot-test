const telegramAPI = require('node-telegram-bot-api')

const token = '7020071308:AAEqmLWzzfPwr4GaV6QjNuAqeNLQA3AdJJk'

const bot = new telegramAPI(token, {polling: true})

bot.setMyCommands([
  {command: '/start', description: 'initial greeting'},
  {command: '/info', description: 'information'}
])

bot.on('message', msg => {
  const text = msg.text
  const chatId = msg.chat.id

 
})