import antdLocale from 'ant-design-vue/es/locale/zh_CN';

const dict = {
  common: {
    networkException: '网络异常',
    networkExceptionMsg: '网络异常，请检查您的网络连接是否正常!',
    week: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天']
  },
  condition: {},
  operation: {},
  status: {
    addSuccess: '添加成功',
    modifySuccess: '修改成功',
    operationSuccess: '操作成功',
    operationFailed: '操作失败',
    processing: '处理中',
    uploadFail: '上传失败'
  },
  tip: {
    confirmExitSystem: '是否确认退出系统?',
    errorTip: '错误提示',
    successTip: '成功提示'
  },
  // 独特的，中英差别，例如复数
  unique: {
    tips: '温馨提醒'
  },
  // 单位，简写，完整的请在 word 添加
  unit: {
    day: '日',
    hour: '时',
    minute: '分',
    month: '月',
    second: '秒',
    weekday: '工作日',
    year: '年'
  },
  validate: {
    passwordEmpty: '请输入原始密码',
    newPasswordEmpty: '请输入新密码',
    reNewPasswordEmpty: '请再次输入新密码'
  },
  // 单词，无复数，全写
  word: {
    activity: '活动',
    again: '再次',
    back: '返回',
    cancel: '取消',
    case: '案例',
    chart: '图',
    close: '关闭',
    confirm: '确认',
    connect: '连接',
    data: '数据',
    day: '日',
    delete: '删除',
    disable: '禁用',
    download: '下载',
    edit: '编辑',
    email: '邮箱',
    enable: '启用',
    end: '结束',
    error: '错误',
    event: '事件',
    exclude: '排除',
    fail: '失败',
    flowChart: '流程图',
    from: '从',
    handle: '处理',
    handler: '处理人',
    hour: '时',
    ignore: '忽略',
    loading: '加载',
    login: '登录',
    minute: '分',
    model: '模型',
    modify: '修改',
    month: '月',
    no: '否',
    operate: '操作',
    password: '密码',
    phone: '电话',
    preview: '预览',
    process: '流程',
    quota: '指标',
    request: '请求',
    rework: '返工',
    save: '保存',
    second: '秒',
    select: '选择',
    signup: '注册',
    start: '开始',
    status: '状态',
    success: '成功',
    timeline: '时间线',
    timestamp: '时间戳',
    to: '至',
    type: '类型',
    update: '更新',
    upload: '上传',
    user: '用户',
    value: '值',
    week: '周',
    year: '年',
    yes: '是'
  }
};

export default {
  message: {
    api: {
      apiRequestFailed: '请求出错，请稍候重试',
      apiTimeoutMessage: '接口请求超时,请刷新页面重试!',
      errMsg401: '用户没有权限（令牌、用户名、密码错误）!',
      errMsg403: '用户得到授权，但是访问是被禁止的。!',
      errMsg404: '网络请求错误,未找到该资源!',
      errMsg405: '网络请求错误,请求方法未允许!',
      errMsg408: '网络请求超时!',
      errMsg500: '服务器错误,请联系管理员!',
      errMsg501: '网络未实现!',
      errMsg502: '网络错误!',
      errMsg503: '服务不可用，服务器暂时过载或维护!',
      errMsg504: '网络超时!',
      errMsg505: 'http版本不支持该请求!',
      timeoutMessage: '登录超时,请重新登录!'
    },
    router: {
      errorLog: '错误日志',
      errorLogList: '错误日志列表',
      errorPage: '错误页面',
      homepage: '主页',
      level: '会员等级',
      login: dict.word.login
    },
    ...dict,
    antdLocale
  }
};
