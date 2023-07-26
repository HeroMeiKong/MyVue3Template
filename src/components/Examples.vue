<template>
  <a-button type="primary" @click="changeLang">Primary Button</a-button>
  <a-button @click="goTo('Login')">{{ t('word.login') }}</a-button>
  <a-button @click="goTo('Signup')">{{ t('word.signup') }}</a-button>
  <div class="i-mdi:ab-testing"></div>
  <a-dropdown trigger="click">
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
  <div>{{ t('word.confirm') }}</div>
  <a-time-range-picker />
  <a-pagination v-model:current="current" :total="500" />
  <Theme />
  <Langs />
</template>
<script lang="ts" setup>
  import { customUseI18n } from '@/hooks/web/useI18n';
  import { useLocale } from '@/locales/useLocale';

  import { useUserStore } from '@/store/modules/user';

  const { t } = customUseI18n();
  const { changeLocale, getLocale } = useLocale();
  const router = useRouter();
  const current = ref(6);
  const userStore = useUserStore();

  const changeLang = async () => {
    await changeLocale(getLocale.value === 'en' ? 'zh-CN' : 'en');
  };
  const goTo = (name: string) => {
    userStore.getUserInfoAction();
    router.push({
      name
    });
  };
</script>
