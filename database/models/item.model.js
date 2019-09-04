module.exports = (sequelize, DataTypes) => {
    const item = sequelize.define('item', {
        pk: {
            primaryKey: true,
            type: DataTypes.STRING,
        },
        store_pk: {
            primaryKey: true,
            type: DataTypes.STRING,
        },
        name: DataTypes.STIRNG,
        price: DataTypes.INTEGER,
        canbuy: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },{
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    return item;
}