import type { ModalFunc, ModalFuncProps } from 'ant-design-vue/lib/modal/Modal';
import type { NotificationArgsProps, ConfigProps } from 'ant-design-vue/lib/notification';

import { LeftRightEnum, TopBottomEnum } from '@/enums/basicEnum';
import { AlertStatusEnum, TagStatusEnum } from '@/enums/viewEnum';

export type AlertStatus = `${AlertStatusEnum}`;

export type LeftRight = `${LeftRightEnum}`;

export type TagStatus = `${TagStatusEnum}`;

export type TopBottom = `${TopBottomEnum}`;

export type TopBottomCenter = TopBottom | 'center';

export type NotificationPlacement = `${TopBottom}${Capitalize<LeftRight>}`;

export type PaginationPosition = `${TopBottom}${Capitalize<TopBottomCenter>}`;

export type PopConfirmPlacement =
  | `${TopBottom}${Capitalize<LeftRight>}`
  | `${LeftRight}${Capitalize<TopBottom>}`
  | LeftRight
  | TopBottom;

export interface ModalOptionsEx extends Omit<ModalFuncProps, 'iconType'> {
  iconType: AlertStatus;
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
