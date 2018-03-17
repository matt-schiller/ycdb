'use strict';
module.exports = (sequelize, DataTypes) => {
  var Correction = sequelize.define('Correction', {
    company_id: DataTypes.INTEGER,
    company_name: DataTypes.STRING,
    field: DataTypes.TEXT,
    correct_value: DataTypes.TEXT,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('NOW()'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('NOW()'),
    },
  }, {});
  Correction.associate = function(models) {
    // associations can be defined here
  };
  return Correction;
};