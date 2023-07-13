import type { LocaleSetting, LangType } from '#/config';
import { LangsEnum } from "@/enums/commonEnum";

export const LOCALE: { [key: string]: LangType } = {
  EN: LangsEnum['en'],
  ZH_CN: LangsEnum['zh-CN'],
};

export const localeSetting: LocaleSetting = {
  // available Locales
  availableLocales: [LOCALE.ZH_CN, LOCALE.EN],
  // Default locale
  fallback: LOCALE.ZH_CN,
  // Locale
  locale: LOCALE.ZH_CN,
};
