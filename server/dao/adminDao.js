//这一层负责和数据库打交道

const adminModel = require("./model/adminModel");

//登录

module.exports.loginDao = async function(loginInfo) {
    const admin = await adminModel.Admin.findOne({
        where: {
            loginId: loginInfo.loginId,
            loginPwd: loginInfo.loginPwd,
        },
    });
    console.log("数据库查询结果", admin)
    return admin;
};