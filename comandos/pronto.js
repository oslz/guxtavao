
exports.run = (client, message, args) => {
    message.channel.send(`As instruções foram enviadas em seu privado.`)
    message.author.send({embed: {
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
                "name": `${message.author.username},`,
                "value": `Iremos iniciar a segunda etapa.`,
            },
            {
                "name": "Caso queira continuar clique no ☑",
                "value": `Boa sorte.`,
            }
        ]
}
}).then(help => {
  
    setTimeout(() => {
        help.react('☑');
    }, 400);
    const collector = help.createReactionCollector((r, u) => (r.emoji.name === '☑') && u.id !== client.user.id);

    collector.on('collect', r => {
        switch(r.emoji.name) {

       case '☑':
       message.author.send('**Vamos começar**! Boa sorte.')
       message.author.send("Qual seu nickname?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', nome => {
       nomea = nome.content;
     
       /// pessoais
       message.author.send("O que você faria para desempenhar um bom trabalho na equipe do Lothus?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', pessoal => {
       pessoal1 = pessoal.content;

       message.author.send("O que destacaria você de outras pessoas que fizeram o formulário para Staff?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', pessoa1 => {
       pessoal2 = pessoa1.content;

       message.author.send("Para você o que faz alguém um bom Staffer?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', pessoa2 => {
       pessoal3 = pessoa2.content;

       message.author.send("Diferencie amizade e relação de trabalho.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', pessoa3 => {
       pessoal4 = pessoa3.content;

       /// SITUACOES
       message.author.send("Imagine um player que comece a falar mal do seu trabalho e excessivamente de você, mas não expõe ofensa, nesta ocasião qual seria sua atitude?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca1 => {
       situacao1 = situaca1.content;

       message.author.send("Imagine você vendo uma vítima que supostamente esteja usando programas ilegais, logo em seguida, você aplica o banimento e quando vai checar a sua gravação, percebe que, na verdade, a vítima era inocente e não utilizava nenhum programa ilegal. Nesta ocasião, o que você faria?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca2 => {
       situacao2 = situaca2.content;

       message.author.send("Imagine que você esteja gravando uma partida e que você esteja MUITO bem de itens, porém logo em seguida você recebe um report, nesta ocasião, o que você faria?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca3 => {
       situacao3 = situaca3.content;

       message.author.send("Você é paciente? Dê uma nota de 0 a 10 para a sua paciência e justifique-a")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca4 => {
       situacao4 = situaca4.content;

       message.author.send("Suponha-se que você está a horas vendo um suspeito de hacker no servidor e, depois de muito tempo consegue provas suficientes para banir, porém chega outro membro da Staff e bane primeiro que você, o que você faria?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca5 => {
       situacao5 = situaca5.content;

       message.author.send("Um superior pede provas de um banimento seu, porém você excluiu sem querer, o que você faria?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca6 => {
       situacao6 = situaca6.content;

       message.author.send("Um grupo de jogadores está discutindo com outro jogador, qual atitude você tomaria?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca7 => {
       situacao7 = situaca7.content;

       message.author.send("Você vê seu colega de trabalho abusando, porém ele é um dos seus melhores amigos, o que você faria?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca8 => {
       situacao8 = situaca8.content;

       message.author.send("Um player está ofendendo o servidor, qual seria sua reação?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca9 => {
       situacao9 = situaca9.content;
       
       /// HACKS
       message.author.send("O hack GhostAura existe? Se sim, descreva a sua funcionalidade.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hack => {
       hack1 = hack.content;

       message.author.send("O hack RodAura existe? Se sim, descreva a sua funcionalidade.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac1 => {
       hack2 = hac1.content;

       message.author.send("O hack Flight existe? Se sim, descreva a sua funcionalidade.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac2 => {
       hack3 = hac2.content;

       message.author.send("O hack BunnyHop existe? Se sim, descreva a sua funcionalidade.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac3 => {
       hack4 = hac3.content;

       message.author.send("O hack Dolphin existe? Se sim, descreva a sua funcionalidade.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac4 => {
       hack5 = hac4.content;

       message.author.send("O hack Step existe? Se sim, descreva a sua funcionalidade.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac5 => {
       hack6 = hac5.content;

       message.author.send("O hack AutoPvP existe? Se sim, descreva a sua funcionalidade.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac6 => {
       hack7 = hac6.content;

       message.author.send("O hack FastHeal existe? Se sim, descreva a sua funcionalidade.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac7 => {
       hack8 = hac7.content;

       message.author.send(`O hack AntiWeb existe? Se sim, descreva a sua funcionalidade.`)
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac8 => {
       hack9 = hac8.content;

       message.author.send("O hack AutoRod existe? Se sim explique sua função.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac9 => {
       hack10 = hac9.content;

       message.author.send("O hack InvBot existe? Se sim, descreva a sua funcionalidade.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac10 => {
       hack11 = hac10.content;

       message.author.send("O hack ClickPass existe? Se sim, descreva a sua funcionalidade.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac11 => {
       hack12 = hac11.content;

       message.author.send('O formulário foi **finalizado**! Aguarde proximas instruções em seu chat de aplicação. Qualquer problema ou dúvida envie lá. **Não peça respostas**')
       message.channel.send({
        "embed": {
        "title": `👑Aplicação - ${nomea}`,
        "description": "",
        "url": "",
        "color": 1,  
        "timestamp": new Date(),
        "footer": {
            "icon_url": "",
            "text": ""
        },
        "thumbnail": {
            "url": message.author.displayAvatarURL
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
            "name": "O que você faria para desempenhar um bom trabalho na equipe do Lothus?",
            "value": `R: ${pessoal1}`,
        },
        {
            "name": "O que destacaria você de outras pessoas que fizeram o formulário para Staff?",
            "value": `R: ${pessoal2}`,
        },
        {
            "name": "Para você o que faz alguém um bom Staffer?",
            "value": `R: ${pessoal3}`,
        },
        {
            "name": "Diferencie amizade e relação de trabalho.",
            "value": `R: ${pessoal4}`,
        },
        {
            "name": "Um player que comece a falar mal do seu trabalho e excessivamente de você, mas não expõe ofensa, nesta ocasião qual seria sua atitude?",
            "value": `R: ${situacao1}`,
        },
        {
            "name": "Imagine que você está vendo uma vítima e pune ela por programas ilegais, porém ao observar a gravação observa que ela estava 'legit', qual seria sua reação? ",
            "value": `R: ${situacao2}`,
        },
        {
            "name": "Imagine que você esteja gravando uma partida e que você esteja MUITO bem de itens, porém logo em seguida você recebe um report, nesta ocasião, o que você faria?",
            "value": `R: ${situacao3}`,
        },
        {
            "name": "Você é paciente? Dê uma nota de 0 a 10 para a sua paciência e justifique-a",
            "value": `R: ${situacao4}`,
        },
        {
            "name": "Suponha-se que você está a horas vendo um suspeito de hacker no servidor, porém chega outro membro da Staff e bane primeiro que você, o que você faria?",
            "value": `R: ${situacao5}`,
        },
        {
            "name": "Um superior pede provas de um banimento seu, porém você excluiu sem querer, o que você faria?",
            "value": `R: ${situacao6}`,
        },
        {
            "name": "Um grupo de jogadores está discutindo com outro jogador, qual atitude você tomaria",
            "value": `R: ${situacao7}`,
        },
        {
            "name": "Você vê seu colega de trabalho abusando, porém ele é um dos seus melhores amigos, o que você faria?",
            "value": `R: ${situacao8}`,
        },
        {
            "name": "Um player está ofendendo o servidor, qual seria sua reação?",
            "value": `R: ${situacao9}`,

            }
        ]
}
})
message.channel.send({
    "embed": {
    "title": ` `,
    "description": "",
    "url": "",
    "color": 1,  
    "timestamp": new Date(),
    "footer": {
        "icon_url": "",
        "text": ""
    },
    "thumbnail": {
        "url": message.author.displayAvatarURL
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
        "name": "O hack GhostAura existe? Se sim, descreva a sua funcionalidade.",
        "value": `R: ${hack1}`,
    },
    {
        "name": "O hack RodAura existe? Se sim, descreva a sua funcionalidade.",
        "value": `R: ${hack2}`,
    },
    {
        "name": "O hack Flight existe? Se sim, descreva a sua funcionalidade.",
        "value": `R: ${hack3}`,
    },
    {
        "name": "O hack BunnyHop existe? Se sim, descreva a sua funcionalidade.",
        "value": `R: ${hack4}`,
    },
    {
        "name": "O hack Dolphin existe? Se sim, descreva a sua funcionalidade. ",
        "value": `R: ${hack5}`,
    },
    {
        "name": "O hack Step existe? Se sim, descreva a sua funcionalidade.",
        "value": `R: ${hack6}`,
    },
    {
        "name": "O hack AutoPvP existe? Se sim, descreva a sua funcionalidade.",
        "value": `R: ${hack7}`,
    },
    {
        "name": "O hack FastHeal existe? Se sim, descreva a sua funcionalidade.",
        "value": `R: ${hack8}`,
    },
    {
        "name": "O hack AntiWeb existe? Se sim, descreva a sua funcionalidade.",
        "value": `R: ${hack9}`,
    },
    {
        "name": "O hack AutoRod existe? Se sim, descreva a sua funcionalidade.",
        "value": `R: ${hack10}`,
    },
    {
        "name": "O hack InvBot existe? Se sim, descreva a sua funcionalidade.",
        "value": `R: ${hack11}`,
    },
    {
        "name": "O hack ClickPass existe? Se sim, descreva a sua funcionalidade.",
        "value": `R: ${hack12}`,
    }]
}

})
       })
    })
    
})
       })
    })
})
       })
    })
})
       })
    })
})
       })
    })
})
        })
    })
})
       })
    })
})
       })
    })
})
       })
    })
}
    })
})
    }