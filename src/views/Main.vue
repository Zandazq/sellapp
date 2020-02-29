<template>
    <div class="main">
        <div class="header" :style="{backgroundImage:'url('+this.data.avatar+')'}">
            <div class="center">
                <div class="leftImg">
                    <img :src="this.data.avatar">
                </div>
                <div class="right">
                    <p><Tag color="red">品牌</Tag>{{this.data.name}}</p>
                    <p class='font12'>{{this.data.description}} / {{this.data.deliveryTime}}分钟送达</p>
                    <div class="font10"><Tag color="red">减</Tag>
                    <span>{{ this.data.supports ? this.data.supports[0].description : '' }}</span>
                    </div>
                </div>
            </div>
            <div class="bottom font10">
                <label>公告</label>
                <span> {{this.data.infos?this.data.infos[0]:''}}</span>
            </div>
        </div>
        <div class="router-link-box">
            <router-link to='/goods/1'>商品</router-link>
            <router-link to='/evaluate/2'>评价</router-link>
            <router-link to='/merchant/3'>商家</router-link>
        </div>
        <router-view/>
        <div class="foot">
            <Row>
                <i-col span="4">
                  <img src="../assets/imgs/shopCar.png" alt="">
                </i-col>
                <i-col span="3">￥0</i-col>
                <i-col span="10" class="font12">另需配送费￥4元</i-col>
                <i-col span="7">
                    <button>￥20元起送</button>
                </i-col>
            </Row>
            <!-- 111 -->
        </div>
    </div>
</template>

<script>
import { getSeller } from "../api/apis.js";

export default {
  data() {
    return {
      data: {
        router: ""
      }
    };
  },
  methods: {
  },
  created() {
    getSeller().then(res => {
      this.data = res.data.data;
      //   console.log(this.data);
    });
  },
};
</script>

<style lang="less" scoped>
.main {
  // height: 100%;
  // 头部
  .header {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 144px;
    // filter: blur(15px);
    .center {
      display: flex;
      padding: 20px 10px 10px 20px;
      .leftImg {
        width: 30%;
        img {
          width: 80px;
          border-radius: 5px;
        }
      }
      .right {
        width: 70%;
      }
    }
    .bottom {
      background: rgba(0, 0, 0, 0.1);
      padding: 7px;
      label {
        background-color: #fff;
        color: #464c5b;
        padding: 3px;
        border-radius: 4px;
      }
    }
  }
}
.router-link-box {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  height: 40px;
  line-height: 40px;
  .router-link-active{
    color: red;
  }
}
// 尾部
.foot {
  position: fixed;
  bottom: 0;
  background: #464c5b;
  height: 50px;
  width: 100%;
  .ivu-row {
    color: #949495;
    line-height: 50px;
    .ivu-col-span-4 {
      padding-left: 5px;
        img {
          width: 100%;
          position: relative;
          bottom: 8px;
      }
    }
    .ivu-col-span-7 {
      button {
        width: 100%;
        border: none;
        outline: none;
      }
    }
  }
}
.font12 {
  font-size: 12px;
}
.font10 {
  font-size: 10px;
}
</style>