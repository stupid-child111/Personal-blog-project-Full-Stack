var express = require("express");
var router = express.Router();
const { loginService } = require("../service/adminService");
const { formatResponse } = require("../utils/response");
const { analyzeToken } = require("../utils/analyzeToken");
/* GET users listing. */
router.post("/login", async function (req, res, next) {
  const result = await loginService(req.body);
  if (result.token) {
    res.setHeader("Authorization", result.token);
    console.log("22222",result.token)
  }
  res.send(formatResponse(200, "登录成功", result.data));
});

router.get("/whoami", async function(req, res,next){
  const token = req.get("Authorization");
  console.log("11111",token)
  const result = analyzeToken(token);
  if(result.success){
    res.send(formatResponse(200, "获取用户信息成功", result.data));
  } else {
    res.send(formatResponse(401, result.error, null));
  }
});

module.exports = router;
