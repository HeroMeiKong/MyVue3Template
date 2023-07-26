import { theme } from 'ant-design-vue';

export default function useThemeSetting() {
  const { defaultAlgorithm, defaultSeed, useToken } = theme;
  const { token } = useToken();
  const mapToken = defaultAlgorithm(defaultSeed);

  return { defaultSeed, mapToken, token };
}
