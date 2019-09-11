<template>
  <div class="mGridHeader">
    <a-grid-cell
      v-for="c in columns"
      :key="c.name"
      :name="c.name"
      :value="c.name"
      :align="'center'"
      :style="{ width: `${c.width}px` }"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import AGridCell from '~/components/atoms/AGridCell/index.vue';
import { Column } from '~/types/grid';

@Component({ components: { AGridCell } })
export default class MGridHeader extends Vue {
  @Prop() columns!: Column[];
}
</script>

<style lang="scss" scoped>
.mGridHeader {
  display: flex;
}
</style>
