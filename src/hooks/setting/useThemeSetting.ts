import { useSettingStore } from "@/store/modules/setting";

export default function useThemeSetting() {
  const themeStore = useSettingStore();

  const getCustomTheme = computed(() => themeStore.getCustomTheme);
  const getTheme = computed(() => themeStore.getTheme);
  const getThemeName = computed(() => themeStore.getThemeName);

  return { getCustomTheme, getTheme, getThemeName };
}
