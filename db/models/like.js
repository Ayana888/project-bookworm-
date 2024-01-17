'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
   
    static associate({ User, Book}) {
      this.belongsTo(Book, {foreignKey: "book_id"});
      this.belongsTo(User, {foreignKey: "user_id"})
  }
}
  Like.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      }
    },
    book_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Books",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};