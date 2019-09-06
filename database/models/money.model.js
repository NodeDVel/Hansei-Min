module.exports = (sequelize, DataTypes) => {
    const money = sequelize.define('money', {
        pk: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        user_pk: {
            type: DataTypes.UUID,
        },
        money: DataTypes.INTEGER,
    }); //user money 충전

    return money;
}