import { RequestMessageModeEnum } from '@/enums/commonEnum';

export type RequestMessageMode = keyof typeof RequestMessageModeEnum;

export interface LangType {
  text: string;
  event: string | number;
}