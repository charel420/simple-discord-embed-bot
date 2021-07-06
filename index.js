const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const prefix = '$';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}



client.once('ready', () => {
    console.log('bot online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'embed'){
        client.commands.get('embed').execute(message, args, Discord);
    }

    client.on('message', message => {
        if (message.content === 'photo') {  
            message.channel.send(``);
        }
    })
})

client.login('INSERT TOKEN');