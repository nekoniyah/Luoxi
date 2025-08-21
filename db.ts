import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db/database.db",
});

export class Avatar extends Model {}

Avatar.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:
                "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg",
        },
        bracket: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Avatar",
    }
);

export class ReactionRole extends Model {}

ReactionRole.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        guildId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        messageId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roleIds: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        emoji: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "ReactionRole",
    }
);

await sequelize.sync();
await sequelize.authenticate();

export default sequelize;
