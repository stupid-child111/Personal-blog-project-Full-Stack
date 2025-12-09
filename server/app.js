var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const { ForbiddenError } = require("./utils/errors");
require("dotenv").config();
require("./dao/db");

var indexRouter = require("./routes/index");
var adminRouter = require("./routes/admin");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// 定义不需要token验证的路径
const publicPaths = [
  "/admin/login", // 管理员登录接口
  "/", // 首页
  "/favicon.ico", // 浏览器图标请求
];

// 验证token中间件
app.use((req, res, next) => {
  // 如果是公开路径，直接放行
  if (publicPaths.includes(req.path)) {
    return next();
  }

  // 获取token (通常从请求头或cookie中获取)
  const token = req.headers.authorization;

  // 如果没有token
  if (!token) {
    return res.status(401).json({ message: "未提供授权令牌" });
  }

  // 验证token
  jwt.verify(token, md5(process.env.JWT_SECRET), (err, decoded) => {
    if (err) {
      res.send(new ForbiddenError("未授权或令牌已过期").toResponseJSON());
    }
    // 将解码后的用户信息存入请求对象，供后续路由使用
    req.user = decoded;
    next();
  });
});

app.use("/", indexRouter);
app.use("/admin", adminRouter);
module.exports = app;
