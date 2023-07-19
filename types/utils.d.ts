export interface Cache<V = any> {
  value?: V;
  timeoutId?: ReturnType<typeof setTimeout>;
  time?: number;
  alive?: number;
}

export interface EncryptionParams {
  key: string;
  iv: string;
}

export interface TreeHelperConfig {
  id: string;
  children: string;
  pid: string;
}

export interface CreateStorageParams extends EncryptionParams {
  prefixKey: string;
  storage: Storage;
  hasEncrypt: boolean;
  timeout?: Nullable<number>;
}

export type CreateStorageParamsOptions = Partial<CreateStorageParams>;
