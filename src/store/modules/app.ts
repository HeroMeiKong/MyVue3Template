import type { ProjectConfig, TransitionSetting } from '#/config';
import type { AppState } from '#/store';

import { PROJ_CFG_KEY } from '@/enums/cacheEnum';
import { resetRouter } from '@/router';
import projectSetting from '@/settings/projectSetting';
import { store } from '@/store';
import { deepMerge } from '@/utils';
import { Persistent } from '@/utils/cache/persistent';

let timeId: TimeoutHandle;

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    pageLoading: false,
    projectConfig: Persistent.getLocal(PROJ_CFG_KEY),
  }),
  getters: {
    getPageLoading(state): boolean {
      return state.pageLoading;
    },
    getProjectConfig(state): ProjectConfig {
      return state.projectConfig || projectSetting;
    },
    getTransitionSetting(): TransitionSetting {
      return this.getProjectConfig.transitionSetting;
    },
  },
  actions: {
    setPageLoading(loading: boolean): void {
      this.pageLoading = loading;
    },
    setProjectConfig(config: DeepPartial<ProjectConfig>): void {
      this.projectConfig = deepMerge(this.projectConfig || projectSetting, config);
      Persistent.setLocal(PROJ_CFG_KEY, this.projectConfig);
    },
    async resetAllState() {
      resetRouter();
      Persistent.clearAll();
    },
    async setPageLoadingAction(loading: boolean): Promise<void> {
      if (loading) {
        clearTimeout(timeId);
        // Prevent flicker
        timeId = setTimeout(() => {
          this.setPageLoading(loading);
        }, 50);
      } else {
        this.setPageLoading(loading);
        clearTimeout(timeId);
      }
    },
  },
});

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
