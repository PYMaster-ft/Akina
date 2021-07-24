const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*විධානයට පසුව වචනයක් ලියන්න"
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');

const Language = require('../language');
const Lang = Language.getString('ttp');
const ll = "To make awesome logos"
const ddd = "ඔබට විවිධාකාරයේ ලෝගෝ සෑදීමට"


if (Config.WORKTYPE == 'private') {
  

    Asena.addCommand({pattern: 'qpack', fromMe: true, desc: ll }, (async (message, match) => {    

        await message.sendMessage('\n 🌹 *New Logo Pack Akina* 🌹 \n\n🔥 *Command* : ```.qbattel```\n💫 *Des:* ```.qbattel Akani```.\n\n🔥 *Command* : ```.qdark```\n💫 *Des:* ```.dark Akani```.\n\n🔥 *Command* : ```.qhorror```\n💫 *Des:* ```.qhorror Akani```.\n\n🔥 *Command* : ```.qninja```\n💫 *Des:* ```.qninja Akani```.\n\n🔥 *Command* : ```.qlion```\n💫 *Des:* ```.qlion Akani```.\n\n🔥 *Command* : ```.qhack```\n💫 *Des:* ```.qhack Akani```.\n\n🔥 *Command* : ```qpub```\n💫 *Des:* ```.qpub Akani```..\n\n🔥 *Command* : ```.qcod```\n💫 *Des:* ```.qcod Akani```.\n\n🔥 *Command* : ```.qwet```\n💫 *Des:* ```.qwet Akani```.\n\n🔥 *Command* : ```.qmulti```\n💫 *Des:* ```.qmulti Akani```.\n\n🔥 *Command* : ```.qavtar2```\n💫 *Des:* ```.qavtar2 Akani```.\n\n🔥 *Command* : ```.qavtar```\n💫 *Des:* ```.qavtar Akani```.\n\n🔥 *Command* : ```.qbanner```\n💫 *Des:* ```.qbanner Akani```.\n\n🔥 *Command* : ```.qbanner```\n💫 *Des:* ```.qbanner Akani```.\n\n⚠️🛑 *ඉහත command වලට අදාල සියලු logos ඔබට දිනකට 25ක් පමණයි ගැනිය හැක්කේ.* ⚠️🛑\n\n🔥 *Command* : ```.qnight```\n💫 *Des:* ```.qnight Akani```.\n\n🔥 *Command* : ```.qsnow```\n💫 *Des:* ```.qsnow Akani```.\n\n🔥 *Command* : ```.qcs```\n💫 *Des:* ```.qcs Akani```.\n\n🔥 *Command* : ```.qsmoke```\n💫 *Des:* ```.qsmoke Akani```.\n\n🔥 *Command* : ```.qneon```\n💫 *Des:* ```.qneon Akani```.\n\n🔥 *Command* : ```.qglow```\n💫 *Des:* ```.qglow Akani```.\n\n🔥 *Command* : ```.qcrism```\n💫 *Des:* ```.qcrism Akani```\n\n🔥 *Command* : ```.qwolf```\n💫 *Des:* ```.qwolf Akani```\n\n🔥 *Command* : ```.qbrand```\n💫 *Des:* ```.qbrand Akani```.\n\n🔥 *Command* : ```.q3d```\n💫 *Des:* ```.q3d Akani```\n\n🔥 *Command* : ```.qsilk```\n💫 *Des:* ```.qsilk Akani```\n\n🔥 *Command* : ```.qdeath```\n💫 *Des:* ```.qdeath Akani```');

    }));
  
}
else if (Config.WORKTYPE == 'public') {
   

    Asena.addCommand({pattern: 'qpack', fromMe: false, desc: ll}, (async (message, match) => {    

        await message.sendMessage('\n 🌹 *New Logo Pack Akina* 🌹 \n\n🔥 *Command* : ```.qbattel```\n💫 *Des:* ```.qbattel Akani```.\n\n🔥 *Command* : ```.qdark```\n💫 *Des:* ```.dark Akani```.\n\n🔥 *Command* : ```.qhorror```\n💫 *Des:* ```.qhorror Akani```.\n\n🔥 *Command* : ```.qninja```\n💫 *Des:* ```.qninja Akani```.\n\n🔥 *Command* : ```.qlion```\n💫 *Des:* ```.qlion Akani```.\n\n🔥 *Command* : ```.qhack```\n💫 *Des:* ```.qhack Akani```.\n\n🔥 *Command* : ```qpub```\n💫 *Des:* ```.qpub Akani```..\n\n🔥 *Command* : ```.qcod```\n💫 *Des:* ```.qcod Akani```.\n\n🔥 *Command* : ```.qwet```\n💫 *Des:* ```.qwet Akani```.\n\n🔥 *Command* : ```.qmulti```\n💫 *Des:* ```.qmulti Akani```.\n\n🔥 *Command* : ```.qavtar2```\n💫 *Des:* ```.qavtar2 Akani```.\n\n🔥 *Command* : ```.qavtar```\n💫 *Des:* ```.qavtar Akani```.\n\n🔥 *Command* : ```.qbanner```\n💫 *Des:* ```.qbanner Akani```.\n\n🔥 *Command* : ```.qbanner```\n💫 *Des:* ```.qbanner Akani```.\n\n⚠️🛑 *ඉහත command වලට අදාල සියලු logos ඔබට දිනකට 25ක් පමණයි ගැනිය හැක්කේ.* ⚠️🛑\n\n🔥 *Command* : ```.qnight```\n💫 *Des:* ```.qnight Akani```.\n\n🔥 *Command* : ```.qsnow```\n💫 *Des:* ```.qsnow Akani```.\n\n🔥 *Command* : ```.qcs```\n💫 *Des:* ```.qcs Akani```.\n\n🔥 *Command* : ```.qsmoke```\n💫 *Des:* ```.qsmoke Akani```.\n\n🔥 *Command* : ```.qneon```\n💫 *Des:* ```.qneon Akani```.\n\n🔥 *Command* : ```.qglow```\n💫 *Des:* ```.qglow Akani```.\n\n🔥 *Command* : ```.qcrism```\n💫 *Des:* ```.qcrism Akani```\n\n🔥 *Command* : ```.qwolf```\n💫 *Des:* ```.qwolf Akani```\n\n🔥 *Command* : ```.qbrand```\n💫 *Des:* ```.qbrand Akani```.\n\n🔥 *Command* : ```.q3d```\n💫 *Des:* ```.q3d Akani```\n\n🔥 *Command* : ```.qsilk```\n💫 *Des:* ```.qsilk Akani```\n\n🔥 *Command* : ```.qdeath```\n💫 *Des:* ```.qdeath Akani```');

    }));

}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qnight ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qnight ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qsnow ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qsnow ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qcs ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qcs ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qsmoke ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qsmoke ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qneon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qneon ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qglow ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qglow ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qcrism ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qcrism ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qwolft ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qwolft ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qbrand ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qbrand ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/brand-logo?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'q3d ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'q3d ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qsilk ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qsilk ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qdeath ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qdeath ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*විධානයට පසුව වචනයක් ලියන්න"


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qbattel ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy2/battlefield4?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qbattel ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy2/battlefield4?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qdark ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/metaldark?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qdark ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/metaldark?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qhorror ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/horrorblood?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qhorror ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome/horrorblood?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qninja ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome2/ninjalogo?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qninja ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome2/ninjalogo?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qlion ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qlion ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qhack?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qhack?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qpub?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/pubgmaskot?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qpub?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/pubgmaskot?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qcod?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qcod?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qval?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qval?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qwet ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qwet ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qmulti ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/multicolor3d?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qmulti ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/multicolor3d?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qavtar2 ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qavatar2 ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qbanner ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/lolbanner?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qbanner ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/lolbanner?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qavatar ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qavatar ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}
if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'qfall ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy1/fallleaves?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'qfall ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy1/fallleaves?apikey=d89a9f2ca52cb0654bc0d7e7&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    
}