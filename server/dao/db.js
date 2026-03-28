const sequelize = require("./dbConnect"); //数据库连接实例

const adminModel = require("./model/adminModel"); //数据模型

const md5 = require("md5");

(async function () {
  await sequelize.sync({ alert: true });//同步数据库 字段改变会发生相应的改变

  //同步之后，有些表需要初始化数据
  //查询表中有没有内容，没有则初始化数据
  const adminCount = await adminModel.Admin.count();
  if(!adminCount){
    await adminModel.Admin.create({
      loginId: "admin",
      name: "超级管理员",
      loginPwd: md5("123456"),
    });
    console.log("超级管理员初始化成功");
  }
  console.log('数据库数据全部初始化完毕')
}());
