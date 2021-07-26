/* Codded by @afnanplk-farhandqz
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'newpk', fromMe: false, desc: 'more logo commands'}, (async (message, match) => {
  
  await message.sendMessage('╔════════════════════╗\n║  ✥▬ *🍇The New Logo list🍇* ▬✥\n║\n║\n╠══🌹 *.light* ```your text```\n║\n╠══🌹 *.pubg* ```your text```\n║\n╠══🌹 *.cs* ```your text```\n║\n╠══🌹 *.crms* ```your text```\n║\n╠══🌹 *.fire* ```your text```\n║\n╠══🌹 *.wolf* ```your text```\n║\n╠══🌹 *.game* ```your text```\n║\n╠══🌹 *.hack* ```your text```\n║\n╠══🌹 *.banner* ```your text```\n║\n╠══🌹 *.cross* ```your text```\n║\n╠══🌹 *.wfme* ```your text```\n║\n╠══🌹 *.ff* ```your text```\n║\n╠══🌹 *.matrix* ```your text```\n║\n╠══🌹 *.glbtn* ```your text```\n║\n╠══🌹 *.lol* ```your text```\n║\n╠══🌹 *.avdota* ```your text```\n║\n╠══🌹 *.glx* ```your text```\n║\n╠══🌹 *.web* ```your text```\n║\n╠══🌹 *.ninja* ```your text```\n║\n╚════════════════════╝\n*මෙහි කුමක් හෝ වැඩ නොකරන්නේද*\n*එය අපගේ ගැටළුවක් නොව*\n *සේවාව ලබාදෙන වෙබ් පිටුවෙහි ගැටලුවකි.*\n*කරුණාකර ඉංග්‍රීසි අකුරු පමණක් යොදාගෙන logo සකසන්න*\n');
  
}));

Asena.addCommand({pattern: 'light ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: '🌹 *Made By Akina* 🦚'})

}));
  
  Asena.addCommand({pattern: 'pubg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?text=${topText}&text2=${bottomText}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: '🌹 *Made By Akina* 🦚'})

    }));
  
    Asena.addCommand({pattern: 'cs ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/cslogo?text=${topText}&text2=${bottomText}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🌹 *Made By Akina* 🦚'})

    }));
    Asena.addCommand({pattern: 'crms ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/crismes?text=${match[1]}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🌹 *Made By Akina* 🦚'})

    }));
  
  Asena.addCommand({pattern: 'fire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tfire?text=${match[1]}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🌹 *Made By Akina* 🦚'})

    }));
  
   Asena.addCommand({pattern: 'wolf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?text=${topText}&text2=${bottomText}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🌹 *Made By Akina* 🦚'})

    }));
  
   
         Asena.addCommand({pattern: 'cross ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=Ekqqy3DmxtTHPAuA7inIHpxjFIC&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🌹 *Made By Akina* 🦚'})

}));
  
  Asena.addCommand({pattern: 'ff ?(.*)', fromMe: false, dontAddCommandList: false, desc: 'add your text to random freefire logo'}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=Ekqqy3DmxtTHPAuA7inIHpxjFIC&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🌹 *Made By Akina* 🦚'})

}));
  
  Asena.addCommand({pattern: 'matrix ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=AKIeG7ogNsfIKW6SfGQu3CqjVvh&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🌹 *Made By Akina* 🦚'})

    }));
  
  
   Asena.addCommand({pattern: 'glbtn ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?text=${match[1]}&APIKEY=AKIeG7ogNsfIKW6SfGQu3CqjVvh`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🌹 *Made By Akina* 🦚'})

    }));
  
   Asena.addCommand({pattern: 'hack ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=d89a9f2ca52cb0654bc0d7e7&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🌹 *Made By Akina* 🦚'})

    }));
   Asena.addCommand({pattern: 'game ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/logogaming?text=${match[1]}&APIKEY=f600e65bf9acbee2b548bf6b`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🌹 *Made By Akina* 🦚'})

    }));

    Asena.addCommand({pattern: 'lol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?text=${match[1]}&APIKEY=f600e65bf9acbee2b548bf6b`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🌹 *Made By Akina* 🦚'})

    }));

    Asena.addCommand({pattern: 'avdota ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/avatardota?text=${match[1]}&APIKEY=d89a9f2ca52cb0654bc0d7e7`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '🌹 *Made By Akina* 🦚'})

    }));

    Asena.addCommand({pattern: 'wfme ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy1/wolfmetal?text=${match[1]}&APIKEY=d89a9f2ca52cb0654bc0d7e7`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '🌹 *Made By Akina* 🦚'})
    
    }));

    Asena.addCommand({pattern: 'glx ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://api.lolhuman.xyz/api/ephoto1/galaxybat?text=${match[1]}&APIKEY=f600e65bf9acbee2b548bf6b`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '🌹 *Made By Akina* 🦚'})
    
   }));
    
        Asena.addCommand({pattern: 'wb ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
            if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
            var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy1/woodenboard?text=${match[1]}&APIKEY=f600e65bf9acbee2b548bf6b`, { responseType: 'arraybuffer' })
        
            await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '🌹 *Made By Akina* 🦚'})
        
    }));
        
        Asena.addCommand({pattern: 'banner ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
        
                if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
            
                var webimage = await axios.get(`https://api.lolhuman.xyz/api/photooxy3/bannerlol?text=${match[1]}&APIKEY=f600e65bf9acbee2b548bf6b`, { responseType: 'arraybuffer' })
            
                await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '🌹 *Made By Akina* 🦚'})
            
    }));
    Asena.addCommand({pattern: 'ninja ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://api.lolhuman.xyz/api/textprome2/ninjalogo?text=${topText}&text2=${bottomText}&APIKEY=f600e65bf9acbee2b548bf6b`, { responseType: 'arraybuffer' })
    
       await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '🌹 *Made By Akina* 🦚'})
    
  }));