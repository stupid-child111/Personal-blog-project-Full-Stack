// analyzeToken.js
const jwt = require('jsonwebtoken');
const md5 = require('md5');

/**
 * 验证并解析JWT令牌
 * @param {string} token - JWT令牌
 * @returns {object} - 解析结果，包含success和data/error字段
 */
function analyzeToken(token) {
  if (!token) {
    return { success: false, error: '未提供令牌' };
  }
  
  try {
    // 解析令牌
    const decoded = jwt.verify(token, md5(process.env.JWT_SECRET));
    return { success: true, data: decoded };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports.analyzeToken = analyzeToken;