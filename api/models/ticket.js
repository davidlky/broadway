'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ticket = sequelize.define('Ticket', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payment_method: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Ticket.belongsTo(models.Show, {
          foreignKey: {
            name: "showId",
            allowNull: false
          }
        });
      }
    }
  });
  return Ticket;
};