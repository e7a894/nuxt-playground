<template>
  <div class="spinner">
    <div v-for="n in 5" :key="n" :class="[`spinner__rect${n}`]" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ALoading extends Vue {}
</script>

<style lang="scss" scoped>
.spinner {
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;

  @for $i from 1 through 5 {
    &__rect#{$i} {
      background-color: #333;
      height: 100%;
      width: 6px;
      display: inline-block;
      @if $i < 5 {
        margin-right: 3px;
      }
      animation: sk-stretchdelay 1.2s infinite ease-in-out;
      animation-delay: #{0.1 * ($i - 1) - 1.2}s;
    }
  }
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>
