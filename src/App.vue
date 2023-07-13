<template>
  <AConfigProvider :locale="getAntdLocale" :theme="getTheme">
    <Examples />
  </AConfigProvider>
</template>
<script lang="ts" setup>
import useThemeSetting from '@/hooks/setting/useThemeSetting';
import { useLocale } from '@/locales/useLocale';

const { getAntdLocale } = useLocale();
const { getTheme } = useThemeSetting();
</script>
