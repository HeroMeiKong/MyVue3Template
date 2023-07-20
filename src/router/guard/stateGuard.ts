import type { Router } from 'vue-router';

import { PageEnum } from '@/enums/commonEnum';
import { removeTabChangeListener } from '@/logics/mitt/routeChange';
import { useAppStore } from '@/store/modules/app';
import { useUserStore } from '@/store/modules/user';
import { usePermissionStore } from '@/store/modules/permission';

export function createStateGuard(router: Router) {
  router.afterEach((to) => {
    // Just enter the login or signup page and clear the authentication information
    if (to.path === PageEnum.BASE_LOGIN || to.path === PageEnum.BASE_SIGNUP) {
      const userStore = useUserStore();
      const appStore = useAppStore();
      const permissionStore = usePermissionStore();
      appStore.resetAllState();
      permissionStore.resetState();
      userStore.resetState();
      removeTabChangeListener();
    }
  });
}
