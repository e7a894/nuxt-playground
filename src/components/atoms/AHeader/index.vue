<template>
  <div class="aHeader">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class AHeader extends Vue {}
</script>

<style lang="scss" scoped>
.aHeader {
  align-items: center;
  display: flex;
  height: 60px;
}
</style>
