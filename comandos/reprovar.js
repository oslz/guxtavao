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
            "color": 16711680,  
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
                "name": `${member.displayName} Você não foi aprovado, mas tudo bem, acontece...`,
                "value": `Boa sorte no futuro!`,
                },
                {
                    "name": "Caso queira tentar novamente você poderá se aplicar em um prazo de 15 dias.",
                    "value": `Equipe do Lothus.`,
                }
            ]
    }
    })
})
}