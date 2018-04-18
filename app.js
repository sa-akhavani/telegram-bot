'use strict';
const telebot = require('telebot');
const bot = new telebot({
  token: '502610414:AAHsvFIPh7hgebc5AMoJf5dlclyHxLawK9E',
});

bot.on('text', (msg) => {
  let text = msg.text;
  let chatId = msg.chat.id;
  if (text.search('بسه دیگه') !== -1) {
    if (msg.from.id === 86530693) {
      bot.sendMessage(chatId, 'هومن جان قار نکش!');
    } else {
      bot.forwardMessage(chatId, -1001384114403, 3);
    }
  }
});

bot.start();
