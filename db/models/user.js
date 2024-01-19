"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    
    static associate({ Like, Book, Comment,Rating }) {
      this.hasMany(Like, {foreignKey: "user_id"});
      this.hasMany(Book, {foreignKey: "user_id"});
      this.hasMany(Comment, {foreignKey: "user_id"})
      this.hasMany(Rating, {foreignKey: "user_id"})


    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      mobile: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
