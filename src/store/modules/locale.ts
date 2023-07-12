import { defineStore } from 'pinia';
import { store } from '@/store';

import { createLocalStorage } from '@/utils/cache';
import { localeSetting } from '@/settings/localeSetting';

import { LOCALE_KEY } from '@/enums/cacheEnum';
import type { LangType, LocaleSetting, LocaleState } from '#/config';

const ls = createLocalStorage();

const lsLocaleSetting = (ls.get(LOCALE_KEY) || localeSetting) as LocaleSetting;

export const useLocaleStore = defineStore({
  id: 'app-locale',
  state: (): LocaleState => ({
    localInfo: lsLocaleSetting,
  }),
  getters: {
    getLocale(state): LangType {
      return state.localInfo?.locale ?? 'zh-CN';
    },
  },
  actions: {
    /**
     * Set up multilingual information and cache
     * @param info multilingual info
     */
    setLocaleInfo(info: Partial<LocaleSetting>) {
      this.localInfo = { ...this.localInfo, ...info };
      ls.set(LOCALE_KEY, this.localInfo);
    },
    /**
     * Initialize multilingual information and load the existing configuration from the local cache
     */
    initLocale() {
      this.setLocaleInfo({
        ...localeSetting,
        ...this.localInfo,
      });
    },
  },
});

export function useLocaleStoreWithOut() {
  return useLocaleStore(store);
}
