import antdLocale from 'ant-design-vue/es/locale/en_US';

const dict = {
  common: {
    okText: 'OK',
    closeText: 'Close',
    cancelText: 'Cancel',
    loadingText: 'Loading...',
    saveText: 'Save',
    delText: 'Delete',
    resetText: 'Reset',
    searchText: 'Search',
    queryText: 'Search',

    inputText: 'Please enter',
    chooseText: 'Please choose',

    redo: 'Refresh',
    back: 'Back',

    light: 'Light',
    dark: 'Dark',
  },
};

export default {
  message: {
    ...dict,
    antdLocale
  }
}
