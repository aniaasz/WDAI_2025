const { Sequelize, DataTypes } = require('@sequelize/core');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'users.db'
});

const User = sequelize.define('User', {
    id : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email : { type: DataTypes.STRING, allowNull: false, unique: true, validate: {isEmail: true} },
    password: { type: DataTypes.STRING, allowNull: false},
});

module.exports = { sequelize, User};

