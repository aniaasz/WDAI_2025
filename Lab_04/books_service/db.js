const { Sequelize, DataTypes } = require('@sequelize/core');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'books.db'
});

const Book = sequelize.define('Book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = { sequelize, Book };