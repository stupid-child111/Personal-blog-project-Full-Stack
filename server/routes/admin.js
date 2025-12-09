var express = require("express");
var router = express.Router();
const { loginService } = require("../service/adminService");

/* GET users listing. */
router.post("/login", async function (req, res, next) {
  //   res.render('admin/login', {
  //     title: '登录',
  //     layout: 'admin/layout',
  //     user: req.user,
  //     success: req.query.success,
  //     error: req.query.error,
  //   });
  res.json({ message: "这是登录页面" });

  console.log("登录");
  console.log("请求体", req.body);
  await loginService(req.body);
});

module.exports = router;
