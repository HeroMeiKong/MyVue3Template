import { CacheTypeEnum } from '@/enums/cacheEnum';
import { LangsEnum } from '@/enums/commonEnum';
import { RouterTransitionEnum, ThemesEnum } from '@/enums/settingsEnum';

export type LangType = keyof typeof LangsEnum;

export type ThemesType = keyof typeof ThemesEnum;

export type LowercaseThemesType = Lowercase<ThemesType>;

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

export interface TransitionSetting {
  //  Whether to open the page switching animation
  enable: boolean;
  // Route basic switching animation
  basicTransition: RouterTransitionEnum;
  // Whether to open page switching loading
  openPageLoading: boolean;
  // Whether to open the top progress bar
  openNProgress: boolean;
}

export interface ProjectConfig {
  // Storage location of permission related information
  permissionCacheType: CacheTypeEnum;
  // Permission mode
  permissionMode: PermissionModeEnum;
  // Animation configuration
  transitionSetting: TransitionSetting;
  // Use error-handler-plugin
  useErrorHandle: boolean;
}

export interface Settings {
  theme: LowercaseThemesType;
}

export interface ThemeSetting {
  custom: any;
  dark: any;
  light: any;
}
