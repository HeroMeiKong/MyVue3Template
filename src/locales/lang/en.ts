import antdLocale from 'ant-design-vue/es/locale/en_US';

const dict = {
  common: {
    networkException: 'network anomaly',
    networkExceptionMsg:
      'Please check if your network connection is normal! The network is abnormal',
    week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  },
  condition: {},
  operation: {},
  status: {
    addSuccess: 'Successfully Added',
    modifySuccess: 'Successfully Modified',
    operationSuccess: 'Operation Success',
    operationFailed: 'Operation Failed',
    processing: 'Processing',
    uploadFail: 'Upload Failed'
  },
  tip: {
    confirmExitSystem: 'Are you sure to exit the system?',
    errorTip: 'Error Tip',
    successTip: 'Success Tip'
  },
  // 独特的，中英差别，例如复数
  unique: {
    tips: 'Tips'
  },
  // 单位，简写，完整的请在 word 添加
  unit: {
    day: 'D',
    hour: 'h',
    minute: 'm',
    month: 'M',
    second: 's',
    weekday: 'Weekday',
    year: 'Y'
  },
  validate: {
    passwordEmpty: 'Please enter the original password',
    newPasswordEmpty: 'Please enter a new password',
    reNewPasswordEmpty: 'Please enter new password again'
  },
  // 单词，无复数
  word: {
    activity: 'Activity',
    again: 'Again',
    back: 'Back',
    cancel: 'Cancel',
    case: 'Case',
    chart: 'Chart',
    close: 'Close',
    confirm: 'Confirm',
    connect: 'Connect',
    data: 'Data',
    day: 'Day',
    delete: 'Delete',
    disable: 'Disable',
    download: 'Download',
    edit: 'Edit',
    email: 'Email',
    enable: 'Enable',
    end: 'End',
    error: 'Error',
    event: 'Event',
    exclude: 'Exclude',
    fail: 'Fail',
    flowChart: 'FlowChart',
    from: 'From',
    handle: 'Handle',
    handler: 'Handler',
    hour: 'Hour',
    ignore: 'Ignore',
    loading: 'Loading',
    login: 'Login',
    minute: 'Minute',
    model: 'Model',
    modify: 'Modify',
    month: 'Month',
    no: 'NO',
    operate: 'Operate',
    password: 'Password',
    phone: 'Phone',
    preview: 'Preview',
    process: 'Process',
    quota: 'Quota',
    request: 'Request',
    rework: 'Rework',
    save: 'Save',
    second: 'Second',
    select: 'Select',
    signup: 'Signup',
    start: 'Start',
    status: 'Status',
    success: 'Success',
    timeline: 'Timeline',
    timestamp: 'Timestamp',
    to: 'To',
    type: 'Type',
    update: 'Update',
    upload: 'Upload',
    user: 'User',
    value: 'Value',
    week: 'Week',
    year: 'Year',
    yes: 'YES'
  }
};

export default {
  message: {
    api: {
      apiRequestFailed: 'The interface request failed, please try again later!',
      apiTimeoutMessage: 'The interface request timed out, please refresh the page and try again!',
      errMsg401: 'The user does not have permission (token, user name, password error)!',
      errMsg403: 'The user is authorized, but access is forbidden!',
      errMsg404: 'Network request error, the resource was not found!',
      errMsg405: 'Network request error, request method not allowed!',
      errMsg408: 'Network request timed out!',
      errMsg500: 'Server error, please contact the administrator!',
      errMsg501: 'The network is not implemented!',
      errMsg502: 'Network Error!',
      errMsg503: 'The service is unavailable, the server is temporarily overloaded or maintained!',
      errMsg504: 'Network timeout!',
      errMsg505: 'The http version does not support the request!',
      timeoutMessage: 'Login timed out, please log in again!'
    },
    router: {
      errorLog: 'Error Log',
      errorLogList: 'Error Log List',
      errorPage: 'Error Page',
      homepage: 'Homepage',
      level: 'Membership Level',
      login: dict.word.login
    },
    ...dict,
    antdLocale
  }
};
