import type { LowercaseThemesType } from '#/config';
import { THEME_KEY } from '@/enums/cacheEnum';
import { ThemesEnum } from '@/enums/settingsEnum';

import { createLocalStorage } from '@/utils/cache';
import { sameClass, setClass } from '@/utils/domUtils';

const ls = createLocalStorage();

export async function getLocalTheme() {
  return ls.get(THEME_KEY);
}

export async function setLocalTheme(theme: LowercaseThemesType) {
  return ls.set(THEME_KEY, theme);
}

export default async function updateTheme(mode: LowercaseThemesType | null = ThemesEnum.LIGHT) {
  // 更新 LocalStorage
  const localTheme: LowercaseThemesType | null = await getLocalTheme();
  if (localTheme !== mode) setLocalTheme(mode);

  // 更新 html css
  const html = document.documentElement;
  if (!html) return;
  if (sameClass(html, mode)) return;
  setClass(html, mode);
}
