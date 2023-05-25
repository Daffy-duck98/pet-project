const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Todo.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      status: {
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Todo',
    }
  );
  return Todo;
};
