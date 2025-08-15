import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db/database.db",
});

await sequelize.sync();
await sequelize.authenticate();

export default sequelize;
