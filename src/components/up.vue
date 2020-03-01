<template>
<transition name="up">
  <div class="UP" v-if="showUp">
    <img :src="up">
  </div>
</transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Up extends Vue {
  @Prop({
    type: Boolean,
    required: true,
    default: true
  })
  private showUp!: boolean;

  private up: string = require('@/assets/common/up.png');
}
</script>

<style lang='scss' scoped>
.UP {
  position: fixed;
  right: 0;
  bottom: 0;
  margin-right: 1rem;
  margin-bottom: 2rem;
  opacity: .5;
  img {
    zoom: .03;
  }
}
.up-enter,
.up-leave-to {
  opacity: 0;
  transform: translateY(3rem);
}

.up-enter-active,
.up-leave-active{
  transition: all 0.5s ease;
}
</style>
