'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      monday: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      tuesday: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      wednesday: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      thursday: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      friday: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      saturday: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      sunday: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      showId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Shows',
          key: 'id',
          as: 'showId'
        }
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Schedules');
  }
};