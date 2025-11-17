import axios from "axios";
import { showMessage } from "../utils";

const instance = axios.create({});

instance.interceptors.response.use(function (resp) {
  if (resp.data.code !== 0) {
    showMessage({
      type: "error",
      content: resp.data.msg,
    });
  }
  console.log("响应拦截器");
  return resp;
});

export default instance;
