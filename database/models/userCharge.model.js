module.exports = (sequelize, DataTypes) => {
    const userCharge = sequelize.define({
        user_pk: {
            primaryKey: true,
            type: DataTypes.STRING,
        },
        money: DataTypes.INTEGER,
    }); //user money 충전

    return charge;
}