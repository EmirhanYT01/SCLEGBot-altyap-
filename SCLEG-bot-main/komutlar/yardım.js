const Discord = require('discord.js')
const prefix = require('../ayarlar.js').prefix

exports.run = (client, message) => {
  
 
  const chrome = new Discord.MessageEmbed()
  .setTitle("Bot Komutalar� Altta Belirtilmi�tir")
  .setColor("RANDOM")
    .addField("?  **!oyver**","? Sunucuya oy verirsiniz.")
    .addField("?  **!�d�ller**","? Rol �d�llerini kontrol edersiniz.")
    .addField("?  **!oyum**","? Sunucuda ka� oy verdi�inizi g�sterir.")
    .addField("?  **!sunucu-oy**","? Sunucunun ka� oy ald���n� g�sterir.")
    .addField("?  **!davetet**","? Davet linklerini g�sterir.")
    .addField("?  **!�d�l-sil**","? (@rol) | Ekledi�iniz �d�l� silersiniz.")
    .addField("?  **!�d�l-ekle**","? (@rol) (oy say�s�) | Role oy �d�l� eklersiniz.")
    .addField("**� Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=962372281110241320&permissions=8&scope=bot%20applications.commands)", )
    .addField("**� SCLEG Site**", " [Botun Sitesi](https://www.sclegbot.tk/)", )
    .setImage("https://share.creavite.co/dMJ1BZcuxzzodGoE.gif")
  .setFooter(`${message.author.tag} Taraf�ndan �stendi.`, message.author.avatarURL())
  message.channel.send(chrome);   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yard�m"],
  permLevel: 0,
};

exports.help = {
  name: 'yard�m',
};