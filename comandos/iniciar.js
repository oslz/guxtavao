exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
  message.member.send({embed: {
        "title": `👑 Aplicação LothusMC`,
        "description": "",
        "url": "",
        "color": 5301186,  
        "timestamp": new Date(),
        "footer": {
            "icon_url": "",
            "text": ""
        },
        "thumbnail": {
            "url": ""
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
                "name": ` Foi criado um chat com o nome 'Aplicação - ${member.displayName}'. Assim que você estiver disposto a começar basta digitar !pronto`,
                "value": `Tenha em mente que o tempo de resposta é de no máximo 15 minutos para cada questão (Caso ultrapassar o BOT não irá continuar).`,
            },
            {
                "name": `Atenciosamente, ${message.author.username}`,
                "value": `Boa sorte!`,
            }
        ]
}
})




    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    message.guild.createRole({"name":`Aplicação - ${member.displayName}`}).then(a =>{
        message.guild.members.get(member.id).addRole(a)
        message.guild.createChannel(`Aplicação - ${member.displayName}`,'text').then(b =>{
            b.setParent('453709301261795328')
        var da = message.guild.roles.find("name","@everyone")

        message.channel.overwritePermissions(a, {
            SEND_MESSAGES: false,
        })

        b.overwritePermissions(da,{
        SEND_MESSAGES: false,
        
        })
        b.overwritePermissions(a,{
        SEND_MESSAGES:true
        })
      })
    })
}