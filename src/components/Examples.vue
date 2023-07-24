<template>
  <a-button type="primary" @click="changeLang">Primary Button</a-button>
  <a-button @click="goTo('Login')">{{ t('word.login') }}</a-button>
  <a-button @click="goTo('Signup')">{{ t('word.signup') }}</a-button>
  <div class="i-mdi:ab-testing"></div>
  <div>{{ t('word.confirm') }}</div>
  <a-time-range-picker />
  <a-pagination v-model:current="current" :total="500" />
  <h2 @click="changeTheme">
    主题切换
    <span v-if="getThemeName === 'light'" class="i-mdi:white-balance-sunny"></span>
    <span v-else-if="getThemeName === 'dark'" class="i-mdi:weather-night"></span>
    <span v-else class="i-mdi:emoticon-tongue-outline"></span>
  </h2>
</template>
<script lang="ts" setup>
  import { ThemesEnum } from '@/enums/settingsEnum';
  import useThemeSetting from '@/hooks/setting/useThemeSetting';
  import { customUseI18n } from '@/hooks/web/useI18n';
  import { useLocale } from '@/locales/useLocale';
  import { useSettingStore } from '@/store/modules/setting';
  import { useUserStore } from '@/store/modules/user';

  const { t } = customUseI18n();
  const { changeLocale, getLocale } = useLocale();
  const router = useRouter();
  const current = ref(6);
  const { getThemeName } = useThemeSetting();
  const userStore = useUserStore();

  const oppositeTheme = computed(() =>
    getThemeName.value === ThemesEnum.LIGHT ? ThemesEnum.DARK : ThemesEnum.LIGHT
  );

  const changeLang = async () => {
    await changeLocale(getLocale.value === 'en' ? 'zh-CN' : 'en');
  };
  const changeTheme = async () => {
    const settingStore = useSettingStore();
    settingStore.setTheme(oppositeTheme.value);
  };
  const goTo = (name: string) => {
    userStore.getUserInfoAction();
    router.push({
      name
    });
  };
</script>
