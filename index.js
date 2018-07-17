const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping' || msg.content === 'Ping' || msg.content === 'PING' ) {
    msg.reply('Pong!');
  }
  if (msg.content === 'bonjour' || msg.content === 'Bonjour' || msg.content === 'Pwet' || msg.content === 'salut' || msg.content === 'Salut' || msg.content === 'hello') {
    msg.reply('Je vous sers une chopine?');
  }
  if (msg.content === 'irashai') {
    msg.reply('Oula keskidit lui Oo');
  }
  if (msg.content === 'Barnabe' || msg.content === 'barnabe') {
    msg.reply('Je suis là!');
  }
});

client.login('NDY4NjgzMDEwODM3OTcwOTY0.Di82eQ.eayZ7Y6xBgYzCINqXICqkaoDFXM');
