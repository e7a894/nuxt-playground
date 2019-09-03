<template>
  <t-list
    :sidebar-expand="$store.getters.sidebarExpand"
    @update:sidebarExpand="$store.dispatch('asyncSetSidebarExpand')"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TList from '~/components/templates/TList.vue';

@Component({
  components: { TList },
  async fetch() {
    const x = new Promise(resolve => {
      setTimeout(() => {
        resolve('finished');
      }, 3000);
    });
    await x.then(() => null);
  }
})
export default class extends Vue {}
</script>
