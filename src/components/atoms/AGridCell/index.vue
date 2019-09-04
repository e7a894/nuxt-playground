<template>
  <div :class="[`cell--${align}`]">
    {{ value }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AGridCell extends Vue {
  @Prop() value!: string;
  @Prop({ default: 'left' }) align!: 'left' | 'center' | 'right';
}
</script>

<style lang="scss" scoped>
.cell {
  &--left {
    text-align: left;
  }
  &--center {
    text-align: center;
  }
  &--right {
    text-align: right;
  }
}
</style>
