<template>
  <img
    :src="src"
    :style="{
      height: `${size}px`,
      width: `${size}px`,
      borderRadius: `${radius}%`
    }"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop() src!: string;
  @Prop() radius!: number;
  @Prop() size!: number;
}
</script>
