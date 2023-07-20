/**
 * Application configuration
 */
import { useLocaleStore } from '@/store/modules/locale';
import { useSettingStore } from '@/store/modules/setting';

import { getCommonStoragePrefix, getStorageShortName } from '@/utils/env';

// Initial project configuration
export function initAppConfigStore() {
  const localeStore = useLocaleStore();
  const settingStore = useSettingStore();
  // init store
  localeStore.initLocale();
  settingStore.initSetting();

  setTimeout(() => {
    clearObsoleteStorage();
  }, 16);
}

/**
 * As the version continues to iterate, there will be more and more cache keys stored in localStorage.
 * This method is used to delete useless keys
 */
export function clearObsoleteStorage() {
  const commonPrefix = getCommonStoragePrefix();
  const shortPrefix = getStorageShortName();

  [localStorage, sessionStorage].forEach((item: Storage) => {
    Object.keys(item).forEach((key) => {
      if (key && key.startsWith(commonPrefix) && !key.startsWith(shortPrefix)) {
        item.removeItem(key);
      }
    });
  });
}
