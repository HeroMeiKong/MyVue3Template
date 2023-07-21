import { RequestMessageModeEnum } from '@/enums/commonEnum';

export type I18nGlobalTranslation = {
  (key: string): string;
  (key: string, locale: string): string;
  (key: string, locale: string, list: unknown[]): string;
  (key: string, locale: string, named: Record<string, unknown>): string;
  (key: string, list: unknown[]): string;
  (key: string, named: Record<string, unknown>): string;
};

export type I18nTranslationRestParameters = [string, any];

export type RequestMessageMode = `${RequestMessageModeEnum}`;

export interface LangType {
  text: string;
  event: string | number;
}