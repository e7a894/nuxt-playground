<template>
  <div class="mSidebarBlock">
    <a-sidebar :expand="expand">
      <slot name="sidebar" />
    </a-sidebar>
    <div :class="[`mSidebarBlock__content${expand ? '--expand' : ''}`]">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import ASidebar from '~/components/atoms/ASidebar/index.vue';

@Component({ components: { ASidebar } })
export default class MSidebarBlock extends Vue {
  @Prop({ default: false }) expand!: boolean;
}
</script>

<style lang="scss" scoped>
.mSidebarBlock {
  height: 100%;
  transition: all 0.3s ease;

  &__content {
    @extend .mSidebarBlock;
    padding-left: 60px;

    &--expand {
      @extend .mSidebarBlock;
      padding-left: 240px;
    }
  }
}
</style>
