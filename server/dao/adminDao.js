//这一层负责和数据库打交道

const adminModel = require("./model/adminModel");

//登录

module.exports.loginDao = async function (loginInfo) {
  const admin = await adminModel.Admin.findOne({
    where: {
      loginId: loginInfo.loginId,
      loginPwd: loginInfo.loginPwd,
    },
  });
  return admin;
};

//更新管理员

module.exports.updateAdminDao = async function (newAccountInfo) {
    return await adminModel.Admin.update(newAccountInfo,{
        where:{
            loginId: newAccountInfo.loginId,
        }
    })
};
