import type { FunctionArgs } from '@vueuse/core';
import type { ViewportOffsetResult } from '#/custom'; 
import { upperFirst } from 'lodash-es';

export function getBoundingClientRect(element: Element): DOMRect | number {
  if (!element || !element.getBoundingClientRect) {
    return 0;
  }
  return element.getBoundingClientRect();
}

function trim(string: string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
}

// cls: 'class1' | 'class1.class2' | '.class1.class2'
export function hasClass(el: Element, cls: string) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  const classes = cls.split('.').filter(value => value);
  const { length } = classes;
  if (el.classList) {
    for (let i = 0; i < length; i++) {
      if (!el.classList.contains(classes[i])) return false;
    }
    return true;
  } else {
    for (let i = 0; i < length; i++) {
      if ((' ' + el.className + ' ').indexOf(' ' + classes[i] + ' ') === -1) return false;
    }
    return true;
  }
}

// cls: 'class1' | 'class1.class2' | '.class1.class2'
export function addClass(el: Element, cls: string) {
  if (!el || !cls) return;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  const classes = cls.split('.').filter(value => value);
  const { length } = classes;
  let curClass = el.className;

  for (let i = 0; i < length; i++) {
    const clsName = classes[i];

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

// cls: 'class1' | 'class1.class2' | '.class1.class2'
export function removeClass(el: Element, cls: string) {
  if (!el || !cls) return;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  const classes = cls.split('.').filter(value => value);
  const { length } = classes;
  let curClass = ' ' + el.className + ' ';

  for (let i = 0; i < length; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

// cls: 'class1' | 'class1.class2' | '.class1.class2'
export function sameClass(el: Element, cls: string = "") {
  if (!el) return;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.className === cls) return true;
  const classes = cls.split('.').filter(value => value);
  const { length } = el.classList;
  if (classes.length !== length) return false;

  // 长度相同，比较每个值
  for (let i = 0; i < length; i++) {
    if (!classes.includes(el.classList[i])) return false;
  }
  return true;
}

// cls: 'class1' | 'class1.class2' | '.class1.class2'
export function setClass(el: Element, cls?: string) {
  if (!el) return;
  if (!cls) {
    el.className = '';
    return;
  }
  
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  const classes = cls.split('.').filter(value => value);
  const currentClass = classes.join(' ');
  el.className = currentClass;
}

/**
 * Get the left and top offset of the current element
 * left: the distance between the leftmost element and the left side of the document
 * top: the distance from the top of the element to the top of the document
 * right: the distance from the far right of the element to the right of the document
 * bottom: the distance from the bottom of the element to the bottom of the document
 * rightIncludeBody: the distance between the leftmost element and the right side of the document
 * bottomIncludeBody: the distance from the bottom of the element to the bottom of the document
 *
 * @description:
 */
export function getViewportOffset(element: Element): ViewportOffsetResult {
  const doc = document.documentElement;

  const docScrollLeft = doc.scrollLeft;
  const docScrollTop = doc.scrollTop;
  const docClientLeft = doc.clientLeft;
  const docClientTop = doc.clientTop;

  const pageXOffset = window.scrollX;
  const pageYOffset = window.scrollY;

  const box = getBoundingClientRect(element);

  const { left: retLeft, top: rectTop, width: rectWidth, height: rectHeight } = box as DOMRect;

  const scrollLeft = (pageXOffset || docScrollLeft) - (docClientLeft || 0);
  const scrollTop = (pageYOffset || docScrollTop) - (docClientTop || 0);
  const offsetLeft = retLeft + pageXOffset;
  const offsetTop = rectTop + pageYOffset;

  const left = offsetLeft - scrollLeft;
  const top = offsetTop - scrollTop;

  const clientWidth = window.document.documentElement.clientWidth;
  const clientHeight = window.document.documentElement.clientHeight;
  return {
    left: left,
    top: top,
    right: clientWidth - rectWidth - left,
    bottom: clientHeight - rectHeight - top,
    rightIncludeBody: clientWidth - left,
    bottomIncludeBody: clientHeight - top,
  };
}

export function hackCss(attr: string, value: string) {
  const prefix: string[] = ['webkit', 'Moz', 'ms', 'OT'];

  const styleObj: any = {};
  prefix.forEach((item) => {
    styleObj[`${item}${upperFirst(attr)}`] = value;
  });
  return {
    ...styleObj,
    [attr]: value,
  };
}

export function on(
  element: Element | HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
): void {
  if (element && event && handler) {
    element.addEventListener(event, handler, false);
  }
}

export function off(
  element: Element | HTMLElement | Document | Window,
  event: string,
  handler: Fn,
): void {
  if (element && event && handler) {
    element.removeEventListener(event, handler, false);
  }
}

export function once(el: HTMLElement, event: string, fn: EventListener): void {
  const listener = function (this: any, ...args: unknown[]) {
    if (fn) {
      fn.apply(this, args);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
}

export function useRafThrottle<T extends FunctionArgs>(fn: T): T {
  let locked = false;
  // @ts-ignore
  return function (...args: any[]) {
    if (locked) return;
    locked = true;
    window.requestAnimationFrame(() => {
      // @ts-ignore
      fn.apply(this, args);
      locked = false;
    });
  };
}
