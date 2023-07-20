const dropConsole = import.meta.env.VITE_DROP_CONSOLE; // 注意 Vite 目前只支持 string 类型
const projectName = import.meta.env.VITE_GLOBAL_APP_TITLE;

export function warn(message: string) {
  console.warn(`[${projectName} warn]:${message}`);
}

export function error(message: string) {
  throw new Error(`[${projectName} error]:${message}`);
}

export default function conlog(...args: any[]) {
  if (dropConsole === 'true') return;
  if (args.length === 0) throw new Error('请传递 log 参数');
  if (args.length === 1) {
    console.log(args[0]);
    return;
  }
  console.log(`${args[0]} `, ...args.slice(1));
}
