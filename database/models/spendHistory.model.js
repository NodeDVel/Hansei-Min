module.exports = (sequelize, DataTypes) => {
    const spendHistory = sequelize.define({
        pk: {
            primaryKey: true,
            type:  DataTypes.INTEGER,
        },
        user_pk: {
            type: DataTypes.UUID,
        },
        store_name: DataTypes.STRING,
        item_name: DataTypes.STRING,
        count: DataTypes.INTEGER,
        price: DataTypes.INTEGER,

    });
    //결제 내역
    return spendHistory;
}