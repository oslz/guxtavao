exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    var da = message.guild.roles.find("name",`Aplicação - ${member.displayName}`)
    var o = setInterval(() =>{
        da.delete()
        clearInterval(o)
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
        client.channels.get('453243473013899274').send(`<@${member.id}>`)
        client.channels.get('453243473013899274').send({
            "embed": {
            "title": `👑 Aplicação LothusMC`,
            "description": "",
            "url": "",
            "color": 917248,  
            "timestamp": new Date(),
            "footer": {
                "icon_url": "",
                "text": ""
            },
            "thumbnail": {
                "url": `https://cdn.discordapp.com/attachments/452889018292502562/453245035945656320/logo-small.png`
            },
            "image": {
                "url": ""
            },
            "author": {
                "name": "",
                "url": "",
                "icon_url": ""
            },
            "fields": [{
                "name": `${member.displayName} temos a incrivel noticia que você foi aprovado!`,
                "value": `Você será setado como ajudante!`,
                },
                {
                    "name": "Bem-vindo a nossa equipe! Qualquer problema, pode me chamar.",
                    "value": `Atenciosamente, ${message.author.username}`,
                }
            ]
    }
    })
})
}
