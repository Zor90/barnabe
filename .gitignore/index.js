var secret = require('./secret');
const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = (':');

client.on('ready', () => {
	client.user.setGame("Qu'est ce que je vous sers?");
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	
  if (msg.content === prefix + 'help') {
    msg.channel.sendMessage('Liste des commandes: \n -*help');
  }
  if (msg.content.startsWith  ('ping') || msg.content.startsWith  ('Ping') || msg.content.startsWith  ('PING') ) {
    msg.reply('Pong!');
  }
  if (msg.content.startsWith  ('bonjour') || msg.content.startsWith  ('Bonjour') || msg.content.startsWith  ('Pwet') || msg.content.startsWith  ('salut') || msg.content.startsWith  ('Salut') || msg.content.startsWith  ('hello') || msg.content.startsWith  ('Coucou') || msg.content.startsWith  ('coucou') || msg.content.startsWith  ('Nyu')) {
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
  if (msg.content.startsWith ("irashai")) {
    msg.reply('Oula keskidit lui Oo');
  }
  if (msg.content.startsWith ('Barnabe') || msg.content.startsWith ('Barnabé') || msg.content.startsWith ('barnabe') || msg.content.startsWith ('barnabé')) {
    random();
	if (randnum == 1) {
		msg.reply('Je suis là!');}
	if (randnum == 2) {
		msg.reply("Qu'est-ce que vous voulez?");}
	if (randnum == 3) {
		msg.reply("On m'appelle?");}
	if (randnum == 4) {
		msg.reply("Votre chope est encore vide?");}
  }
  if (msg.content.startsWith (prefix + 'joy:')) {
	msg.reply("HAHA, c'était marrant ça!");}		
  if (msg.content.startsWith (prefix + 'sweat_smile:')) {
	msg.reply("Hoho, l'engoisse...");}	
  if (msg.content.startsWith (prefix + 'heart_eyes:')) {
	msg.reply("Berk c'est dégueu!");}
});

function random(min, max){
	min = Math.ceil(0);
	max = Math.floor(5);
	randnum = Math.floor(Math.random() * (max - min +1) + min);
}

client.login('secret.token');
