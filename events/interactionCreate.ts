import eventBuilder from "../eventBuilder";

export default eventBuilder<"interactionCreate">((interaction) => {
    // Handle the interaction
    if (interaction.isCommand()) {
        const { commandName } = interaction;
        // Handle the command interaction
    }
});
