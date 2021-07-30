/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType} = require('@adiwajshing/baileys');
const {StringSession} = require('./whatsasena/');
const fs = require('fs');

async function whatsAsena () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [2, 2119, 6]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('New')}${chalk.blue.bold('Akina')}
${chalk.white.italic('Akina Sting session')}

${chalk.blue.italic('ℹ️  Whatsapp වෙත සම්බන්ධ වෙමින්... කරුණාකර රැඳී සිටින්න.')}`);
    });
    

    conn.on('open', async () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('Akina Sting session: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `AKINA_SESSION="${st}"`);
        }
        if (conn.user.jid.startsWith('90')) {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*මෙම කේතය කිසිවෙකු සමඟ බෙදා නොගන්න!*', MessageType.text)
            console.log(
                chalk.blue.bold('If you are installing locale, you can start the bot with node bot.js.')
            );
        }
        else {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*Do Not Share This Code With Anyone!*', MessageType.text)
            console.log(
                chalk.blue.bold('If you are installing locale, you can start the bot with node bot.js')
            );
        }
        
        process.exit(0);
    });

    await conn.connect();
}

whatsAsena()
