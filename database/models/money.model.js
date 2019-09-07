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
    }); 
    //usermoney db(user db)

    moeny.associate = (models) => {
        money.hasMany(models.spendHistory);
      };

    return money;
}