import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex';

interface RS {
  sidebarExpand: boolean;
}

export const state = (): RS => ({
  sidebarExpand: false
});

export const getters: GetterTree<RS, RS> = {
  sidebarExpand: (state: RS) => state.sidebarExpand
};

export const mutations: MutationTree<RS> = {
  setSidebarExpand(state: RS) {
    state.sidebarExpand = !state.sidebarExpand;
  }
};

export const actions: ActionTree<RS, RS> = {
  asyncSetSidebarExpand(ctx: ActionContext<RS, RS>) {
    ctx.commit('setSidebarExpand');
  }
};
