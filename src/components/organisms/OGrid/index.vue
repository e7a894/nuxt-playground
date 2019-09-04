<template>
  <div>
    <m-grid-header :columns="columns" />
    <m-grid-row
      v-for="c in cellsArray"
      :key="c.key"
      :cells="c.cells"
      :columns="columns"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MGridRow from '~/components/molecules/MGridRow/index.vue';
import MGridHeader from '~/components/molecules/MGridHeader/index.vue';
import { Column } from '~/types/grid';

@Component({ components: { MGridRow, MGridHeader } })
export default class OGrid extends Vue {
  @Prop() rows!: ({ [key: string]: any })[];
  @Prop() columns!: Column[];

  private get cellsArray() {
    const f = (row: { [key: string]: any }) =>
      Object.keys(row).map(x => {
        return { name: x, value: row[x] };
      });
    return this.rows.map(row => {
      return { key: row.name, cells: f(row) };
    });
  }
}
</script>
