import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import type { ThemesType, ADVSettings } from '#/config';

import { ThemesEnum } from '@/enums/settingsEnum';
import { store } from '@/store';
import updateTheme, { getLocalCustomTheme, getLocalTheme, setLocalCustomTheme } from '@/logics/theme';
import { themeSetting } from '@/settings/themeSetting';

export const useSettingStore = defineStore({
  id: 'app-settings',
  state: (): ADVSettings => ({
    customTheme: themeSetting[ThemesEnum.CUSTOM],
    theme: themeSetting[ThemesEnum.LIGHT],
    themeName: ThemesEnum.LIGHT,
  }),
  getters: {
    getCustomTheme(state): ThemeConfig {
      return state.customTheme;
    },
    getTheme(state): ThemeConfig {
      return state.theme ?? themeSetting[ThemesEnum.LIGHT];
    },
    getThemeName(state): ThemesType {
      return state.themeName ?? ThemesEnum.LIGHT;
    }
  },
  actions: {
    setCustomTheme(customTheme: ThemeConfig) {
      this.customTheme = customTheme;
      setLocalCustomTheme(customTheme);
    },
    setTheme(theme: ThemesType) {
      this.theme = themeSetting[theme];
      this.themeName = theme;
      updateTheme(theme);
    },
    /**
     * Initialize theme and load the existing configuration from the local cache
     */
    async initSetting() {
      const customTheme = await getLocalCustomTheme();
      this.setCustomTheme(customTheme);

      const theme = await getLocalTheme();
      this.setTheme(theme ?? themeSetting[ThemesEnum.LIGHT]);
    },
  },
  persist: true,
});

export function useSettingStoreWithOut() {
  return useSettingStore(store);
}
