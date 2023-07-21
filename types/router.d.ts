import type { RouteRecordRaw, RouteMeta } from 'vue-router';
import type { TagStatus } from '#/view';

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

// @ts-ignore
export interface AppRouteModule extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteModule[];
  props?: Recordable;
  fullPath?: string;
}

export interface MenuTag {
  type?: TagStatus;
  content?: string;
  dot?: boolean;
}

export interface Menu {
  name: string;
  icon?: string;
  path: string;
  // path contains param, auto assignment.
  paramPath?: string;
  disabled?: boolean;
  children?: Menu[];
  orderNo?: number;
  roles?: RoleEnum[];
  meta?: Partial<RouteMeta>;
  tag?: MenuTag;
  hideMenu?: boolean;
}

export interface MenuModule {
  orderNo?: number;
  menu: Menu;
}
