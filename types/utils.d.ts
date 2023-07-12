export interface EncryptionParams {
  key: string;
  iv: string;
}

export interface CreateStorageParams extends EncryptionParams {
  prefixKey: string;
  storage: Storage;
  hasEncrypt: boolean;
  timeout?: Nullable<number>;
}


export type CreateStorageParamsOptions = Partial<CreateStorageParams>;