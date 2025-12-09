//admin 模块的业务逻辑
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const { loginDao } = require("../dao/adminDao");
module.exports.loginService = async function (loginInfo) {
  loginInfo.loginPwd = md5(loginInfo.loginPwd);
  let data = await loginDao(loginInfo);
  if (data && data.dataValues) {
    //添加token
    data = {
      id: data.dataValues.id,
      loginId: data.dataValues.loginId,
      name: data.dataValues.name,
    };
    let loginPeriod = null;
    if (loginInfo.remember) {
      //token有效期
      loginPeriod = parseInt(loginInfo.remember);
    } else {
      loginPeriod = 1;
    }
    const token = jwt.sign(data, md5(process.env.JWT_SECRET), {
      expiresIn: 60 * 60 * 24 * loginPeriod,
    });
    return { data, token };
  } else {
    throw new Error("登录失败");
  }
};
