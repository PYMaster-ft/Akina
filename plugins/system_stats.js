/* Copyright (C) 2020 TOXIC DEVIL
CODDED BY TOXIC DEVIL
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAkinaPublic - TOXIC DEVIL
*/

const Akina = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Akina.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "👸🏻 *Hi Im Akina* 👸🏻\n\n✓ *Version:* ```1.0 Public Stable```\n✓ *Branch:* ```master```\n✓ *Developer:* ```SYSTEM SOMBIES```\n✓ *Main Bot :* https://wa.link/snz5lj\n✓ *Github Profile :* https://github.com/Randix-kane\n✓ *Email :* systemzombiesx@gmail.com\n✓ *Stack :* https://cutt.ly/XmgUT8z\n\n```Thank You For Using AKina 🐺 💞```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n   *Poverd By Ⓐ︎Ⓚ︎Ⓘ︎Ⓝ︎Ⓐ︎*' })
     }
    }));

    Akina.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Akina.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "👸🏻 *Hi Im Akina* 👸🏻\n\n✓ *Version:* ```1.0 Public Stable```\n✓ *Branch:* ```master```\n✓ *Developer:* ```SYSTEM SOMBIES```\n✓ *Main Bot :* https://wa.link/snz5lj\n✓ *Github Profile :* https://github.com/Randix-kane\n✓ *Email :* systemzombiesx@gmail.com\n✓ *Stack :* https://cutt.ly/XmgUT8z\n\n```Thank You For Using AKina 🐺 💞```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n   *Poverd By Ⓐ︎Ⓚ︎Ⓘ︎Ⓝ︎Ⓐ︎*' })
     }
    }));

    Akina.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
} 
