const Discord = require('discord.js');
const db = require('orio.db')
const prefix = require('../ayarlar.js').prefix
const disbut = require('discord-buttons');
exports.run = async(client, message, args) => { 

// -------- \\

message.channel.send("> ??? __Veriler Hesaplan�yor__, **L�tfen Bekleyin!**").then(async lol => {

// -------- \\

let liste = []

// -------- \\

await message.guild.roles.cache.array()
.filter(mem => db.get(`voteROL_${mem.id}_${message.guild.id}`))
.sort((a, b) => (db.get(`voteROL_${b.id}_${message.guild.id}`).say� || 0) - (db.get(`voteROL_${a.id}_${message.guild.id}`).say� || 0))
.map(async rol => {

liste.push(`${rol}: **${db.get(`voteROL_${rol.id}_${message.guild.id}`).say�}** Oy. `)

})

// -------- \\

let embed = new Discord.MessageEmbed()
.setTitle("Oy R�tbeleri")
.setDescription(liste)
.setColor("BLUE")
await lol.edit("R�tbeler", embed)
})

// -------- \\

};
exports.conf = {
aliases: ["�d�ller"]
};

exports.help = {
name: '�d�ller'
};