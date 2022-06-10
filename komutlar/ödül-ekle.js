const Discord = require('discord.js');
const db = require('orio.db')
const prefix = require('../ayarlar.js').prefix

exports.run = async(client, message, args) => { 



// -------- \\

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('> ? **Baþarasýz** Bu komutu kullanamazsýn!')

//------------\\

  let role;
  let kanal = message.channel;
  let ar1 = args[0];
  let role1 = message.mentions.roles.first()
  let role2 = message.guild.roles.cache.get(args[0]);
  if (role1) {
    role = role1;
  }
  if (role2) {
    role = role2;
  }

//------------\\

  if (!ar1)
    return message.channel.send(
      "> ? **Baþarýsýz!** Lütfen oy sayýsýný belirtin! **Örnek kullaným:** `"+ prefix +"rolekle 1 @rol`"
    );
//------------\\
  if (isNaN(ar1.replace("w", "")))
    return message.channel.send(
      "> ? **Baþarýsýz!** Lütfen oy sayýsýný belirtirken sadece sayý kullanýn! **Örnek kullaným:** `"+ prefix +"rolekle 1 @rol`"
    );

//------------\\

if (!role) return message.channel.send("> ? **Baþarasýz** Bir Rol Etiketlemelisin veya ID Yazmalýsýn! **Örnek kullaným:** `"+ prefix +"rolekle 1 @rol`");

//------------\\

let data = db.get(`voteROL_${role.id}_${message.guild.id}`)
if (data) return message.channel.send("> ? **Baþarasýz** Bu sayýya zaten rol atanmýþ.");

// -------- \\

message.channel.send("> ?  **Baþarýlý** Kullanýcý **"+ ar1 +"** oy sayýsýna gelince <@&"+ role +"> rolü verilcek.")

db.set(`voteROL_${role.id}_${message.guild.id}`, {
rol: role.id,
sayý: ar1
})

// -------- \\

};
exports.conf = {
aliases: []
};

exports.help = {
name: 'ödül-ekle'
};