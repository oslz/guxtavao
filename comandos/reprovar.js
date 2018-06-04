exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
        client.channels.get('453243473013899274').send(`<@${member.id}>`)
        client.channels.get('453243473013899274').send({
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
                "name": `${member.displayName} Infelizmente não foi dessa vez...`,
                "value": `Você foi reprovado, porém não desista!`,
                },
                {
                    "name": "Caso queira tentar novamente você poderá se aplicar em um prazo de esqueci",
                    "value": `Equipe do Lothus.`,
                }
            ]
    }
    })
}
