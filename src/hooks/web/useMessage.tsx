import type { ModalFuncProps } from 'ant-design-vue/lib/modal/Modal';
import type { ConfirmOptions, ModalOptionsEx, ModalOptionsPartial, NotifyApi } from '#/view';

import { Modal, message, notification } from 'ant-design-vue';
import { InfoCircleFilled, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons-vue';
import { AlertStatusEnum } from '@/enums/viewEnum';
import { customUseI18n } from '@/hooks/web/useI18n';
import { isString } from '@/utils/is';

function getIcon(iconType: string) {
  if (iconType === AlertStatusEnum.ERROR) {
    return <CloseCircleFilled />;
  } else if (iconType === AlertStatusEnum.SUCCESS) {
    return <CheckCircleFilled />;
  } else if (iconType === AlertStatusEnum.WARNING) {
    return <InfoCircleFilled />;
  } else {
    return <InfoCircleFilled />;
  }
}

function renderContent({ content }: Pick<ModalOptionsEx, 'content'>) {
  if (isString(content)) {
    return <div innerHTML={`<div>${content as string}</div>`}></div>;
  } else {
    return content;
  }
}

/**
 * @description: Create confirmation box
 */
function createConfirm(options: ModalOptionsEx): ConfirmOptions {
  const iconType = options.iconType || AlertStatusEnum.WARNING;
  Reflect.deleteProperty(options, 'iconType');
  const opt: ModalFuncProps = {
    centered: true,
    icon: getIcon(iconType),
    ...options,
    content: renderContent(options),
  };
  return Modal.confirm(opt) as unknown as ConfirmOptions;
}

const getBaseOptions = () => {
  const { t } = customUseI18n();
  return {
    okText: t('word.confirm'),
    centered: true,
  };
};

function createModalOptions(options: ModalOptionsPartial, icon: string): ModalOptionsPartial {
  return {
    ...getBaseOptions(),
    ...options,
    content: renderContent(options),
    icon: getIcon(icon),
  };
}

function createSuccessModal(options: ModalOptionsPartial) {
  return Modal.success(createModalOptions(options, AlertStatusEnum.SUCCESS));
}

function createErrorModal(options: ModalOptionsPartial) {
  return Modal.error(createModalOptions(options, AlertStatusEnum.ERROR));
}

function createInfoModal(options: ModalOptionsPartial) {
  return Modal.info(createModalOptions(options, AlertStatusEnum.INFO));
}

function createWarningModal(options: ModalOptionsPartial) {
  return Modal.warning(createModalOptions(options, AlertStatusEnum.WARNING));
}

notification.config({
  placement: 'topRight',
  duration: 3,
});

/**
 * @description: message
 */
export function useMessage() {
  return {
    createMessage: message,
    notification: notification as NotifyApi,
    createConfirm: createConfirm,
    createSuccessModal,
    createErrorModal,
    createInfoModal,
    createWarningModal,
  };
}
