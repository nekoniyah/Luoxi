import { ChatInputCommandInteraction } from "discord.js";

export default async (
    interaction: ChatInputCommandInteraction,
    now: number
) => {
    await interaction.editReply(`Pong! ${Date.now() - now}ms`);
};
