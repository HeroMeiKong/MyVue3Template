import type { AppRouteModule } from '#/router';

import { LAYOUT } from '@/router/constant';

const { t } = useI18n();

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
