/* Copyright (C) 2020 TOXIC DEVIL
CODDED BY TOXIC DEVIL
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaPublic - TOXIC DEVIL
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'gm', fromMe: true, desc: 'Good Morning massage'}, (async (message, match) => {

        if (Config.GMS == 'default') {
            
            var image = await axios.get (Config.GML, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "᭄ࣻ࿐සුභ᷋✰ࣰ᷑ උදෑසනක්᷑⃟࿐ࣧ යාලුࣨවනේ.⃤֊֘ඉතින්༺═─⃝─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃝─═༻ ඔයාලට 😒࿔⃝༒⃝❤️᭄කොහොමද මමනම් සනිපෙන් ඉන්නවා❤️⃟✦⃝̮̮̮̯̯̯😌"})

    }
    else {
            
            var image = await axios.get (Config.GML, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.GMS})
     }
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'gm', fromMe: false, desc: 'Good Morning massage'}, (async (message, match) => {

        if (Config.GMS == 'default') {
            
            var image = await axios.get (Config.GML, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "᭄ࣻ࿐සුභ᷋✰ࣰ᷑ උදෑසනක්᷑⃟࿐ࣧ යාලුࣨවනේ.⃤֊֘ඉතින්༺═─⃝─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃝─═༻ ඔයාලට 😒࿔⃝༒⃝❤️᭄කොහොමද මමනම් සනිපෙන් ඉන්නවා❤️⃟✦⃝̮̮̮̯̯̯😌"})

    }
    else {
            
            var image = await axios.get (Config.GML, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.GMS})
     }
    }));

}