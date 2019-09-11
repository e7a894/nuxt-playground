<template>
  <t-list
    :sidebar-expand="$store.getters.sidebarExpand"
    @update:sidebarExpand="$store.dispatch('asyncSetSidebarExpand')"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import TList from '~/components/templates/TList.vue';

@Component({
  components: { TList }
})
export default class extends Vue {
  async fetch() {
    const x = new Promise(resolve => {
      setTimeout(() => {
        resolve('finished');
      }, 3000);
    });
    await x.then(() => null);
  }
}
</script>
