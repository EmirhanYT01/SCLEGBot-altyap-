const Discord = require('discord.js');
const db = require('orio.db')
const disbut = require('discord-buttons');
const moment = require("moment");
require("moment-duration-format");

exports.run = async (client, message, args) => {

// -------- \\

 let delay = db.get(`delay_${message.guild.id}_${message.author.id}`)
 let data  = db.get(`vote_${message.guild.id}`) 
 let use   = db.get(`voteUSER_${message.author.id}_${message.guild.id}`)
// -------- \\ 
if(delay+3600000 > Date.now()){
 let zaman = moment.duration(delay + 3600000 - Date.now()).format("[**] D [**G�n**] H [**Saat**] m [**Dakika**] s [**Saniye]")
 if(delay) return message.channel.send("? Bu sunucuya oy verebilmek i�in " + zaman + " beklemen gerekiyor.")
} else {
  db.delete(`delay_${message.guild.id}_${message.author.id}`)


// -------- \\

  const slots = ["Q","W","E","R","T","Y","U","O","P","A","S","D","F","G","H","H","J","K","L","Z","X","C","V","B","N","N","M",];
  var item  = slots[Math.floor(Math.random() * slots.length)];
  var item2 = slots[Math.floor(Math.random() * slots.length)];
  var item3 = slots[Math.floor(Math.random() * slots.length)];
  var item4 = slots[Math.floor(Math.random() * slots.length)];
  var item5 = slots[Math.floor(Math.random() * slots.length)];
  var item6 = slots[Math.floor(Math.random() * slots.length)];
  var item7 = slots[Math.floor(Math.random() * slots.length)];
// -------- \\
 var kelime = item + item2 + item3 + item4 + item5 + item6 + item7
 var kelime1 = item4 + item + item3 + item4 + item5 + item6 + item7
 var kelime2 = item + item4 + item3 + item5 + item + item6 + item7
 var kelime3 = item7 + item4 + item3 + item5 + item + item6 + item
 // -------- \\
 
const rast1 = new disbut.MessageButton()
.setStyle("grey")
.setLabel(kelime2)
.setID("rast1")
// -------- \\
const rast2 = new disbut.MessageButton()
.setStyle("grey")
.setLabel(kelime1)
.setID("rast2")
// -------- \\
const do�ru = new disbut.MessageButton()
.setStyle("green")
.setLabel(kelime)
.setID("do�ru")
// -------- \\
const rast3 = new disbut.MessageButton()
.setStyle("grey")
.setLabel(kelime3)
.setID("rast3")
// -------- \\
const time = new disbut.MessageButton()
.setStyle("red")
.setDisabled(true)
.setLabel("Time out.")
.setID("iptal")

// -------- \\

 const embed = new Discord.MessageEmbed() 
  .setColor("BLUE")
  .setImage("https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=blue-logo&text="+item+item2+item3+item4+item5+item6+item7)

// -------- \\

  const cevp = [new disbut.MessageActionRow().addComponents(rast1, rast2, do�ru, rast3), new disbut.MessageActionRow().addComponents(rast1, rast2, rast3, do�ru), new disbut.MessageActionRow().addComponents(rast1, do�ru, rast2, rast3), new disbut.MessageActionRow().addComponents(do�ru, rast1, rast3, rast2)]
  var weq  = cevp[Math.floor(Math.random() * cevp.length)];

// -------- \\
 
await message.channel.send("<@!" + message.author.id +'> Resimdeki kodu se�. ��lem **30** saniye sonra iptal edilecek.', {
  components: weq,
  embed: embed
}).then(m => { 

// -------- \\
let col = m.createButtonCollector((a) => a, { time: 30000});
        col.on('collect', async (collect) => {
if(collect.clicker.user.id !== message.author.id) return;
       
if(collect.id == "do�ru") { 
// -------- \\

      await db.add(`vote_${message.guild.id}`, 1)
      await db.add(`voteUSER_${message.author.id}_${message.guild.id}`, 1)
      await db.set(`delay_${message.guild.id}_${message.author.id}`, Date.now())

// -------- \\

 data = db.get(`vote_${message.guild.id}`) 

 await m.delete()
     
 message.channel.send("> ? **Ba�ar�l�!** <@!"+ message.author +"> Sunucuya oy verdiniz! Sunucunun toplam oyu: `"+ data +"` .") 
   
 col.stop()

// -------- \\

message.guild.roles.cache.array()
.filter(mem => db.get(`voteROL_${mem.id}_${message.guild.id}`))
.map(async rol => {
let data2 = db.get(`voteROL_${rol.id}_${message.guild.id}`)

if(data2.say�-1 <= use) {
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

      message.channel.send("> ? **Hata!** <@!"+ message.author +"> Yanl�� butonu se�tiniz.")  
      m.delete()
    
collect.reply.defer();

  })
// -------- \\

   col.on('end', async (collect) => {
   if(!collect.size) {
   m.edit("S�re bitti.", time)
}
  })
     })

// -------- \\
}
};
exports.conf = {
  aliases: ["oy-ver"]
};

exports.help = {
  name: "oyver"
};
