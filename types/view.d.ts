import type { ModalFunc, ModalFuncProps } from 'ant-design-vue/lib/modal/Modal';
import type { NotificationArgsProps, ConfigProps } from 'ant-design-vue/lib/notification';

import { LeftRightEnum, TopBottomEnum } from '@/enums/basicEnum';
import { AlertStatusEnum, TagStatusEnum } from '@/enums/viewEnum';

export type AlertStatus = keyof typeof AlertStatusEnum;

export type LeftRight = keyof typeof LeftRightEnum;

export type TagStatus = keyof typeof TagStatusEnum;

export type TopBottom = keyof typeof TopBottomEnum;

export type TopBottomCenter = TopBottom | 'CENTER';

export type NotificationPlacement = `${Lowercase<TopBottom>}${Capitalize<Lowercase<LeftRight>>}`;

export type PaginationPosition = `${Lowercase<TopBottom>}${Capitalize<Lowercase<TopBottomCenter>>}`;

export type PopConfirmPlacement = `${Lowercase<TopBottom>}${Capitalize<Lowercase<LeftRight>>}` | `${Lowercase<LeftRight>}${Capitalize<Lowercase<TopBottom>>}` | Lowercase<LeftRight> | Lowercase<TopBottom>;

export interface ModalOptionsEx extends Omit<ModalFuncProps, 'iconType'> {
  iconType: Lowercase<AlertStatus>;
}
export type ModalOptionsPartial = Partial<ModalOptionsEx> & Pick<ModalOptionsEx, 'content'>;

export interface ConfirmOptions {
  info: ModalFunc;
  success: ModalFunc;
  error: ModalFunc;
  warn: ModalFunc;
  warning: ModalFunc;
}

export interface NotifyApi {
  info(config: NotificationArgsProps): void;
  success(config: NotificationArgsProps): void;
  error(config: NotificationArgsProps): void;
  warn(config: NotificationArgsProps): void;
  warning(config: NotificationArgsProps): void;
  open(args: NotificationArgsProps): void;
  close(key: String): void;
  config(options: ConfigProps): void;
  destroy(): void;
}
