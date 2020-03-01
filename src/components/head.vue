<template>
<div class="HEAD">
  <img :src="bgImg" aria-disabled>
  <user-component class="HEAD-user"></user-component>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import UserComponent from '@/components/user.vue';

@Component({
  components: {
    UserComponent,
  }
})
export default class Head extends Vue {
  private bgImg: string = require('@/assets/common/back.png');
}
</script>

<style lang='scss' scoped>
.HEAD {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-top: 1px solid black;
  background-color: white;
  margin-bottom: -0.09rem;
  img {
    // position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    min-width: 100%;
    opacity: .95;
  }
}
</style>
