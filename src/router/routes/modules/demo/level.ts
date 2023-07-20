import type { AppRouteModule } from '#/router';

import { customUseI18n } from '@/hooks/web/useI18n';
import { LAYOUT } from '@/router/constant';

const { t } = customUseI18n();

const permission: AppRouteModule = {
  path: '/level',
  name: 'Level',
  component: LAYOUT,
  redirect: '/level/',
  meta: {
    icon: 'ion:menu-outline',
    title: t('router.level'),
  },
  children: []
};

export default permission;
