import type { RequestMessageMode } from '#/common';
import type { LoginParams, LoginResultModel, GetUserInfoModel } from '#/request';

import { UserApiEnum } from '@/enums/apisEnum';
import { RequestMessageModeEnum } from '@/enums/commonEnum';
import { defHttp } from '@/utils/axios';

export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: UserApiEnum.GetUserInfo }, { errorMessageMode: RequestMessageModeEnum.NONE });
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: RequestMessageMode = RequestMessageModeEnum.MODAL) {
  return defHttp.post<LoginResultModel>(
    {
      url: UserApiEnum.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function logoutApi() {
  return defHttp.get({ url: UserApiEnum.Logout });
}
