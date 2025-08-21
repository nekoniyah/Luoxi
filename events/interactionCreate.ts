import eventBuilder from "../eventBuilder";
import path from "path";
import fs from "fs";
import { Avatar } from "../db";

export default eventBuilder<"interactionCreate">(async (interaction) => {
    // Handle the interaction

    let now = Date.now();
    let avatars = await Avatar.findAll({
        where: {
            userId: interaction.user.id,
        },
    });
    const interactionFolder = fs.readdirSync(
        path.join(__dirname, "..", "interactions")
    );

    if (interaction.isCommand()) {
        const { commandName } = interaction;

        const interactionFile = interactionFolder.find(
            (file) => file === `${commandName}.ts`
        );

        if (interactionFile) {
            const { default: f } = await import(
                `../interactions/${interactionFile}`
            );

            await interaction.deferReply({
                withResponse: false,
            });

            await f(interaction, now, avatars);
        }
    } else if (interaction.isButton() || interaction.isAnySelectMenu()) {
        const { default: f } = await import(
            `../interactions/${interaction.customId}.ts`
        );

        await interaction.deferReply({
            withResponse: false,
        });

        await f(interaction, avatars);
    }
});
