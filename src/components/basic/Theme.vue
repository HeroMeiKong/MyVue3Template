<template>
  <div class="v3t-theme cursor-pointer" @click="changeTheme">
    <span v-if="getThemeName === 'light'" class="i-mdi:white-balance-sunny"></span>
    <span v-else-if="getThemeName === 'dark'" class="i-mdi:weather-night"></span>
    <!-- 暂不支持 -->
    <span v-else class="i-mdi:emoticon-tongue-outline"></span>
  </div>
</template>
<script lang="ts" setup>
  import { ThemesEnum } from '@/enums/settingsEnum';
  import useThemeSetting from '@/hooks/setting/useThemeSetting';
  import { useSettingStore } from '@/store/modules/setting';

  const { getThemeName } = useThemeSetting();

  const oppositeTheme = computed(() =>
    getThemeName.value === ThemesEnum.LIGHT ? ThemesEnum.DARK : ThemesEnum.LIGHT
  );

  const changeTheme = async () => {
    const settingStore = useSettingStore();
    settingStore.setTheme(oppositeTheme.value);
  };
</script>
