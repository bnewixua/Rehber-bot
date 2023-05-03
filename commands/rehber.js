const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, PermissionsBitField } = require("discord.js");
const wixua = require("croxydb");
module.exports = {
  name: "rehberlik",
  description: "Rehberlik servisini açarsınız",
  type: 1,
  options: [],
  run: async (client, interaction) => {

    const row1 = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setEmoji("📃")
            .setLabel("Kuralları Oku")
            .setStyle(1)
            .setCustomId("kurallar")
    )
    .addComponents(
        new ButtonBuilder()
            .setEmoji("⌚")
            .setLabel("Başlangıç Turu")
            .setStyle(3)
            .setCustomId("baslangıc")
    )
    .addComponents(
      new ButtonBuilder()
          .setEmoji("❓")
          .setLabel("Raven Kim")
          .setStyle(2)
          .setCustomId("raven")
  )

const yetki = new EmbedBuilder()
    .setColor("Red")
    .setTitle("Yetersiz Yetki!")
    .setDescription("> **Bu komutu kullanabilmek için** `Yönetici` **yetkisine sahip olmalısın!**")


    if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ embeds: [yetki], ephemeral: true })


    const embed = new EmbedBuilder()
    .setAuthor({name: "Raven Rehber Turu", iconURL: "https://cdn.discordapp.com/icons/1096085223881576549/b4f931ffdbbdafc35b821d9f2b4127ac.png"})
    .setDescription("👋 **Hey Merhaba Dostum! Sunucumuza Hoşgeldin. Seni Görmekten Çok Mutluluk Duydum, Şimdi Sana Sunucumuzu Tanıyabileceğin Bazı İşlevleri Göstereceğim. Aşağıdaki Butonları Kullan Ve Eğlenceye Katıl.**")
    .setColor("Green")

    interaction.reply({embeds: [embed], components: [row1]});

  }
}
