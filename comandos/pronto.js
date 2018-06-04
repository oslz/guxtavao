
exports.run = (client, message, args) => {
    var da = message.guild.roles.find("name",`Aplicação - ${message.author.username}`)
    message.channel.overwritePermissions(da, {
        SEND_MESSAGES: false,
    })

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

       message.author.send("Para você o que significa responsabilidade e maturidade?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', pessoa3 => {
       pessoal4 = pessoa3.content;

       /// SITUACOES
       message.author.send("Seu melhor amigo faz parte da equipe e está abusando de algum bug que não foi repassado para superiores, o que você faria?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca1 => {
       situacao1 = situaca1.content;

       message.author.send("Imagine que você está jogando seu minigame favorito e acaba recebendo um report, mas você está muito bem na partida, qual seria sua reação? ")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca2 => {
       situacao2 = situaca2.content;

       message.author.send("Seu amigo está no servidor e começa a floodar o chat no lobby do servidor, o que você faria?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca3 => {
       situacao3 = situaca3.content;

       message.author.send("Você é um Staff e tem total poder dentro do servidor, então aparece um player e começa a xingar você, qual seria sua atitude?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca4 => {
       situacao4 = situaca4.content;

       message.author.send("Um grupo de jogadores está discutindo com outro jogador, qual atitude você tomaria?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca5 => {
       situacao5 = situaca5.content;

       message.author.send("Suponha-se que você está a horas vendo um suspeito de hacker no servidor e, depois de muito tempo consegue provas suficientes para banir, porém chega outro membro da Staff e bane primeiro que você, o que você faria?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca6 => {
       situacao6 = situaca6.content;

       message.author.send("Você vê seu colega de trabalho abusando, porém ele é um dos seus melhores amigos, o que você faria?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca7 => {
       situacao7 = situaca7.content;

       message.author.send("Um player está ofendendo o servidor, qual seria sua reação?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca8 => {
       situacao8 = situaca8.content;

       message.author.send("Um superior pede provas de um banimento seu, porém você excluiu sem querer, o que você faria?")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', situaca9 => {
       situacao9 = situaca9.content;
       
       /// HACKS
       message.author.send("O hack NoClip existe? Se sim explique sua função.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hack => {
       hack1 = hack.content;

       message.author.send("O hack VClip existe? Se sim explique sua função.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac1 => {
       hack2 = hac1.content;

       message.author.send("O hack Step existe? Se sim explique sua função.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac2 => {
       hack3 = hac2.content;

       message.author.send("O hack Fightbot existe? Se sim explique sua função.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac3 => {
       hack4 = hac3.content;

       message.author.send("O hack SafeWalk existe? Se sim explique sua função.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac4 => {
       hack5 = hac4.content;

       message.author.send("O hack InvBot existe? Se sim explique sua função.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac5 => {
       hack6 = hac5.content;

       message.author.send("O hack AirJump existe? Se sim explique sua função.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac6 => {
       hack7 = hac6.content;

       message.author.send("O hack AntiWeb existe? Se sim explique sua função.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac7 => {
       hack8 = hac7.content;

       message.author.send("O hack BedBreaker existe? Se sim explique sua função.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac8 => {
       hack9 = hac8.content;

       message.author.send("O hack AutoRod existe? Se sim explique sua função.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac9 => {
       hack10 = hac9.content;

       message.author.send("O hack ClickTeleport existe? Se sim explique sua função.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac10 => {
       hack11 = hac10.content;

       message.author.send("O hack RodAimbot existe? Se sim explique sua função.")
       var collector2 =  message.author.dmChannel.createMessageCollector(v => v.author.id == message.author.id,{time: 1000 * 1000,max: 1})
       collector2.on('collect', hac11 => {
       hack12 = hac11.content;




       client.channels.get('452987618297380875').send({
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
            "name": "Para você o que significa responsabilidade e maturidade?",
            "value": `R: ${pessoal4}`,
        },
        {
            "name": "Seu melhor amigo faz parte da equipe e está abusando de algum bug que não foi repassado para superiores, o que você faria?",
            "value": `R: ${situacao1}`,
        },
        {
            "name": "Imagine que você está jogando seu minigame favorito e acaba recebendo um report, mas você está muito bem na partida, qual seria sua reação?",
            "value": `R: ${situacao2}`,
        },
        {
            "name": "Seu amigo está no servidor e começa a floodar o chat no lobby do servidor, o que você faria?",
            "value": `R: ${situacao3}`,
        },
        {
            "name": "Você é um Staff e tem total poder dentro do servidor, então aparece um player e começa a xingar você, qual seria sua atitude?",
            "value": `R: ${situacao4}`,
        },
        {
            "name": "Um grupo de jogadores está discutindo com outro jogador, qual atitude você tomaria?",
            "value": `R: ${situacao5}`,
        },
        {
            "name": "Suponha-se que você está a horas vendo um suspeito de hacker no servidor e, depois de muito tempo consegue provas suficientes para banir, porém chega outro membro da Staff e bane primeiro que você, o que você faria?",
            "value": `R: ${situacao6}`,
        },
        {
            "name": "Você vê seu colega de trabalho abusando, porém ele é um dos seus melhores amigos, o que você faria?",
            "value": `R: ${situacao7}`,
        },
        {
            "name": "Um player está ofendendo o servidor, qual seria sua reação?",
            "value": `R: ${situacao8}`,
        },
        {
            "name": "Um superior pede provas de um banimento seu, porém você excluiu sem querer, o que você faria?",
            "value": `R: ${situacao9}`,
        },
        {
            "name": "O hack Noclip existe? Se sim explique sua função.",
            "value": `R: ${hack1}`,
        },
        {
            "name": "O hack Vclip existe? Se sim explique sua função.",
            "value": `R: ${hack2}`,
        },
        {
            "name": "O hack Step existe? Se sim explique sua função.",
            "value": `R: ${hack3}`,
        },
        {
            "name": "O hack Fightbot existe? Se sim explique sua função.",
            "value": `R: ${hack4}`,
        },
        {
            "name": "O hack SafeWalk existe? Se sim explique sua função.",
            "value": `R: ${hack5}`,
        },
        {
            "name": "O hack InvBot existe? Se sim explique sua função.",
            "value": `R: ${hack6}`,
        },
        {
            "name": "O hack AirJump existe? Se sim explique sua função.",
            "value": `R: ${hack7}`,
        },
        {
            "name": "O hack AntiWeb existe? Se sim explique sua função.",
            "value": `R: ${hack8}`,
        },
        {
            "name": "O hack BedBreaker existe? Se sim explique sua função.",
            "value": `R: ${hack9}`,
        },
        {
            "name": "O hack AutoRod existe? Se sim explique sua função.",
            "value": `R: ${hack10}`,
        },
        {
            "name": "O hack ClickTeleport existe? Se sim explique sua função.",
            "value": `R: ${hack11}`,
        },
        {
            "name": "O hack RodAimbot existe? Se sim explique sua função.",
            "value": `R: ${hack12}`,


            }
        ]
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
