import { genMessage } from '../helper';

const modules = import.meta.glob('./en/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'en')
  },
  dateLocale: null,
  dateLocaleName: 'en'
};