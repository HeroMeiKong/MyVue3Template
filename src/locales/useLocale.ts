import { i18n, loadLocalePool, setHtmlPageLang } from './setupI18n';
import { useLocaleStoreWithOut } from '@/store/modules/locale';

import type { LangModule, LangType } from '#/config';

function setI18nLanguage(locale: LangType) {
  const localeStore = useLocaleStoreWithOut();

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    (i18n.global.locale as any).value = locale;
  }
  localeStore.setLocaleInfo({ locale });
  setHtmlPageLang(locale);
}

export function useLocale() {
  const localeStore = useLocaleStoreWithOut();
  const getLocale = computed(() => localeStore.getLocale);

  const getAntdLocale = computed((): any => {
    const message: any = i18n.global.getLocaleMessage(unref(getLocale));
    return message.antdLocale ?? {};
  });

  // Switching the language will change the locale of useI18n
  // And submit to configuration modification
  async function changeLocale(locale: LangType) {
    const globalI18n = i18n.global;
    const currentLocale = unref(globalI18n.locale);
    if (currentLocale === locale) {
      return locale;
    }

    if (loadLocalePool.includes(locale)) {
      setI18nLanguage(locale);
      return locale;
    }
    const langModule = ((await import(`./lang/${locale}.ts`)) as any).default as LangModule;
    if (!langModule) return;

    const { message } = langModule;

    globalI18n.setLocaleMessage(locale, message);
    loadLocalePool.push(locale);

    setI18nLanguage(locale);
    return locale;
  }

  return {
    changeLocale,
    getAntdLocale,
    getLocale
  };
}
