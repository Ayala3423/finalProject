const { DataTypes } = require('sequelize');
const sequelize = require('../../dataBase/dataBase');
// const User = require('./User');

const Notification = sequelize.define('Notification', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: DataTypes.INTEGER,
  content: DataTypes.TEXT,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  read_status: { type: DataTypes.BOOLEAN, defaultValue: false }
});
Notification.associate = (models) => {
Notification.belongsTo(User, { foreignKey: 'user_id' });
};
module.exports = Notification;
