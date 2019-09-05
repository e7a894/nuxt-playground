<template>
  <div class="tIndex">
    <a-header class="tIndex__header">
      <a-header-item>
        <button @click="expand = !expand">
          expand
        </button>
      </a-header-item>
      <a-header-item class="tIndex__header__title">
        title
      </a-header-item>
      <a-header-item>
        <a-avatar
          :src="`https://imgur.com/XWBCjN9.png`"
          :size="36"
          :radius="50"
        />
      </a-header-item>
    </a-header>
    <div class="tIndex__body">
      <m-sidebar-block :expand="expand">
        <template #sidebar>
          <div :style="{ backgroundColor: '#999', height: '100%' }" />
        </template>
        <template #content>
          <n-link to="list">
            TESTtesttesttesttesttesttesttesttesttesttesttesttest
          </n-link>
          <div>
            <n-link to="error">
              Go to Error
            </n-link>
          </div>
        </template>
      </m-sidebar-block>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator';
import AAvatar from '~/components/atoms/AAvatar/index.vue';
import AHeaderItem from '~/components/atoms/AHeaderItem/index.vue';
import MSidebarBlock from '~/components/molecules/MSidebarBlock/index.vue';
import AHeader from '~/components/atoms/AHeader/index.vue';

@Component({ components: { AAvatar, AHeaderItem, AHeader, MSidebarBlock } })
export default class extends Vue {
  @PropSync('sidebarExpand') expand!: boolean;
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

    &__title {
      flex: 1;
    }
  }

  &__body {
    flex: 1;
    position: relative;
  }
}
</style>
