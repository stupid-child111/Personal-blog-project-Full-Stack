import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon/index.vue";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {string} content 消息内容
 * @param {string} type 消息类型
 * @param {HTMLElement} container 消息容器 消息显示到该容器正中间,如果不传,显示在页面正中
 * @param {number} time 消息显示时间 单位毫秒,如果不传,默认2000毫秒
 */
export default function (options = {}) {
  const content = options.content || "";
  const type = options.type || "info";
  const container = options.container || document.body;
  const time = options.time || 2000;
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, {
    type,
  });
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
  div.className = `${styles.message} ${styles[`message-${type}`]}`;

  if (options.container) {
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
    container.appendChild(div);
  } else {
    //容器position是否改变,如果改变,需要将消息显示到容器正中间

    container.appendChild(div);
  }
  //浏览器强行渲染
  div.clientHeight; //触发重绘,获取元素高度

  div.style.opacity = 1;
  div.style.transform = "translate(-50%, -50%)";

  //消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = "translate(-50%, -50%) translateY(-60px)";
    //移除元素
    // div.remove();这个为什么没有消失之后再移除
    div.addEventListener(
      "transitionend",
      () => {
        div.remove();
        //运行回调函数
        options.callback && options.callback();
      },
      { once: true }
    );
  }, time);
}
