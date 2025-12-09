//admin 模块的业务逻辑
const md5 = require("md5");
const { loginDao } = require("../dao/adminDao");
module.exports.loginService = async function (loginInfo) {
  loginInfo.loginPwd = md5(loginInfo.loginPwd);
  let data = await loginDao(loginInfo);
  if (data && data.dataValues) {
    //添加token
    return { data };
  } else {
    throw new Error("登录失败");
  }
};
