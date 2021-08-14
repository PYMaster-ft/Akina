const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'bot', fromMe: true, desc: 'bot link'}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://telegra.ph/file/95c37190db0abc28df106.jpg";
        r_text[1] = "https://telegra.ph/file/95c37190db0abc28df106.jpg";
        r_text[2] = "https://telegra.ph/file/95c37190db0abc28df106.jpg";

        var i = Math.floor(3*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by JADUBot'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'bot', fromMe: true, desc: 'bot link'}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://telegra.ph/file/95c37190db0abc28df106.jpg";
        r_text[1] = "https://telegra.ph/file/95c37190db0abc28df106.jpg";
        r_text[2] = "https://telegra.ph/file/95c37190db0abc28df106.jpg";
       
        var i = Math.floor(3*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Made by JADUBot'})

    }));
    Asena.addCommand({pattern: 'bot', fromMe: true, desc: 'bot link', dontAddCommandList: true}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://telegra.ph/file/95c37190db0abc28df106.jpg";
        r_text[1] = "https://telegra.ph/file/95c37190db0abc28df106.jpg";
        r_text[2] = "https://telegra.ph/file/95c37190db0abc28df106.jpg";
       
        var i = Math.floor(3*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '```Public-Bot```'})

    }));
}