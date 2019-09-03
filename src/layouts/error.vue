<template>
  <div class="error">
    <h1>error</h1>
    <div>{{ `statusCode: ${error.statusCode}` }}</div>
    <div>{{ `path: ${error.path}` }}</div>
    <div>{{ `message: ${error.message}` }}</div>
    <n-link to="/">
      Go to Top
    </n-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { NuxtError } from '@nuxt/types/app';

@Component
export default class Error extends Vue {
  @Prop() error!: NuxtError;
}
</script>

<style lang="scss" scoped>
.error {
  padding-top: 1px;
}
</style>
