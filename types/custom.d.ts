import type { App, Component } from 'vue';

export type CustomComponent = Component & { displayName?: string };

// https://github.com/vant-ui/vant/issues/8302
type EventShim = {
  new (...args: any[]): {
    $props: {
      onClick?: (...args: any[]) => void;
    };
  };
};

export interface ViewportOffsetResult {
  left: number;
  top: number;
  right: number;
  bottom: number;
  rightIncludeBody: number;
  bottomIncludeBody: number;
}

//
// --- unit ---
//
export type WithInstall<T> = T & {
  install(app: App): void;
} & EventShim;
