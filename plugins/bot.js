const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'bot', fromMe: true, desc: 'bot link'}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://telegra.ph/file/220e93708af31d836b096.jpg";
        r_text[1] = "https://telegra.ph/file/220e93708af31d836b096.jpg";
        r_text[2] = "https://telegra.ph/file/220e93708af31d836b096.jpg";

        var i = Math.floor(3*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '                  ♔ *₳KIᑎᗩ* ♔\n\n❍ *Hosted* ➤ _*AWS*_\n❍ *Version* ➤ V1.5 pro\n❍ *Branch*  ➤ master\n❍ *About*    ➤ https://tinyurl.com/mvdt8pnv\n❍ *Owner*   ➤https://wa.link/4kmqwf\n❍ *Mail*     ➤ systemzombiesx@gmail.com\n❍ *Bot make video* ➤ https://cutt.ly/7QH0x2\n\n⊱ ──────    ♔    ────── ⊰'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'bot', fromMe: true, desc: 'bot link'}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://telegra.ph/file/220e93708af31d836b096.jpg";
        r_text[1] = "https://telegra.ph/file/220e93708af31d836b096.jpg";
        r_text[2] = "https://telegra.ph/file/220e93708af31d836b096.jpg";
       
        var i = Math.floor(3*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '                  ♔ *₳KIᑎᗩ* ♔\n\n❍ *Hosted* ➤ _*AWS*_\n❍ *Version* ➤ V1.5 pro\n❍ *Branch*  ➤ master\n❍ *About*    ➤ https://tinyurl.com/mvdt8pnv\n❍ *Owner*   ➤https://wa.link/4kmqwf\n❍ *Mail*     ➤ systemzombiesx@gmail.com\n❍ *Bot make video* ➤ https://cutt.ly/7QH0x2\n\n⊱ ──────    ♔    ────── ⊰'})

    }));
}
