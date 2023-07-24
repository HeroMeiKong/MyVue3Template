import type { AppRouteModule } from '#/router';

import { PageEnum } from '@/enums/commonEnum';
import { t } from '@/hooks/web/useI18n';
import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '@/router/routes/basic';

// import.meta.glob() 直接引入所有的模块 Vite 独有的功能
const modules: any = import.meta.glob('./modules/**/*.ts', { eager: true, import: 'default' });
const routeModuleList: AppRouteModule[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// 许可后可访问路由
export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

// 根路由
export const RootRoute: AppRouteModule = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: t('router.homepage')
  }
};

export const LoginRoute: AppRouteModule = {
  path: PageEnum.BASE_LOGIN,
  name: 'Login',
  component: () => import('@/pages/system/login/index.vue'),
  meta: {
    title: t('word.login')
  }
};

export const SignupRoute: AppRouteModule = {
  path: PageEnum.BASE_SIGNUP,
  name: 'Signup',
  component: () => import('@/pages/system/signup/index.vue'),
  meta: {
    title: t('word.signup')
  }
};

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [
  RootRoute,
  LoginRoute,
  SignupRoute,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE
];
