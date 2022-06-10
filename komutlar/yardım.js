const Discord = require('discord.js')
const prefix = require('../ayarlar.js').prefix

exports.run = (client, message) => {
  
 
  const chrome = new Discord.MessageEmbed()
  .setTitle("Bot Komutalarý Altta Belirtilmiþtir")
  .setColor("RANDOM")
    .addField("?  **!oyver**","? Sunucuya oy verirsiniz.")
    .addField("?  **!ödüller**","? Rol ödüllerini kontrol edersiniz.")
    .addField("?  **!oyum**","? Sunucuda kaç oy verdiðinizi gösterir.")
    .addField("?  **!sunucu-oy**","? Sunucunun kaç oy aldýðýný gösterir.")
    .addField("?  **!davetet**","? Davet linklerini gösterir.")
    .addField("?  **!ödül-sil**","? (@rol) | Eklediðiniz ödülü silersiniz.")
    .addField("?  **!ödül-ekle**","? (@rol) (oy sayýsý) | Role oy ödülü eklersiniz.")
    .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=962372281110241320&permissions=8&scope=bot%20applications.commands)", )
    .addField("**» SCLEG Site**", " [Botun Sitesi](https://www.sclegbot.tk/)", )
    .setImage("https://share.creavite.co/dMJ1BZcuxzzodGoE.gif")
  .setFooter(`${message.author.tag} Tarafýndan Ýstendi.`, message.author.avatarURL())
  message.channel.send(chrome);   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardým"],
  permLevel: 0,
};

exports.help = {
  name: 'yardým',
};