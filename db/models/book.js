'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    
    static associate({ Like, Comment, User }) {
      this.hasMany(Like, {foreignKey: "book_id"});
      this.hasMany(Comment, {foreignKey: "book_id"});
      this.belongsTo(User, {foreignKey: "user_id"})
      
    }
  }
  Book.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    author: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      }
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};