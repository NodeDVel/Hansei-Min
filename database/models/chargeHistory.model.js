module.exports = (sequelize, DataTypes) => {
    const chargeHistory = sequelize.define('chargeHistory' ,{
        pk: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        user_pk: {
            type: DataTypes.UUID,
        },
        money: {
            type: DataTypes.INTEGER,
        },
    });
    
    chargeHistory.associate = (models) => {
        chargeHistory.belongsTo(models.money, {
            foreignKey: 'user_pk',
        });
    }

    return chargeHistory;
    //환전 내역 db
}