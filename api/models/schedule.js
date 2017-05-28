'use strict';
module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define('Schedule', {
    monday: DataTypes.ARRAY(DataTypes.STRING),
    tuesday: DataTypes.ARRAY(DataTypes.STRING),
    wednesday: DataTypes.ARRAY(DataTypes.STRING),
    thursday: DataTypes.ARRAY(DataTypes.STRING),
    friday: DataTypes.ARRAY(DataTypes.STRING),
    saturday: DataTypes.ARRAY(DataTypes.STRING),
    sunday: DataTypes.ARRAY(DataTypes.STRING),
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Schedule.belongsTo(models.Show, {
          foreignKey: {
            name: "showId",
            allowNull: false
          }
        });
      }
    }
  });
  return Schedule;
};