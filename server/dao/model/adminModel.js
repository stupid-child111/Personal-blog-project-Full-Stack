const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnect");

//定义数据模型

module.exports = {
  Admin: sequelize.define("Admin", {
    loginId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loginPwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }),
};
