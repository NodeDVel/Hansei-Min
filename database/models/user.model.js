module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        pk: {
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        user_pk: {
            type: DataTypes.UUID,
        },
        class_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: DataTypes.STRING, //test용 name, 나중에 없앨 것
        grade: DataTypes.STRING,
        major: DataTypes.STRING,
        money: { 
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        admin: {
            defaultValue: false,
            type: DataTypes.BOOLEAN,
        },//부여했을 때 BOOLEAN이 true면 관리자 권한, false면 일반 유저로 구분
    });

    user.associate = (modles) => {
        user.hasMany(modles.spendHistory);
    };

}