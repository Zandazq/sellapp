<template>
    <div class="evaluate">
        <div class="header">
            <Row>
                <i-col span="9">
                    <p class="font16 colorf960">{{this.data.score}}</p>
                    <p class="font12 color333">综合评分</p>
                    <p class="font10">高于周边商家{{this.data.rankRate}}%</p>
                </i-col>
                <i-col span="15">
                    <p class="font12">服务态度<Rate allow-half :value.sync="this.data.serviceScore"></Rate></p>
                    <p class="font12">服务态度<Rate allow-half :value.sync="this.data.foodScore"></Rate></p>
                    <p class="font12">送达时间 {{this.data.deliveryTime}}分钟</p>
                </i-col>
            </Row>
        </div>
        <div class="button">
            <i-button type="info" size="small">全部57</i-button>
            <i-button type="success" size="small">满意47</i-button>
            <i-button type="warning" size="small">不满意10</i-button>
        </div>
            <div class="see">
                <p><Radio :checked.sync="single">只看有内容的评价</Radio></p>
            </div>
        
    </div>
</template>

<script>
import { getSeller } from "../api/apis.js";
export default {
  data() {
    return {
      data: {},
      single: false
    };
  },
  created() {
    getSeller().then(res => {
      this.data = res.data.data;
      console.log(this.data);
    });
  }
};
</script>

<style lang="less" scoped>
.evaluate {
  background-color: #f3f6f6;
  height: 100%;
  .header {
    background-color: #fff;
    padding: 15px 0;
    margin-bottom: 20px;
    .ivu-col-span-9 {
      text-align: center;
    }
    .ivu-col-span-15 {
      padding-left: 5px;
      border-left: 1px solid #ccc;
    }
  }
  .button {
    height: 50px;
    background-color: #fff;
    line-height: 50px;
    padding-left: 10px;
    .ivu-btn-small {
      padding-left: 10px;

      border-radius: 0;
      margin-right: 10px;
      height: 26px;
    }
  }
  .see {
    padding-left: 10px;
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #ccc;
    background-color: #fff;
  }
}

.font16 {
  font-size: 16px;
}
.font12 {
  font-size: 12px;
}
.font10 {
  font-size: 10px;
}
.colorf960 {
  color: #ff9600;
}
.color333 {
  color: #333;
}
</style>