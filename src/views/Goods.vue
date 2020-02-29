<template>
    <div class="goods">
        <div class="left">
            <ul class="content">
              <div class="ulImg">
                <div @click="tolist(i)" v-for='(v,i) in this.list' :key='i' :class="{one:true,bgff:curSelected==i}">
                  <img src="../assets/imgs/icon1.png" v-show='v.type==1' style="width:12px">
                  <img src="../assets/imgs/icon2.png" v-show='v.type==2' style="width:12px">
                  <span>{{v.name}}</span>
                </div>
              </div>
            </ul>
        </div>
        <div class="right">
          <ul class="content">
            <div :id='i' v-for="(v,i) in this.list" :key="v.name" class="rightList">
              <p class="title">{{ v.name }}</p>
              <div class="list" v-for="(childimg,childimgi) in v.foods" :key='childimgi'>
                <div class="leftimg">
                  <img :src='childimg.image' />
                </div>
                <div class="rightinfo">
                  <p>{{childimg.name}}</p>
                  <p class="font12 hidden" v-show='childimg.description'>{{childimg.description}}</p>
                  <p class="font12">月售{{childimg.sellCount}}份 好评率{{childimg.rating}}%</p>
                  <p>￥{{childimg.price}} <del v-show='childimg.oldPrice'>￥{{childimg.oldPrice}}</del></p>
                </div>
              </div>
            </div>
          </ul>
        </div>
    </div>
</template>

<script>
import { getGoods } from "../api/apis.js";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      list: [],
      curSelected: 0
    };
  },
  methods: {
    tolist(val) {
      this.curSelected = val;
      this.rightBox.scrollToElement(document.getElementById(4), 500);
      console.log(document.getElementById(val))
    }
  },
  created() {
    getGoods().then(res => {
      this.list = res.data.data;
    });
  },
  mounted() {
     new BScroll(document.querySelector(".left"), {
      click: true
    });
    this.rightBox =new BScroll(document.querySelector(".right"));
  }
};
</script>

<style lang="less" scoped>
.bgff {
  background-color: #fff;
}
.goods {
  display: flex;
  background-color: #f3f6f6;
  margin-bottom: 50px;
  height: 300px;
  // flex:1;
  .left {
    width: 90px;
    // height: 100%;
    // flex: 1;
    height: 300px;
    overflow: scroll;
    // .content {
    // .ulImg {
    .one {
      padding-left: 10px;
      height: 55px;
      padding-top: 15px;
      border-bottom: 1px solid #dcdfdf;
      // }
      // }
    }
  }
  .right {
    flex: 1;
    // height: 300px;
    // overflow: scroll;
    .rightList {
      // height: 300px;
      .title {
        text-indent: 10px;
      }
      .list {
        background-color: #fff;
        display: flex;
        height: 100px;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        .leftimg {
          img {
            width: 70px;
            height: 70px;
            margin-right: 5px;
          }
        }
        .rightinfo {
          .hidden {
            overflow: hidden;
            height: 20px;
            text-overflow: ellipsis;
            // white-space: nowrap;
          }
        }
      }
    }
  }
}
.font12 {
  font-size: 12px;
}
.red {
  color: #ed1617;
}
</style>