<template>
  <a-button type='primary' @click="changeLang">Primary Button</a-button>
  <div class='i-mdi:ab-testing'></div>
  <div>{{ t('common.searchText') }}</div>
  <a-time-range-picker />
  <a-pagination v-model:current="current" :total="500" />
</template>
<script lang='ts' setup>
import { useLocale } from '@/locales/useLocale';

const { t } = useI18n();
const { changeLocale, getLocale } = useLocale();
const current = ref(6)
const changeLang = async () => {
  await changeLocale(getLocale.value === 'en' ? 'zh-CN' : 'en');
};
</script>
