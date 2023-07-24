import type { GlobConfig } from '#/config';

import { getAppEnvConfig } from '@/utils/env';

export const useGlobSetting = (): Readonly<GlobConfig> => {
  const {
    VITE_GLOBAL_API_URL,
    VITE_GLOBAL_API_URL_PREFIX,
    VITE_GLOBAL_APP_SHORT_NAME,
    VITE_GLOBAL_APP_TITLE,
    VITE_GLOBAL_UPLOAD_URL
  } = getAppEnvConfig();

  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOBAL_APP_TITLE,
    apiUrl: VITE_GLOBAL_API_URL,
    shortName: VITE_GLOBAL_APP_SHORT_NAME,
    urlPrefix: VITE_GLOBAL_API_URL_PREFIX,
    uploadUrl: VITE_GLOBAL_UPLOAD_URL
  };
  return glob as Readonly<GlobConfig>;
};
