const { PermissionsBitField, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
const Discord = require("discord.js")
const db = require("justdata")
const client = new Client({
  intents: INTENTS,
  allowedMentions: {
    parse: ["users"]
  },
  partials: PARTIALS,
  retryLimit: 32
});

global.client = client;
client.commands = (global.commands = []);

const { readdirSync } = require("fs");
const { TOKEN } = require("./config.json");
const { Modal } = require("discord-modals");
readdirSync('./commands').forEach(f => {
    if (!f.endsWith(".js")) return;

    const props = require(`./commands/${f}`);

    client.commands.push({
        name: props.name.toLowerCase(),
        description: props.description,
        options: props.options,
        dm_permission: props.dm_permission,
        type: 1
    });

    console.log(`[BOT] ${props.name} komutu yüklendi.`)

});
readdirSync('./events').forEach(e => {

    const eve = require(`./events/${e}`);
    const name = e.split(".")[0];

    client.on(name, (...args) => {
        eve(client, ...args)
    });
    console.log(`[EVENT] ${name} eventi yüklendi.`)
});


client.login(TOKEN)



client.on('interactionCreate', async (interaction) => {


  if(interaction.customId === "kurallar") {

const kurallar = new EmbedBuilder()
.setAuthor({name: "Raven Sunucu Kuralları", iconURL: "https://cdn.discordapp.com/icons/1096085223881576549/b4f931ffdbbdafc35b821d9f2b4127ac.png"})
.setDescription("1 • Küfür ve hakaret kullanımı yasaktır.\n2 • Yetkililerin işine karışamazsınız.\n3 • Reklam yapmak yasaktır.\n6 • Cezalar hiçbir şekilde yumuşatılmaz.\n7 • Boşa yetkili etiketlemek yasaktır.\n8 • https://discord.com/terms kurallarına uyun.\n\n**Not: 3. Kural hariç tüm kurallar 1 saat timeout, ardından yasaklamadır.**")
.setColor("Purple")

interaction.reply({embeds: [kurallar], ephemeral: true})

  }

  if(interaction.customId === "baslangıc") {

    var channel1 = "1103250806981001236"
    var channel2 = "1103250844947849226"
    var channel3 = "1103250881379569695"

    const baslangıc = new EmbedBuilder()
    .setDescription("**Seni <#1103250806981001236> <#1103250844947849226> <#1103250881379569695> kanallarına yönlendirdim**")
    .setColor("Green")

    interaction.reply({embeds: [baslangıc], ephemeral: true})

    const message1 = await interaction.guild.channels.cache.get(channel1).send({content: `<@${interaction.user.id}>`}) 
    const message2 = await interaction.guild.channels.cache.get(channel2).send({content: `<@${interaction.user.id}>`}) 
    const message3 = await interaction.guild.channels.cache.get(channel3).send({content: `<@${interaction.user.id}>`}) 
    
    await message1.delete()
    await message2.delete()
    await message3.delete()

  }

  if(interaction.customId === "raven") {

    const row1 = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setLabel("Raven'e Katıl")
            .setStyle(ButtonStyle.Link)
            .setURL("https://discord.gg/altyapilar")
    )

const raven = new EmbedBuilder()
.setAuthor({name: "Raven Kimdir?", iconURL: "https://cdn.discordapp.com/icons/1096085223881576549/b4f931ffdbbdafc35b821d9f2b4127ac.png"})
.setDescription("Çok gelişmiş altyapılar yaparak piyasaya renk katıyor")

    interaction.reply({embeds: [raven], components: [row1], ephemeral: true})

  }

})