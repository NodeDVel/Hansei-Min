module.exports = (sequelize, DataTypes) => {
    const item = sequelize.define('item', {
        pk: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        store_pk: {
            type: DataTypes.INTEGER,
        },
        name: DataTypes.STIRNG,
        price: DataTypes.INTEGER,
        canbuy: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        descripiton: {
            type: DataTypes.STRING,
        }
    },{
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });

    item.associate = (models) => {
        item.belongsTo(models.store, {
            foreignKey: 'store_pk',
        });
    }
    //부스 item db
    
    return item;
}