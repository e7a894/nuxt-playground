<template>
  <t-index
    :sidebar-expand="$store.getters.sidebarExpand"
    @update:sidebarExpand="$store.dispatch('asyncSetSidebarExpand')"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TIndex from '~/components/templates/TIndex.vue';

@Component({ components: { TIndex } })
export default class extends Vue {}
</script>
