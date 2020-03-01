<template>
<div class="ARTICLE">
  <tarbar-component :showTarbar="true"></tarbar-component>
  <head-component></head-component>
  <p class="ARTICLE-title">{{ articleItem.title }}</p>
  <mavon-editor
    :subfield="false"
    :value="articleItem.message"
    defaultOpen="preview"
    class="ARTICLE-item"
    :toolbarsFlag="false"></mavon-editor>
  <div class="ARTICLE-bottom"></div>
  <bottom-component></bottom-component>
  <up-component :showUp="true"></up-component>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HeadComponent from '@/components/head.vue';
import TarbarComponent from '@/components/tarbar.vue';
import BottomComponent from '@/components/bottom.vue';
import UpComponent from '@/components/up.vue';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

@Component({
  components: {
    HeadComponent,
    TarbarComponent,
    BottomComponent,
    UpComponent
  }
})
export default class extends Vue {
  private articleItem: any = {};

  private mounted() {
    let title = localStorage.getItem("title");
    this.axios({
      method: 'get',
      url: '/articles/' + title
    }).then( message => {
      this.articleItem = message.data[0];
    })
  }
  
}
</script>

<style lang='scss' scoped>
.ARTICLE {
  z-index: 99;
  p:nth-of-type(1) {
    background: white;
    font-size: 30px;
    letter-spacing: 4px;
    margin: 0;
  }
  .ARTICLE-item {
    background: white;
    text-align: left;
  }
}

// 大屏幕
@media (min-width: 1597px) {
  .ARTICLE-bottom {
    margin-bottom: 28rem;
  }
  .ARTICLE-item {
    background: white;
    text-align: left;
    padding:2% 10% 5%;
  }
}
// /* / 其他电脑 / */
@media (min-width: 1024px) and (max-width: 1596px) {
  .ARTICLE-bottom {
    margin-bottom: 48rem;
  }
  .ARTICLE-item {
    background: white;
    text-align: left;
    padding:2% 20% 5%;
  }
}

/* / 平板电脑和小屏电脑之间的分辨率 / */
@media (min-width: 768px) and (max-width: 1024px){
  .ARTICLE-bottom {
    margin-bottom: 55rem;
  }

}

/* / 横向放置的手机和竖向放置的平板之间的分辨率 / */
@media  (min-width: 560px) and (max-width: 767px) {
  .ARTICLE-bottom {
    margin-bottom: 55rem;
  }
  .ARTICLE-item {
    background: white;
    text-align: left;
  }
}
/* / 横向放置的手机及分辨率更小的设备 / */
@media (max-width: 560px) {
  .ARTICLE-bottom {
    margin-bottom: 20rem;
  }
}
</style>
