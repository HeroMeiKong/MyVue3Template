import type { ProjectConfig } from '#/config';

import { CacheTypeEnum } from '@/enums/cacheEnum';
import { PermissionModeEnum, RouterTransitionEnum } from '@/enums/settingsEnum';

// ! You need to clear the browser cache after the change
const setting: ProjectConfig = {
  // Permission-related cache is stored in sessionStorage or localStorage
  permissionCacheType: CacheTypeEnum.LOCAL,
  // Permission mode
  permissionMode: PermissionModeEnum.ROUTE_MAPPING,
  // Transition Setting
  transitionSetting: {
    //  Whether to open the page switching animation
    // The disabled state will also disable pageLoading
    enable: true,

    // Route basic switching animation
    basicTransition: RouterTransitionEnum.FADE_SIDE,

    // Whether to open page switching loading
    // Only open when enable=true
    openPageLoading: true,

    // Whether to open the top progress bar
    openNProgress: false,
  },
  // Use error-handler-plugin
  useErrorHandle: false,
};

export default setting;
