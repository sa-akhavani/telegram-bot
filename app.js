'use strict';
const telebot = require('telebot');
const bot = new telebot({
  token: '502610414:AAHsvFIPh7hgebc5AMoJf5dlclyHxLawK9E',
});

bot.on('text', (msg) => {
  let text = msg.text;
  let chatId = msg.chat.id;
  if (text.search('بسه دیگه') !== -1) {
    bot.sendMessage(chatId, 'https://t.me/khodaya_basse_dige/3');
  }
});

bot.start();
