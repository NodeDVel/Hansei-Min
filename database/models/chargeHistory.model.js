module.exports = (sequelize, DataTypes) => {
    const chargeHistory = sequelize.define('chargeHistory' ,{
        pk: {
            praaimaryKey: true,
            type: DataTypes.INTEGER,
        },
        user_pk: {
            type: DataTypes.UUID,
        },
        user_name: DataTypes.STRING,
        user_classid: DataTypes.STRING, //class 변수명이 안되기 때문에 classid로 변경
        money: {
            type: DataTypes.INTEGER,
        },
        admin_name: DataTypes.STRING,
        admin_id: DataTypes.INTEGER,
        money: DataTypes.INTEGER,
    });
    
    chargeHistory.associate = (models) => {
        chargeHistory.belongsTo(models.user, {
            foreignKey: 'user_pk',
        });
    }

    return chargeHistory;
    //환전 내역 db
}