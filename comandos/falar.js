exports.run = (client, message, args) => {
    if(message.guild.members.get(message.author.id).roles.find("name" , "StaffManager")) { 
        let rsposta = args.slice(0).join(' ');
        message.channel.send(rsposta)
    }
    }