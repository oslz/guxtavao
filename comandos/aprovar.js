exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    var da = message.guild.roles.find("name",`Aplicação - ${member.displayName}`)
    var o = setInterval(() =>{
        da.delete()
        clearInterval(o)
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
        message.channel.send(`<@${member.id}>`)
        message.channel.send({
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
                "name": `${member.displayName} temos a incrivel noticia de que você foi aprovado!`,
                "value": `Aguarde instruções do Staff Manager, o mesmo entrará em contato com você novamente.`,
                },
                {
                    "name": "Bem-vindo a nossa equipe!",
                    "value": `Atenciosamente, Equipe do Lothus`,
                }
            ]
    }
    })
})
}