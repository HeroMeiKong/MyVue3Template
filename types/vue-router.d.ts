export {};

declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    // Currently active menu
    currentActiveMenu?: string;
    // Never show in menu
    hideMenu?: boolean;
    // title
    title: string;
  }
}
