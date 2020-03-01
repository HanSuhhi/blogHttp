<template>
<div class="BOTTOM">
  <div class="BOTTOM-first">
    <img :src="logoImg">
    <p><span>{{ logoArtist }}</span> - {{ logoWords }}</p>
    <p><span>{{ subArtist }}</span> - {{ subWords }}</p>
    <p>
      <span>声明</span> - 
      <span>隐私政策</span>.
    </p>
  </div>
  <div class="BOTTOM-forth">
    <p>欢迎给我贴标签</p>
    <input type="text" placeholder="接受你给我的标签！">
  </div>
  <div>
    <div class="BOTTOM-second">
      <p>{{ secondTitle }}</p>
      <p>首页</p>
      <p>留言</p>
      <p>作品</p>
      <p>搜索</p>
      <p>故事</p>
      <p>关于</p>
    </div>
    <div class="BOTTOM-third">
      <p>{{ thirdTitle }}</p>
      <p>暂无更新</p>
      <p>暂无更新</p>
      <p>暂无更新</p>
      <p>暂无更新</p>
    </div>
  </div>

  <footerComponent class="BOTTOM-footer"></footerComponent>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import footerComponent from '@/components/footer.vue';

@Component({
  components: {
    footerComponent,
  }
})
export default class Bottom extends Vue {
  // first
  private logoImg: string = require('@/assets/common/logo_black.png');
  private logoArtist: string = 'Han Suhhi';
  private logoWords: string = '我们和朋友在一起，可以脱掉衣服，但上阵要穿甲。';
  private subArtist: string = 'Yokira';
  private subWords: string = '那个最好的！';
  // second
  private secondTitle: string = "DISCOVER";
  // third
  private thirdTitle: string = "RECENTLY"
  // fourth
}
</script>

<style lang='scss' scoped>
@media (min-width: 560px) {
  .BOTTOM {
    background-color: black;
    position: fixed ;
    bottom: 0rem;
    width: 100%;
    height: auto;
    z-index: -99;
    color: white;
    display: flex;
    flex-wrap: wrap-reverse;
    padding-bottom: 1rem;
    .BOTTOM-first {
      width: 35rem;
      text-align: left;
      margin-right: 1rem;
      img {
        margin-left: 4.5rem;
      }
      p {
        margin-left: 6rem;
      }
      p:nth-of-type(1), p:nth-of-type(2) {
        margin-top: -1.5rem;
        letter-spacing: .2rem;
        line-height: 1.8rem;
        font-family: 'Courier New', Courier, monospace;
        span {
          font-weight: bolder;
          font-size: 22px;
        }
      }
      p:nth-of-type(2) {
        margin-top: 1rem;
      }
      p:nth-of-type(3) {
        margin-top: 2rem;
        font-size: 1rem;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        letter-spacing: .4rem;
        span {
          // text-decoration: underline;
          border-bottom: solid 1px white;
        }
      }
    }
    .BOTTOM-forth {
      margin-left: 5rem;
      margin-right: 1rem;
      margin-top: 3.5rem;
      p {
        letter-spacing: 5px;
        margin-top: 1rem;
        font-size: 15px;
        float: left;
      }
      input {
        margin-top: .5rem;
        margin-left: 2rem;
        padding: 10px;
      }
      input::placeholder {
        padding: 10px;
        font-size: 12px;
      }
    }
    div:nth-of-type(3) {
      // display: table;
      margin-left: 10rem;
      padding-right: 1rem;
      .BOTTOM-second {
        display: table-cell;
        p {
          letter-spacing: 5px;
          margin-top: 2rem;
          font-size: 15px;
        }
        p:nth-of-type(1) {
          margin-top: 1rem;
          font-size: 14px;
          color: rgba($color: white, $alpha: .7)
        }
      }
      .BOTTOM-third {
        display: table-cell;
        padding-left: 10rem;
        padding-right: 1rem;
        p {
          letter-spacing: 5px;
          margin-top: 2rem;
          font-size: 15px;
        }
        p:nth-of-type(1) {
          margin-top: 1rem;
          font-size: 14px;
          color: rgba($color: white, $alpha: .7)
        }
      }
    }
  }
}
@media (max-width: 560px) {
  .BOTTOM {
    background-color: black;
    position: fixed ;
    bottom: 0rem;
    width: 100%;
    height: auto;
    z-index: -99;
    color: white;
    display: flex;
    flex-wrap: wrap-reverse;
    padding-bottom: 1rem;
    .BOTTOM-first {
      width: 25rem;
      text-align: left;
      margin-bottom: 2rem;
      img {
        display: none;
        // zoom: .6;
        // margin-left: 2.7rem;
        // margin-bottom: -2rem;
      }
      p {
        margin-left: 2.5rem;
      }
      p:nth-of-type(1), p:nth-of-type(2) {
        margin-top: 1.5rem;
        letter-spacing: .2rem;
        line-height: 1.8rem;
        font-family: 'Courier New', Courier, monospace;
        span {
          font-weight: bolder;
          font-size: 22px;
        }
      }
      p:nth-of-type(3) {
        margin-top: 2rem;
        font-size: 1rem;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        letter-spacing: .4rem;
        span {
          // text-decoration: underline;
          border-bottom: solid 1px white;
        }
      }
    }
    .BOTTOM-forth {
      margin-left: 2.4rem;
      margin-right: 1rem;
      margin-top: 1.5rem;
      text-align: left;
      p {
        // letter-spacing: 5px;
        // margin-top: 1rem;
        // font-size: 15px;
        // float: left;
        // margin-right: 2rem;
        display: none;
      }
      input {
      }
      input::placeholder {
        padding: 10px;
        font-size: 12px;
        margin-top: .5rem;
      }
    }
    div:nth-of-type(3) {
      // display: table;
      margin-left: 2rem;
      padding-right: 1rem;
      .BOTTOM-second {
        display: none;
      }
      .BOTTOM-third {
        display: none;
      }
    }
  }
}
</style>
