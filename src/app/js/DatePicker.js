import flatpickr from 'flatpickr';
import { Japanese } from 'flatpickr/dist/l10n/ja';
import { forEach } from './utils/array';

/**
 * flatpickr のラッパークラス
 * @class
 */
class DatePicker {
  /**
   * セレクター文字列から初期化
   * @param {string} selector セレクター
   */
  static initAll(selector) {
    forEach(document.querySelectorAll(selector), DatePicker.init);
  }

  static init(el) {
    flatpickr(el, {
      dateFormat: 'Y/m/d',
      locale: Japanese,
      nextArrow: 'arrow_right',
      prevArrow: 'arrow_left',
      disableMobile: 'true'
    });
  }
}

export default DatePicker;
