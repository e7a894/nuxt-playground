<template>
  <div class="aHeaderItem">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.aHeaderItem {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 60px;
}
</style>
