const { formatResponse } = require("./response");
//自定义处理

class ServiceError extends Error {
  /***
   * @param {string} message 错误消息
   * @param {number} code 错误码
   */
  constructor(message, code) {
    super(message);
    this.code = code;
  }

  //方法
  toResponseJSON() {
    return formatResponse(this.code, this.message, null);
  }
}

//文件上传错误

exports.UploadError = class extends ServiceError {
  constructor(message, code) {
    super(message, 413);
  }
};

//禁止访问错误
exports.ForbiddenError = class extends ServiceError {
  constructor(message, code) {
    super(message, 403);
  }
};
//验证错误
exports.ValidationError = class extends ServiceError {
  constructor(message, code) {
    super(message, 406);
  }
};
//无资源错误
exports.NotFoundError = class extends ServiceError {
  constructor(message, code) {
    super("Not Found", 404);
  }
};

//未知错误
exports.UnknownError = class extends ServiceError {
  constructor(message, code) {
    super(message, 500);
  }
};

module.exports.ServiceError = ServiceError;
