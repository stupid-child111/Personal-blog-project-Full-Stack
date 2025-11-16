<template>
  <ul class="contact-container">
    <li>
      <a>
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>github</span>
      </a>
      <div class="pop">
        <img
          src="https://ts2.tc.mm.bing.net/th/id/OIP-C.8M-_EKr_9Td3_88v213mDAAAAA?w=108&h=108&c=1&bgcl=6543bc&r=0&o=7&cb=ucfimg1&pid=ImgRC&rm=3&ucfimg=1"
          alt=""
        />
      </div>
    </li>
    <li>
      <a href="mailto:123@qq.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>3468619937@qq.com</span>
      </a>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>3468619937</span>
      </a>
      <div class="pop">
        <img
          src="https://ts2.tc.mm.bing.net/th/id/OIP-C.8M-_EKr_9Td3_88v213mDAAAAA?w=108&h=108&c=1&bgcl=6543bc&r=0&o=7&cb=ucfimg1&pid=ImgRC&rm=3&ucfimg=1"
          alt=""
        />
      </div>
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>xxx</span>
      </a>
      <div class="pop">
        <img
          src="https://ts2.tc.mm.bing.net/th/id/OIP-C.8M-_EKr_9Td3_88v213mDAAAAA?w=108&h=108&c=1&bgcl=6543bc&r=0&o=7&cb=ucfimg1&pid=ImgRC&rm=3&ucfimg=1"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script setup>
import Icon from "@/components/Icon/index.vue";
</script>

<style lang="less" scoped>
@import "@/styles/var.less";
.contact-container {
  list-style: none;
  margin: 0;
  padding: 20px;
  color: @gray;
  cursor: pointer;
  @itemHeight: 30px;
  li {
    position: relative;
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    cursor: pointer;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    font-size: 13px;
  }
  .icon {
    font-size: 26px;
    width: 27px;
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s ease-in-out;
    img {
      width: 150px;
      height: 150px;
    }
    &::before {
      position: absolute;
      content: "";
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
    }
  }
}
.iconfont.icon-container.iconweixin {
    font-size: 20px ;
    text-indent: -1.82px;
  }
</style>
