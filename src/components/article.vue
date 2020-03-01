<template>
<div class="ARTICLE">
  <div>{{ article.title }}</div>
  <div>
    <span>Posted on <b>{{ article.pub_time }}</b> </span>
    <span> {{ article.type_label }} </span>
    <span> 预计阅读时间{{ article.may_time }}分钟</span>
  </div>
  <div>
    {{ article.introduction }}
  </div>
  <button @click="routeToArticle(article.index, article.title)">READ MORE !</button>
  <hr>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Artical extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  private article!: any;

  private mounted() {
  }
  private routeToArticle(id: number, title: string) {
    console.log(title);
    let _id = id.toString();
    localStorage.setItem("title", title);

    this.$router.push({
      name: 'article',
      path: '/article',
      query: {
        id: _id
      }
    })
  }
}
</script>

<style lang='scss' scoped>
@media (min-width: 500px) {
  .ARTICLE {
    width: 100%;
    text-align: center;
    div:nth-of-type(1) {
      font-family: Georgia, sans;;
      font-size: 1.5rem;
      line-height: 2.5rem;
      font-weight: bold;
      letter-spacing: 2px;
      margin-bottom: 1.5rem;
    }
    div:nth-of-type(2) {
      span {
        color: #999;
        font-size: 12px;
      }
      span:nth-of-type(1) {
        letter-spacing: 2px;      
        margin-right: .6rem;
      }
      span:nth-of-type(2) {
        background-color: black;
        padding: 4px 10px;
        color: white;
        letter-spacing: 5px;
        margin: 0 .6rem;
      }
      span:nth-of-type(3) {
        margin-left: .6rem;
      }
    }
    div:nth-of-type(3) {
      position: relative;
      width: 36%;
      left: 32%;
      text-align: left;
      word-break: break-all;
      overflow:hidden; // 超出的文本隐藏
      text-overflow:ellipsis; 
      display: -webkit-box; // 将对象作为弹性伸缩盒子模型显示。
      -webkit-box-orient: vertical;  //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
      -webkit-line-clamp: 4; // 结合上面两个属性，表示显示的行数。
      margin: 2rem 0;
      line-height: 1.7rem;
      color: black;
      font-size: 14px;
    }
    BUTTON {
      padding: 10px 20px;
      background-color: black;
      color: white;
      border: none;
      border-radius: 4px;
      letter-spacing: 2px;
      font-size: 15px;
    }
    hr {
      width: 16%;
      margin: 3rem 0 4rem;
      opacity: .4;
      margin-left: 42%;
      margin-right: 42%;
    }
  }
}
@media (max-width: 500px) {
  .ARTICLE {
    width: 100%;
    text-align: center;
    div:nth-of-type(1) {
      font-family: Georgia, sans;;
      font-size: 1.5rem;
      line-height: 2.5rem;
      font-weight: bold;
      letter-spacing: 2px;
      margin-bottom: 1.5rem;
      word-break: break-all;
      overflow:hidden; // 超出的文本隐藏
      text-overflow:ellipsis; 
      display: -webkit-box; // 将对象作为弹性伸缩盒子模型显示。
      -webkit-box-orient: vertical;  //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
      -webkit-line-clamp: 2; // 结合上面两个属性，表示显示的行数。
      margin: 0 .4rem;
    }
    div:nth-of-type(2) {
      span {
        color: #999;
        font-size: 12px;
        display: block;
        text-align: left;
      }
      span:nth-of-type(1) {
        letter-spacing: 2px;      
        margin-right: .6rem;
        margin-left: 2rem;
        margin-top: 2rem;
      }
      span:nth-of-type(2) {
        padding: 4px 10px 4px 0;
        // color: white;
        letter-spacing: 5px;
        margin: 0 .6rem;
        margin-left: 2rem;
      }
      span:nth-of-type(3) {
        margin-left: 2rem;
      }
    }
    div:nth-of-type(3) {
      position: relative;
      width: 90%;
      left: 5%;
      text-align: left;
      word-break: break-all;
      overflow:hidden; // 超出的文本隐藏
      text-overflow:ellipsis; 
      display: -webkit-box; // 将对象作为弹性伸缩盒子模型显示。
      -webkit-box-orient: vertical;  //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
      -webkit-line-clamp: 4; // 结合上面两个属性，表示显示的行数。
      margin: 2rem 0;
      line-height: 1.7rem;
      color: black;
      font-size: 14px;
    }
    BUTTON {
      padding: 10px 20px;
      background-color: black;
      color: white;
      border: none;
      border-radius: 4px;
      letter-spacing: 2px;
      font-size: 15px;
    }
    hr {
      position: relative;
      left: 42%;
      width: 16%;
      margin: 3rem 0 4rem;
      opacity: .4;
    }
  }
}
</style>
