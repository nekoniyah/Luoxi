import { ChatInputCommandInteraction } from "discord.js";

export default async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply("Pong!");
};
