<template>
  <div class="oSidebarBlock">
    <m-sidebar :expand="expand">
      <slot name="sidebar" />
    </m-sidebar>
    <div :class="[`oSidebarBlock__content${expand ? '--expand' : ''}`]">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MSidebar from '~/components/molecules/MSidebar/index.vue';

@Component({ components: { MSidebar } })
export default class extends Vue {
  @Prop({ default: false }) expand!: boolean;
}
</script>

<style lang="scss" scoped>
.oSidebarBlock {
  height: 100%;
  transition: all 0.3s ease;

  &__content {
    @extend .oSidebarBlock;
    padding-left: 78px;

    &--expand {
      @extend .oSidebarBlock;
      padding-left: 250px;
    }
  }
}
</style>
