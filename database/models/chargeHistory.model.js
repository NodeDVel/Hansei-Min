module.exports = (sequelize, DataTypes) => {
    const charge = sequelize.define({
        user_pk: {
            primaryKey: true,
            type: DataTypes.STRING,
        },
        money: DataTypes.INTEGER,
        moneyBefore: DataTypes.INTEGER,
        moneyAfter: DataTypes.INTEGER,
    });

    return charge;
}