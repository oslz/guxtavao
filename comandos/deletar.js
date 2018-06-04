exports.run = (client, message, args)  => {
    let reason = args.slice(0).join(' ');
      if (message.author.bot) return;
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.delete();
          
      if (reason.length < 1) return message.reply('**Quantas** mensagens eu devo apagar');
      message.channel.bulkDelete(`${args[0]}`)
        setTimeout(function() {
            message.channel.send(`** <@${message.author.id}> limpou o historico!**`).then((value) => {
                setTimeout(() => {
                    value.delete();
                }, 1000);
            });
        }, 400)
}
