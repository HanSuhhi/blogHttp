<template>
<div class="HOME">
  <tarbar-component :showTarbar="showTarbar"></tarbar-component>
  <head-component class="HOME-head"></head-component>
  <div class="HOME-body">
    <article-component
      v-for="item in Articles"
      :key="item.index"
      :article="item"
      @click="routeToArticle(item.index, item.title)"></article-component>
    <div class="HOME-bottom"></div>
  </div>
  <bottom-component></bottom-component>
  <up-component :showUp="showTarbar"></up-component>
</div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import HeadComponent from '@/components/head.vue';
import TarbarComponent from '@/components/tarbar.vue';
import BottomComponent from '@/components/bottom.vue';
import UpComponent from '@/components/up.vue';
import ArticleComponent from '@/components/article.vue';

@Component({
  components: {
    HeadComponent,
    TarbarComponent,
    BottomComponent,
    UpComponent,
    ArticleComponent,
  }
})
export default class Home extends Vue {
  private i:number = 0;
  private showTarbar: boolean = true;
  private Articles: [] = [];
  private article: any = {
    title: '读《UI设计之道》 | 一读《UI设计之道》 | 一读《UI设计之道》 | 一',
    pub_time: '2020-1-21 19:27',
    type: 'UI学习',
    time: '5',
    introduction: '读《UI设计之道》读《UI设计之道《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》《UI设计之道》读《UI设计之道》 》读《UI设计之道》读《UI设计之道》读《UI设计之道》读《UI设计之道》读《UI设计之道》读《UI设计之道》读《UI设计之道》读《UI设计之道》'
  }

  private mounted(): void {
    window.addEventListener('scroll', this.handleScroll, true);
    setTimeout(() => {
      this.showTarbar = false;
    }, 2000)
    
    this.getArticles();
  }
  private handleScroll(): void {
    // 页面滚动距顶部距离
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    var scroll = scrollTop - this.i;
    this.i = scrollTop;
    if( scroll < 0 ) {
      this.showTarbar = true;
    } else {
      this.showTarbar = false;
    }
    if (this.i <= 0) {
      setTimeout(() => {
        this.showTarbar = false;
      }, 1000)
    }
  }
  // 请求文章主体
  private getArticles() {
    this.axios({
      method: 'get',
      url: '/short-art'
    }).then( message => {
      this.Articles = message.data.reverse();
    })
  }

  private routeToArticle(index: number, title: string) {

  }
}
</script>

<style lang="scss" scoped>
// 大屏幕
@media (min-width: 1597px) {
  .HOME {
    z-index: 1;
    .HOME-body {
      position: relative;
      width: 100%;
      background-color: white;
      text-align: center;
      .HOME-bottom {
        margin-bottom: 28rem;
      }
    }
  }
}
// /* / 其他电脑 / */
@media (min-width: 1024px) and (max-width: 1596px) {
  .HOME {
    z-index: 1;
    .HOME-body {
      position: relative;
      width: 100%;
      background-color: white;
      text-align: center;
      .HOME-bottom {
        margin-bottom: 48rem;
      }
    }
  }
}

/* / 平板电脑和小屏电脑之间的分辨率 / */
@media (min-width: 768px) and (max-width: 1024px){
  .HOME {
    z-index: 1;
    .HOME-body {
      position: relative;
      width: 100%;
      background-color: white;
      text-align: center;
      .HOME-bottom {
        margin-bottom: 55rem;
      }
    }
  }
}

/* / 横向放置的手机和竖向放置的平板之间的分辨率 / */
@media  (min-width: 560px) and (max-width: 767px) {
  .HOME {
    z-index: 1;
    .HOME-body {
      position: relative;
      width: 100%;
      background-color: white;
      text-align: center;
      .HOME-bottom {
        margin-bottom: 55rem;
      }
    }
  }
}
/* / 横向放置的手机及分辨率更小的设备 / */
@media (max-width: 560px) {
  .HOME {
    z-index: 1;
    .HOME-body {
      position: relative;
      width: 100%;
      background-color: white;
      padding-top: 3rem;
      text-align: center;
      .HOME-bottom {
        margin-bottom: 20rem;
      }
    }
  }
}

</style>