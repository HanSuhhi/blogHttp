<template>
<div class="FOOTER">
  <span>{{ message }}</span>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  private message: string = '©2020 Han Suhhi. All rights reserved.Do love Yokira.';
}
</script>

<style lang='scss' scoped>
.FOOTER {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-bottom: .2rem;
  margin-top: .2rem;
  text-align: left;
  margin-left: 1rem;
  font-size: 8px;
  span {
    font-size: 13px;
    letter-spacing: 3px;
    color: rgba(white, .8);
  }
}
</style>
