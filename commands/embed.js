module.exports = {
    name: 'embed',
    description: 'embed message',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('')
        .setImage('')
        .setAuthor('')
        .setTitle('')
        
        .addFields(
        { name: ' ', value: '' },
        )
        .setDescription(`
        `)
        
        

        message.channel.send(newEmbed);
    }

}