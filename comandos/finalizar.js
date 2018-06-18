exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    var da1 = message.guild.roles.find("name",`Aplicação - ${member.displayName}`)

    message.channel.setParent('458305739237228544')
    da1.delete();
    member.kick();
}