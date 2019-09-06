module.exports = (sequelize, DataTypes) => {
    const store = sequelize.define('store', {
        pk: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        major: DataTypes.STRING,
        class: DataTypes.STRING,
        grade: DataTypes.STRING,
        
        name: DataTypes.STRING,
        content: DataTypes.STRING,
        description : {
            type: DataTypes.STRING,
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });

    return store;
}   