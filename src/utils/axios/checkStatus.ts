import type { RequestMessageMode } from '#/common';

import { RequestMessageModeEnum } from '@/enums/commonEnum';
import { SessionTimeoutProcessingEnum } from '@/enums/settingsEnum';
import { customUseI18n } from '@/hooks/web/useI18n';
import { useMessage } from '@/hooks/web/useMessage';
import projectSetting from '@/settings/projectSetting';
import { useUserStoreWithOut } from '@/store/modules/user';

const { createMessage, createErrorModal } = useMessage();
const error = createMessage.error!;
const stp = projectSetting.sessionTimeoutProcessing;

export function checkStatus(
  status: number,
  msg: string,
  errorMessageMode: RequestMessageMode = RequestMessageModeEnum.MESSAGE,
): void {
  const { t } = customUseI18n();
  const userStore = useUserStoreWithOut();
  let errMessage = '';

  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break;
    // 401: Not logged in
    // Jump to the login page if not logged in, and carry the path of the current page
    // Return to the current page after successful login. This step needs to be operated on the login page.
    case 401:
      userStore.setToken(undefined);
      errMessage = msg || t('api.errMsg401');
      if (stp === SessionTimeoutProcessingEnum.PAGE_COVERAGE) {
        userStore.setSessionTimeout(true);
      } else {
        userStore.logout(true);
      }
      break;
    case 403:
      errMessage = t('api.errMsg403');
      break;
    // 404请求不存在
    case 404:
      errMessage = t('api.errMsg404');
      break;
    case 405:
      errMessage = t('api.errMsg405');
      break;
    case 408:
      errMessage = t('api.errMsg408');
      break;
    case 500:
      errMessage = t('api.errMsg500');
      break;
    case 501:
      errMessage = t('api.errMsg501');
      break;
    case 502:
      errMessage = t('api.errMsg502');
      break;
    case 503:
      errMessage = t('api.errMsg503');
      break;
    case 504:
      errMessage = t('api.errMsg504');
      break;
    case 505:
      errMessage = t('api.errMsg505');
      break;
    default:
  }

  if (errMessage) {
    if (errorMessageMode === RequestMessageModeEnum.MODAL) {
      createErrorModal({ title: t('tip.errorTip'), content: errMessage });
    } else if (errorMessageMode === RequestMessageModeEnum.MESSAGE) {
      error({ content: errMessage, key: `global_error_message_status_${status}` });
    }
  }
}
