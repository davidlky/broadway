'use strict';
module.exports = function(sequelize, DataTypes) {
  var Show = sequelize.define('Show', {
    image: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    theater: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: DataTypes.STRING,
    start_date: DataTypes.DATE,
    close_date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Show.hasMany(models.Schedule, {
          as: 'Schedules'
        });
        Show.hasMany(models.Ticket, {
          as: 'Tickets'
        })
      }
    }
  });
  return Show;
};