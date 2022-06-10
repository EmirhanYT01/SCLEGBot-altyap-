const Discord = require('discord.js');
const db = require('orio.db')
const prefix = require('../ayarlar.js').prefix

exports.run = async(client, message, args) => { 



// -------- \\

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('> ? **Ba�aras�z** Bu komutu kullanamazs�n!')

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
      "> ? **Ba�ar�s�z!** L�tfen oy say�s�n� belirtin! **�rnek kullan�m:** `"+ prefix +"rolekle 1 @rol`"
    );
//------------\\
  if (isNaN(ar1.replace("w", "")))
    return message.channel.send(
      "> ? **Ba�ar�s�z!** L�tfen oy say�s�n� belirtirken sadece say� kullan�n! **�rnek kullan�m:** `"+ prefix +"rolekle 1 @rol`"
    );

//------------\\

if (!role) return message.channel.send("> ? **Ba�aras�z** Bir Rol Etiketlemelisin veya ID Yazmal�s�n! **�rnek kullan�m:** `"+ prefix +"rolekle 1 @rol`");

//------------\\

let data = db.get(`voteROL_${role.id}_${message.guild.id}`)
if (data) return message.channel.send("> ? **Ba�aras�z** Bu say�ya zaten rol atanm��.");

// -------- \\

message.channel.send("> ?  **Ba�ar�l�** Kullan�c� **"+ ar1 +"** oy say�s�na gelince <@&"+ role +"> rol� verilcek.")

db.set(`voteROL_${role.id}_${message.guild.id}`, {
rol: role.id,
say�: ar1
})

// -------- \\

};
exports.conf = {
aliases: []
};

exports.help = {
name: '�d�l-ekle'
};