<template>
<transition name="title">
  <div class="TARBAR" v-if="showTarbar">
    <div class="TARBAR-table">
      <img :src="logoImg" class="table-logo" @click="routeToHome()">
      <div class="table-tarbar">
        <p>关于</p>
        <p>搜索</p>
        <p>作品</p>
        <p>留言</p>
        <p>首页</p>
      </div>
      <button>返回顶部</button>
    </div>
  </div>
</transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Tarbar extends Vue {
  @Prop({
    type: Boolean,
    required: true,
    default: true,
  })
  private showTarbar!: boolean;

  private logoImg: string = require('@/assets/common/logo_white.png');
  private listImg: string = require('@/assets/common/list.jpg');
  private showList: boolean = false;

  private list() {
    this.showList = !this.showList;
  }

  private routeToHome() {
    this.$router.push({
      path: '/'
    })
  }
}
</script>

<style lang='scss' scoped>
@media (min-width: 768px) {
  .TARBAR {
    position: fixed;
    z-index: 9;
    width: 100%;
    .TARBAR-table {
      position: absolute;
      width: 100%;
      height: 2.5rem;
      background-color: white;
      box-shadow: 0px 5px 30px 2px gray;
      text-align: left;
      img {
        // margin-left: 4rem;
        border-bottom: 5px solid black;
        zoom: .45;
        position: absolute;
        left: 0;
      }
      .table-tarbar {
        display: inline;
        p {
          float: right;
          font-weight: bolder;
          letter-spacing: 3spx;
          font-size: 18px;
          padding: 4px 2rem;
          margin-top: .28rem;
          color: gray;
        }
      }
      .table-small {
        display: none;
      }
    }
  }
}
@media (max-width: 768px) {
  .TARBAR {
    position: fixed;
    z-index: 9;
    width: 100%;
    .TARBAR-table {
      position: absolute;
      width: 100%;
      height: 2.5rem;
      background-color: white;
      box-shadow: 0px 5px 30px 2px gray;
      text-align: left;
      .table-logo {
        // margin-left: 4rem;
        border-bottom: 5px solid black;
        zoom: .45;
        position: absolute;
        left: 0;
      }
      .table-tarbar {
        display: none;
      }
      button {
        width: 30%;
        float: right;
        background: black;
        border: none;
        color: white;
        height: 100%;
        border-radius: 1rem 0 0 1rem;
      }
    }
  }
}
.title-enter,
.title-leave-to {
  opacity: 0;
  transform: translateY(-3rem);
}

.title-enter-active,
.title-leave-active{
  transition: all 0.5s ease;
}
</style>
