import type {
  ComponentPublicInstance,
  // ComponentRenderProxy,
  FunctionalComponent,
  // VNode,
  VNodeChild,
  PropType as VuePropType
} from 'vue';

declare global {
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };

  // Vue
  type PropType<T> = VuePropType<T>;
  type VueNode = VNodeChild | JSX.Element;

  type Nullable<T> = T | null;
  type Recordable<T = any> = Record<string, T>;

  declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };

  // Async
  type TimeoutHandle = ReturnType<typeof setTimeout>;
  type IntervalHandle = ReturnType<typeof setInterval>;

  // Event
  interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }

  // Vite
  interface ViteEnv {
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
    VITE_DROP_CONSOLE: boolean;
    VITE_GLOBAL_API_URL: string;
    VITE_GLOBAL_API_URL_PREFIX: string | undefined;
    VITE_GLOBAL_APP_SHORT_NAME: string;
    VITE_GLOBAL_APP_TITLE: string;
    VITE_GLOBAL_UPLOAD_URL: string;
    VITE_LEGACY: boolean;
    VITE_PORT: number;
    VITE_PROXY: [string, string][];
    VITE_PUBLIC_PATH: string;
    VITE_USE_IMAGEMIN: boolean;
    VITE_USE_MOCK: boolean;
    VITE_USE_PWA: boolean;
  }

  // JSX
  namespace JSX {
    // tslint:disable no-empty-interface
    // type Element = VNode;
    // tslint:disable no-empty-interface
    // type ElementClass = ComponentRenderProxy;
    interface ELementAttributesProperty {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface IntrinsicAttributes {
      [elem: string]: any;
    }
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}

// for custom
declare global {
  const conlog: typeof import('@/utils/log')['default'];
}
