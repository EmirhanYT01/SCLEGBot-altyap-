const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.js');

exports.run = (client, message) => {
  const chrome = new Discord.MessageEmbed()
  .setTitle("Davet Linkleri Altta Belirtilmiþtir")
  .setColor("Random")
    .addField("» **Botun Holder**", "<@787259843395977237>")
    .addField("» **Botun Co-Holder**", "<@979023408996188160>")
    .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=967756464393429014&permissions=8&scope=bot%20applications.commands)", )
    .addField("**» SCLEG Site**", " [Bot Sitesi](https://www.sclegbot.tk/)", )
    .setImage("https://share.creavite.co/dMJ1BZcuxzzodGoE.gif")
  .setFooter(`${message.author.tag} Tarafýndan Ýstendi.(Botu davet et lütfen)`, message.author.avatarURL())
  message.channel.send(chrome);   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davetet',
};