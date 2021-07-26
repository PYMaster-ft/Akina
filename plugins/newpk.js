const Asena = require('../events');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

Asena.addCommand({pattern: 'newpk', fromMe: false, desc: 'more logo commands'}, (async (message, match) => {
  
  await message.sendMessage('╔════════════════════╗\n║  ✥▬ *🍇The New Logo list🍇* ▬✥\n║\n║\n╠══🌹 *.candy* ```your text```\n║\n╠══🌹 *.kue* ```your text```\n║\n╠══🌹 *.md* ```your text```\n║\n╠══🌹 *.kopi* ```your text```\n║\n╠══🌹 *.harry* ```your text```\n║\n╠══🌹 *.under* ```your text```\n║\n╠══🌹 *.lol* ```your text```\n║\n╠══🌹 *.mas* ```your text```\n║\n╠══🌹 *.lolav* ```your text```\n║\n╠══🌹 *.pok* ```your text```\n║\n╠══🌹 *.avlol* ```your text```\n║\n╠══🌹 *.battel* ```your text```\n║\n╠══🌹 *.aov* ```your text```\n║\n╠══🌹 *.war* ```your text```\n║\n╠══🌹 *.lcov* ```your text```\n║\n╠══🌹 *.cs* ```your text```\n║\n╠══🌹 *.lcov2* ```your text```\n║\n╠══🌹 *.cross* ```your text```\n║\n╚════════════════════╝\n*මෙහි කුමක් හෝ වැඩ නොකරන්නේද*\n*එය අපගේ ගැටළුවක් නොව*\n *සේවාව ලබාදෙන වෙබ් පිටුවෙහි ගැටලුවකි.*\n*කරුණාකර ඉංග්‍රීසි අකුරු පමණක් යොදාගෙන logo සකසන්න*\n');
  
}));

Asena.addCommand({pattern: 'candy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/photooxy/candy?APIKEY=d49dac8a84bc7937&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: '🌹 *Made By Akina* 🦚'})

}));



Asena.addCommand({ pattern: 'kue ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/kueultah?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));




Asena.addCommand({ pattern: 'md ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/modernmetal?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));



 Asena.addCommand({ pattern: 'kopi ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/kopi2?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));





  Asena.addCommand({ pattern: 'harry ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/harrypotter?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));





Asena.addCommand({ pattern: 'under ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/underwebmatrix?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));



Asena.addCommand({ pattern: 'lol ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/lol?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));




Asena.addCommand({ pattern: 'mas ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/mastery7lol?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));


Asena.addCommand({ pattern: 'lolav ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/lolavatarglitch?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));



Asena.addCommand({ pattern: 'pok ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/pokemon?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));




Asena.addCommand({ pattern: 'avlol ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/avatarlol?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));



Asena.addCommand({ pattern: 'battel ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/battlefield?APIKEY=d49dac8a84bc7937text=Akina&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));





Asena.addCommand({ pattern: 'aov ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/aov?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    Asena.addCommand({ pattern: 'war ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/warface?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));





Asena.addCommand({ pattern: 'lcov ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
    Asena.addCommand({ pattern: 'cs ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/csgo?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));


    Asena.addCommand({ pattern: 'lcov2 ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/lolcover2?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));





Asena.addCommand({ pattern: 'cross ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/photooxy/crossfire?APIKEY=d49dac8a84bc7937&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🚀Made by Akina ☄️' })

    }));
