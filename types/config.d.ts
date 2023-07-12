import type { Langs } from '@/enums/common';

export type LangType = keyof typeof Langs;

export interface GlobEnvConfig {
  // Site title
  VITE_GLOBAL_APP_TITLE: string;
  // Service interface url
  VITE_GLOBAL_API_URL: string;
  // Service interface url prefix
  VITE_GLOBAL_API_URL_PREFIX?: string;
  // Upload url
  VITE_GLOBAL_UPLOAD_URL?: string;
}

export interface LangModule {
  message: Recordable;
}

export interface LocaleSetting {
  // Current language
  locale: LangType;
  // default language
  fallback: LangType;
  // available Locales
  availableLocales: LangType[];
}

export interface LocaleState {
  localInfo: LocaleSetting;
}
