'use strict';
const telebot = require('telebot');
const bot = new telebot({
  token: 'HAHA! Revoked Previous Token',
});

bot.on('text', (msg) => {
  let text = msg.text;
  let chatId = msg.chat.id;
  if (text.search('بسه دیگه') !== -1) {
    bot.forwardMessage(chatId, -1001384114403, 3);
  }
});

bot.start();
