import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import type { LowercaseThemesType, Settings } from '#/config';

import { ThemesEnum } from '@/enums/settingsEnum';
import { store } from '@/store';
import updateTheme, { getLocalTheme } from '@/logics/theme';
import { themeSetting } from '@/settings/themeSetting';

export const useThemeStore = defineStore({
  id: 'app-settings',
  state: (): Settings => ({
    theme: themeSetting[ThemesEnum.LIGHT],
  }),
  getters: {
    getTheme(state): ThemeConfig {
      return state.theme ?? themeSetting[ThemesEnum.LIGHT];
    },
  },
  actions: {
    setTheme(theme: LowercaseThemesType) {
      this.theme = themeSetting[theme];
      updateTheme(theme);
    },
    /**
     * Initialize theme and load the existing configuration from the local cache
     */
    initTheme() {
      const theme = getLocalTheme();
      this.setTheme(theme ?? themeSetting[ThemesEnum.LIGHT]);
    },
  },
  persist: true,
});

export function useThemeStoreWithOut() {
  return useThemeStore(store);
}
