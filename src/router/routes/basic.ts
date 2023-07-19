import type { AppRouteModule } from '#/router';

import {
  REDIRECT_NAME,
  LAYOUT,
  EXCEPTION_COMPONENT,
  PAGE_NOT_FOUND_NAME,
} from '@/router/constant';

const { t } = useI18n();

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteModule = {
  path: '/:path(.*)*',
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: t('router.ErrorPage'),
  },
  children: [
    {
      path: '/:path(.*)*',
      name: PAGE_NOT_FOUND_NAME,
      component: EXCEPTION_COMPONENT,
      meta: {
        title: t('router.ErrorPage'),
      },
    },
  ],
};

export const REDIRECT_ROUTE: AppRouteModule = {
  path: '/redirect',
  component: LAYOUT,
  name: 'RedirectTo',
  meta: {
    title: REDIRECT_NAME,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: REDIRECT_NAME,
      component: () => import('/@/views/sys/redirect/index.vue'),
      meta: {
        title: REDIRECT_NAME,
      },
    },
  ],
};

export const ERROR_LOG_ROUTE: AppRouteModule = {
  path: '/error-log',
  name: 'ErrorLog',
  component: LAYOUT,
  redirect: '/error-log/list',
  meta: {
    title: t('routes.errorLog'),
  },
  children: [
    {
      path: 'list',
      name: 'ErrorLogList',
      component: () => import('/@/views/sys/error-log/index.vue'),
      meta: {
        title: t('routes.errorLogList'),
        currentActiveMenu: '/error-log',
      },
    },
  ],
};
