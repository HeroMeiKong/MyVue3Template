import type { ProjectConfig } from '#/config';

import { CacheTypeEnum } from '@/enums/cacheEnum';
import {
  PermissionModeEnum,
  RouterTransitionEnum,
  SessionTimeoutProcessingEnum
} from '@/enums/settingsEnum';

// ! You need to clear the browser cache after the change
const setting: ProjectConfig = {
  // Whether to delete unclosed messages and notify when switching the interface
  closeMessageOnSwitch: true,
  // Permission-related cache is stored in sessionStorage or localStorage
  permissionCacheType: CacheTypeEnum.LOCAL,
  // Permission mode
  permissionMode: PermissionModeEnum.ROUTE_MAPPING,
  // Whether to cancel the http request that has been sent but not responded when switching the interface.
  // If it is enabled, I want to overwrite a single interface. Can be set in a separate interface
  removeAllHttpPending: false,
  // Session timeout processing
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,
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
    openNProgress: false
  },
  // Use error-handler-plugin
  useErrorHandle: false
};

export default setting;
