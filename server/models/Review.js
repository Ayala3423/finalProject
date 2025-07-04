const { DataTypes } = require('sequelize');
const sequelize = require('../../dataBase/dataBase');
// const User = require('./User');
// const Lesson = require('./Lesson');

const Review = sequelize.define('Review', {
  student_id: { type: DataTypes.INTEGER, primaryKey: true },
  teacher_id: { type: DataTypes.INTEGER, primaryKey: true },
  lesson_id: { type: DataTypes.INTEGER, primaryKey: true },
  rating: DataTypes.INTEGER,
  comment: DataTypes.TEXT,
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

Review.associate = (models) => {

Review.belongsTo(User, { foreignKey: 'student_id', as: 'student' });
Review.belongsTo(User, { foreignKey: 'teacher_id', as: 'teacher' });
Review.belongsTo(Lesson, { foreignKey: 'lesson_id' });
};
module.exports = Review;
