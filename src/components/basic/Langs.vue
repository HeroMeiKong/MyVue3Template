<template>
  <a-dropdown trigger="click">
    <span class="v3t-langs-current">{{ currentLang }}</span>
    <template #overlay>
      <div
        class="v3t-langs-menu flex flex-col cursor-pointer"
        :style="{
          backgroundColor: token.colorBgElevated,
          borderRadius: `${token.borderRadiusLG}px`,
          boxShadow: token.boxShadowSecondary,
          padding: `${token.paddingXXS}px`
        }"
      >
        <span
          class="v3t-langs-item"
          v-for="lang in Langs"
          :key="lang.id"
          @click="() => changeLang"
          >{{ lang.name }}</span
        >
      </div>
    </template>
  </a-dropdown>
</template>
<script lang="ts" setup>
  import { Langs } from '@/enums/constant';
  import useThemeSetting from '@/hooks/setting/useAntDesignTheme';

  const currentLang = ref('zh');
  const { token } = useThemeSetting();

  console.log('token: ', token.value);

  const changeLang = (lang: string) => {
    console.log('changeLang:', lang);
  };
</script>
<style lang="scss" scoped>
  .v3t-langs-item {
    padding: 5px 12px;
  }
</style>
