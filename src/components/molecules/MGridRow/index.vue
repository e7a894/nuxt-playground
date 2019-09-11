<template>
  <div class="mGridRow">
    <a-grid-cell
      v-for="item in items"
      :key="item.name"
      :name="item.name"
      :value="item.value"
      :align="item.align"
      :style="{ width: `${item.width}px` }"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import AGridCell from '~/components/atoms/AGridCell/index.vue';
import { Cell, Column } from '~/types/grid';

@Component({ components: { AGridCell } })
export default class MGridRow extends Vue {
  @Prop() columns!: Column[];
  @Prop() cells!: Cell[];

  get items() {
    return this.columns.map(x => {
      const c = this.cell(x.name);
      return {
        ...c,
        width: x.width
      };
    });
  }

  private cell(name: string) {
    if (!this.cells) return null;
    const c = this.cells.find(x => x.name === name);
    return c || null;
  }
}
</script>

<style lang="scss" scoped>
.mGridRow {
  display: flex;
}
</style>
