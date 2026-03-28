//格式化要响应的数据，统一响应格式

module.exports.formatResponse = function (code, message, data) {
  return {
    code: code,
    message: message,
    data: data,
  };
};