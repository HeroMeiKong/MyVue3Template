import { useThemeStore } from "@/store/modules/settings";

export default function useThemeSetting() {
  const themeStore = useThemeStore();

  const getTheme = computed(() => themeStore.getTheme);

  return { getTheme };
}
