module.exports = (sequelize, DataTypes) => {
    const userCharge = sequelize.define({
        pk: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        user_pk: {
            type: DataTypes.UUID,
        },
        money: DataTypes.INTEGER,
    }); //user money 충전

    return userCharge;
}