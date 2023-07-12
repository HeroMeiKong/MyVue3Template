import type { LocaleSetting, LangType } from '#/config';
import { Langs } from "@/enums/common";

export const LOCALE: { [key: string]: LangType } = {
  EN: Langs['en'],
  ZH_CN: Langs['zh-CN'],
};

export const localeSetting: LocaleSetting = {
  // available Locales
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN],
  // Default locale
  fallback: LOCALE.ZH_CN,
  // Locale
  locale: LOCALE.ZH_CN,
};
