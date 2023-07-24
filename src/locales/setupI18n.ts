import type { App } from 'vue';
import type { I18n, I18nOptions } from 'vue-i18n';
import type { LangType } from '#/config';

import { localeSetting } from '@/settings/localeSetting';
import { createI18n } from 'vue-i18n';
import { useLocaleStoreWithOut } from '@/store/modules/locale';

export let i18n: any;
export const loadLocalePool: LangType[] = [];

export function setHtmlPageLang(locale: LangType) {
  document.querySelector('html')?.setAttribute('lang', locale);
}

export function setLoadLocalePool(cb: (loadLocalePool: LangType[]) => void) {
  cb(loadLocalePool);
}

async function createI18nOptions(): Promise<I18nOptions> {
  const localeStore = useLocaleStoreWithOut();
  const locale = localeStore.getLocale;
  const defaultLocal = await import(`./lang/${locale}.ts`);
  const message = defaultLocal.default?.message ?? {};

  setHtmlPageLang(locale);

  return {
    legacy: false,
    locale,
    fallbackLocale: localeSetting.fallback,
    globalInjection: true,
    messages: {
      [locale]: message
    },
    availableLocales: localeSetting.availableLocales,
    sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
    silentTranslationWarn: true, // true - warning off
    missingWarn: true,
    silentFallbackWarn: true
  };
}

// setup i18n instance with glob
export async function setupI18n(app: App) {
  const options = await createI18nOptions();
  i18n = createI18n(options) as I18n;
  app.use(i18n);
}
