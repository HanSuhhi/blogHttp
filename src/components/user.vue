<template>
<div class="USER">
  <p><span>{{ nickname }}</span></p>
  <p><span>{{ subTitle }}</span></p>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class User extends Vue {
  private nickname: string = 'Han Suhhi';
  private subTitle: string = '从来如此，便对吗？';
}
</script>

<style lang='scss' scoped>
@media (min-width: 1024px) {
  .USER {
    height: 30rem;
    position: absolute;
    top: 0;
    width: 28%;
    margin-left: 34.3%;
    border-left: 10px solid white;
    border-right: 10px solid white;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 3em;
    p:nth-of-type(1) {
      text-align: center;
      margin: 1rem;
      span {
        background-color: rgba($color: black, $alpha: .8);
        color: white;
        font-size: 20px;
        line-height: 2;
        padding: .4rem 3rem;
      }
    }
    p:nth-of-type(2) {
      text-align: center;
      margin: 1rem;
      span {
        background-color: rgba($color: white, $alpha: .3);
        color: white;
        font-size: 13px;
        line-height: 2;
        padding: .4rem 2.8rem;
      }
    }
  }
}
@media (min-width: 800px) and (max-width: 1024px) {
  .USER {
    height: 30rem;
    position: absolute;
    top: 0;
    width: 30%;
    margin-left: 34%;
    p:nth-of-type(1) {
      text-align: center;
      margin: 1rem;
      span {
        background-color: rgba($color: black, $alpha: .8);
        color: white;
        font-size: 20px;
        line-height: 2;
        padding: .4rem 3rem;
      }
    }
    p:nth-of-type(2) {
      text-align: center;
      margin: 1rem;
      span {
        background-color: rgba($color: white, $alpha: .3);
        color: white;
        font-size: 13px;
        line-height: 2;
        padding: .4rem 2rem;
      }
    }
  }
}
@media (max-width: 800px) {
  .USER {
    display: none;
  }
}
</style>
