const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = (":");

client.on('ready', () => {
	client.user.setGame("Qu'est ce que je vous sers?");
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'help') {
    msg.channel.sendMessage('Liste des commandes: \n -*help');
  }
  if (msg.content === 'ping' || msg.content === 'Ping' || msg.content === 'PING' ) {
    msg.reply('Pong!');
  }
  if (msg.content === 'bonjour' || msg.content === 'Bonjour' || msg.content === 'Pwet' || msg.content === 'salut' || msg.content === 'Salut' || msg.content === 'hello' || msg.content === 'Coucou' || msg.content === 'coucou' || msg.content === 'Nyu') {
    random();
	if (randnum == 1) {
		msg.reply('Je vous sers une chopine?');}
	if (randnum == 2) {
		msg.reply('Voilà le plus beau!');}
	if (randnum == 3) {
		msg.reply('Faites place, laissez venir à mon bar!');}
	if (randnum == 4) {
		msg.reply('VIITE, un autre tonneau!');}
  }
  if (msg.content === 'irashai') {
    msg.reply('Oula keskidit lui Oo');
  }
  if (msg.content === 'Barnabe' || msg.content === 'barnabe') {
    msg.reply('Je suis là!');
  }
  if (msg.content === prefix + 'joy' + prefix) {
	msg.send ('test');}		
  if (msg.content === prefix + 'sweat_smile' + prefix) {
	msg.send ("Hoho, l'engoisse...");}	
  if (msg.content === prefix + 'heart_eyes' + prefix) {
	msg.send ("Berk c'est dégueu!");}
});

function random(min, max){
	min = Math.ceil(0);
	max = Math.floor(4);
	randnum = Math.floor(Math.random() * (max - min +1) + min);
}

client.login('NDY4NjgzMDEwODM3OTcwOTY0.Di82eQ.eayZ7Y6xBgYzCINqXICqkaoDFXM');
