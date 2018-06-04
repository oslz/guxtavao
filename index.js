const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = "!"

client.login("NDUyOTgyNjA4NzY3MjIxNzcw.DfYQyg.KHoeRh0Ufih5ptg6PtFbrdiMis8");
client.on("ready", () => {
    client.user.setPresence({ game: { name: 'a linda voz do Guxtavo', type: 2, url: 'https://www.twitch.tv/sougay'} });
    console.log('Bot iniciado com sucesso!')
})
client.on("guildMemberAdd", function(member) {
    member.guild.members.get(member.id).addRole(member.guild.roles.find("name", "💥Membro").id);
}) // COMANDOS - GERAIS

client.on("message", message =>{
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
message.delete();
try {
let commandFile = require(`./comandos/${command}.js`);
commandFile.run(client, message, args);

} catch (err) {
console.error("[CONSOLE] " + err);
}
})
