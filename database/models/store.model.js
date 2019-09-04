module.exports = (sequelize, DataTypes) => {
    const store = sequelize.define('store', {
        pk: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        class: DataTypes.STRING,
        name: DataTypes.STRING,
        content: DataTypes.STRING,
        grade: DataTypes.STRING,
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });

    return store;
}   