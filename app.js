'use strict';
const telebot = require('telebot');
const bot = new telebot({
  token: '502610414:AAHsvFIPh7hgebc5AMoJf5dlclyHxLawK9E',
});

console.log('Environment is: ' + process.env.NODE_ENV);

bot.on('text', (msg) => {
  let firstName = msg.from.first_name;
  console.log(msg.from.id);
  let lastName = msg.from.last_name;
  // msg.reply.text('سلام ' + firstName + ' ' + lastName);
  // return bot.sendMessage('87799087', 'سلام من بات فلانی‌ام');
});
bot.on('sticker', (msg) => {
  msg.reply.text('استیکر نده دیوث')
});

bot.sendMessage('87799087', 'سلام من بات فلانی‌ام');

bot.start();