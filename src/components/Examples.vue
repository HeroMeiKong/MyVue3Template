<template>
  <a-button type='primary' @click="changeLang">Primary Button</a-button>
  <a-button>Button</a-button>
  <div class='i-mdi:ab-testing'></div>
  <div>{{ t('common.searchText') }}</div>
  <a-time-range-picker />
  <a-pagination v-model:current="current" :total="500" />
  <h2 @click="changeTheme">
    主题切换
    <span v-if="currentTheme === 'light'" class="i-mdi:white-balance-sunny"></span>
    <span v-else-if="currentTheme === 'dark'" class="i-mdi:weather-night"></span>
    <span v-else class="i-mdi:emoticon-tongue-outline"></span>
  </h2>
</template>
<script lang='ts' setup>
import { ThemesEnum } from '@/enums/settingsEnum';
import { useLocale } from '@/locales/useLocale';
import { useThemeStore } from '@/store/modules/settings';

const { t } = useI18n();
const { changeLocale, getLocale } = useLocale();
const current = ref(6)
const currentTheme = ref('light');

const oppositeTheme = computed(() => currentTheme.value === ThemesEnum.LIGHT ? ThemesEnum.DARK : ThemesEnum.LIGHT);

const changeLang = async () => {
  await changeLocale(getLocale.value === 'en' ? 'zh-CN' : 'en');
};
const changeTheme = async () => {
  const themeStore = useThemeStore();
  themeStore.setTheme(oppositeTheme.value);
  currentTheme.value = oppositeTheme.value;
};
</script>
