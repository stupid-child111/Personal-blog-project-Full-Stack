import { h, render } from "vue";

export default function (comp, props) {
  // 1. 创建一个临时 DOM 容器
  const container = document.createElement("div");

  // 2. 用 `h` 创建组件的虚拟节点（VNode），并传入 props
  const vnode = h(comp, props);

  // 3. 将虚拟节点渲染到临时容器中
  render(vnode, container);

  // 4. 返回组件渲染后的根 DOM 元素
  return container.firstElementChild;
}
