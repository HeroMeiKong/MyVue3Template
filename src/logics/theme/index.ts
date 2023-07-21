import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context';
import type { ThemesType } from '#/config';

import { CUSTOM_THEME_KEY, THEME_KEY } from '@/enums/cacheEnum';
import { ThemesEnum } from '@/enums/settingsEnum';

import { createLocalStorage } from '@/utils/cache';
import { sameClass, setClass } from '@/utils/domUtils';

const ls = createLocalStorage();

export async function getLocalTheme() {
  return ls.get(THEME_KEY);
}

export async function getLocalCustomTheme() {
  return ls.get(CUSTOM_THEME_KEY);
}

export async function setLocalTheme(theme: ThemesType) {
  return ls.set(THEME_KEY, theme);
}

export async function setLocalCustomTheme(customTheme: ThemeConfig) {
  return ls.set(CUSTOM_THEME_KEY, customTheme);
}

export default async function updateTheme(mode: ThemesType = ThemesEnum.LIGHT) {
  // 更新 LocalStorage
  const localTheme: ThemesType | null = await getLocalTheme();
  if (localTheme !== mode) setLocalTheme(mode);

  // 更新 html css
  const html = document.documentElement;
  if (!html) return;
  if (sameClass(html, mode)) return;
  setClass(html, mode);
}
