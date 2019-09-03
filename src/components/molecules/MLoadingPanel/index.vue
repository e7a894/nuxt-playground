<template>
  <div v-if="loading" class="mLoadingPanel">
    <a-loading />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ALoading from '~/components/atoms/ALoading/index.vue';

@Component({ components: { ALoading } })
export default class MLoadingPanel extends Vue {
  loading: boolean = false;
  start() {
    this.loading = true;
  }
  finish() {
    this.loading = false;
  }
}
</script>

<style lang="scss" scoped>
.mLoadingPanel {
  align-items: center;
  background-color: #fff;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0.3;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
}
</style>
