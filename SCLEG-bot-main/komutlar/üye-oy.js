const Discord = require('discord.js');
const db = require('orio.db')
const prefix = require('../ayarlar.js')
const disbut = require('discord-buttons');
const moment = require("moment");
require("moment-duration-format");

exports.run = async (client, message, args) => {

// -------- \\

 let delay = db.get(`delay_${message.guild.id}_${message.author.id}`)
 let data  = db.get(`vote_${message.guild.id}`) 
 let use   = db.get(`voteUSER_${message.author.id}_${message.guild.id}`)
// -------- \\ 




// -------- \\


// -------- \\

      await db.add(`vote_${message.guild.id}`, 0)
      await db.add(`voteUSER_${message.author.id}_${message.guild.id}`, 0)
      await db.set(`delay_${message.guild.id}_${message.author.id}`, Date.now())

// -------- \\

 data = db.get(`vote_${message.guild.id}`) 


     
 message.channel.send("> <@!"+ message.author +"> Sizin Toplam Oyunuz `"+ use +"`.") 
   
 

// -------- \\

message.guild.roles.cache.array()
.filter(mem => db.get(`voteROL_${mem.id}_${message.guild.id}`))
.map(async rol => {
let data2 = db.get(`voteROL_${rol.id}_${message.guild.id}`)

if(data2.sayı <= use) {
// -------- \\
await message.member.roles.add(rol.id)
// -------- \\
} else  {
// -------- \\
await message.member.roles.remove(rol.id)
// -------- \\
}
   })

return;
}

// -------- \\

      
    


  
// -------- \\



  
     

// -------- \\

;
exports.conf = {
  aliases: ["oyum "]
};

exports.help = {
  name: "oyum"
};
