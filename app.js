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
  return msg.reply.text('سلام ' + firstName + ' ' + lastName);
});

bot.on('sticker', (msg) => {
  msg.reply.text('استیکر زیباییه')
});

bot.sendMessage('@rajabzz', 'سلام من بات فلانی‌ام');

bot.start();