module.exports = (sequelize, DataTypes) => {
    const spendHistory = sequelize.define('spendHistory',{
        pk: {
            primaryKey: true,
            type:  DataTypes.INTEGER,
        },
        user_pk: {
            type: DataTypes.UUID,
        },
        store_name: DataTypes.STRING,// INTEGER update or create store_pk 
        item_name: DataTypes.STRING, //INTEGER
        count: DataTypes.INTEGER,
        price: DataTypes.INTEGER,

    });
    //결제 내역 db

    spendHistory.associate = (models) => {
        //money db와 store db 연결
        spendHistory.belongsTo(models.user, {
            foreignKey: 'user_pk',
        });
        spendHistory.belongsTo(models.store, {
            foreignKey: 'user_pk',
        });
    }
    return spendHistory;
}