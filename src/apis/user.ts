// import { defHttp } from '@/utils/axios';

export function getUserInfo() {
  return {
    roles: [],
    // 用户id
    userId: 101,
    // 用户名
    username: 'super',
    // 真实名字
    realName: 'super',
    // 头像
    avatar: '',
    // 介绍
    desc: '',
  }
}

export function loginApi(params: any) {
  return {
    userId: 101,
    token: 'sss',
    role: 'super',
  };
}

export function logoutApi() {}
