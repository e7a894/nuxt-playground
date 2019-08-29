<template>
  <div class="tIndex">
    <o-header class="tIndex__header" />
    <div class="tIndex__body">
      <o-sidebar-block :expand="expand">
        <template #sidebar>
          <div :style="{ backgroundColor: '#999', height: '100%' }">
            <button @click="click">
              expand
            </button>
          </div>
        </template>
        <template #content>
          TESTtesttesttesttesttesttesttesttesttesttesttesttest
        </template>
      </o-sidebar-block>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import OHeader from '~/components/organisms/OHeader/index.vue';
import OSidebarBlock from '~/components/organisms/OSidebarBlock/index.vue';

@Component({ components: { OHeader, OSidebarBlock } })
export default class extends Vue {
  expand: boolean = false;
  click() {
    this.expand = !this.expand;
  }
}
</script>

<style lang="scss" scoped>
.tIndex {
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__header {
    flex-shrink: 0;
    background-color: #666;
  }

  &__body {
    flex: 1;
    position: relative;
  }
}
</style>
