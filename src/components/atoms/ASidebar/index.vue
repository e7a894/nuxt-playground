<template>
  <div :class="[`mSidebar${expand ? '--expand' : ''}`]">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ASidebar extends Vue {
  @Prop({ default: false }) expand!: boolean;
}
</script>

<style lang="scss" scoped>
.mSidebar {
  height: 100%;
  position: absolute;
  transition: all 0.3s ease;
  width: 60px;

  &:hover {
    width: 240px;
  }

  &--expand {
    @extend .mSidebar;
    width: 240px;
  }
}
</style>
