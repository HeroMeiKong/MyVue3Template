import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';

import { CacheTypeEnum } from '@/enums/cacheEnum';
import { LangsEnum } from '@/enums/commonEnum';
import {
  RouterTransitionEnum,
  SessionTimeoutProcessingEnum,
  ThemesEnum
} from '@/enums/settingsEnum';

export type LangType = `${LangsEnum}`;

export type ThemesType = `${ThemesEnum}`;

export interface ADVSettings {
  customTheme: ThemeConfig;
  theme: ThemeConfig;
  themeName: ThemesType;
}

export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Upload url
  uploadUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
}

export interface GlobEnvConfig {
  // Service interface url
  VITE_GLOBAL_API_URL: string;
  // Service interface url prefix
  VITE_GLOBAL_API_URL_PREFIX?: string;
  // Site short name
  VITE_GLOBAL_APP_SHORT_NAME: string;
  // Site title
  VITE_GLOBAL_APP_TITLE: string;
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
  // Whether to delete unclosed messages and notify when switching the interface
  closeMessageOnSwitch: boolean;
  // Storage location of permission related information
  permissionCacheType: CacheTypeEnum;
  // Permission mode
  permissionMode: PermissionModeEnum;
  // Whether to cancel the http request that has been sent but not responded when switching the interface.
  removeAllHttpPending: boolean;
  // Session timeout processing
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum;
  // Animation configuration
  transitionSetting: TransitionSetting;
  // Use error-handler-plugin
  useErrorHandle: boolean;
}

export interface ThemeSetting {
  custom: any;
  dark: any;
  light: any;
}
