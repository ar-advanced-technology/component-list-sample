import { map, forEach } from './utils/array';
import DatePicker from './DatePicker';

/**
 * SmartInput クラス
 * @class
 * @property {HTMLElement} root
 * @property {SmartInputRow[]} rows
 * @property {HTMLElement} addButton
 * @property {HTMLElement} calcTotal
 */
class SmartInput {
  /**
   * 複数初期化
   * @param {string} selector セレクター
   */
  static initAll(selector) {
    forEach(document.querySelectorAll(selector), SmartInput.init);
  }

  /**
   * 初期化
   * @param {HTMLElement} root 基点要素
   */
  static init(root) {
    return new SmartInput(root);
  }

  /**
   * @constructor
   * @param {HTMLElement} root
   */
  constructor(root) {
    this.root = root;

    const rows = this.root.querySelectorAll('.js-smartinput-row');
    this.rows = map(rows, row => new SmartInputRow(row));

    // SmartInputRow クラスからの削除イベントに反応する
    this.rows.forEach(this.attachRemoveEvent.bind(this));
    this.toggleRemove();

    // 追加ボタン
    this.addButton = this.root.querySelector('.js-smartinput-add');
    this.addButton.addEventListener('click', this.handleAdd.bind(this));

    // 合計値エリア
    this.calcTotal = this.root.querySelector('.js-smartinput-total');
    this.rows.forEach(this.attachCalcEvent.bind(this));
  }

  /**
   * 行に削除イベントのリスナを設定する
   * @param {SmartInputRow} row
   */
  attachRemoveEvent(row) {
    row.el.addEventListener('rowremove', e => {
      this.rows = this.rows.filter(r => r.el !== e.target);
      if (this.calcTotal) {
        this.calcTotal.value = this.total;
      }
      e.target.parentNode.removeChild(e.target);
      this.toggleRemove();
    });
  }

  /**
   * 行に計算イベントのリスナを設定する
   * @param {SmartInputRow} row
   */
  attachCalcEvent(row) {
    // 計算エリアは存在しないこともある
    if (!this.calcTotal) {
      return false;
    }

    row.el.addEventListener('calcchange', () => {
      this.calcTotal.value = this.total;
    });
  }

  /**
   * 合計値
   * @returns {number}
   */
  get total() {
    return this.rows
      .map(row => row.calcItem.value * 1)
      .reduce((prev, current) => prev + current);
  }

  /**
   * 行を複製する
   * @returns {SmartInputRow}
   */
  cloneRow() {
    const el = this.rows[0].el.cloneNode(true);
    const uploader = el.querySelector('.js-smartinput-uploader');

    forEach(el.querySelectorAll('input, select, textarea'), input => {
      input.value = '';
    });
    if (uploader) {
      uploader.classList.remove('is-active');
    }

    return new SmartInputRow(el);
  }

  /**
   * 追加ボタンのハンドラ
   */
  handleAdd() {
    const lastRow = this.rows[this.rows.length - 1].el;
    const newRow = this.cloneRow();

    this.rows.push(newRow);

    this.attachRemoveEvent(newRow);
    this.attachCalcEvent(newRow);
    this.toggleRemove();

    // DOM 操作
    lastRow.insertAdjacentElement('afterend', newRow.el);

    DatePicker.init(newRow.el.querySelector('.form-date input'));
  }

  /**
   * 一行目の削除ボタンの活性/非活性を切り替える
   */
  toggleRemove() {
    // 残り一行であれば削除させない
    if (this.rows.length === 1) {
      this.rows.forEach(row => row.disableRemove());
    } else {
      this.rows.forEach(row => row.enableRemove());
    }
  }
}

/**
 * 一行を表すクラス
 * @class
 * @property {HTMLElement} el
 * @property {HTMLElement} remover
 * @property {CustomEvent} removeEvent
 * @property {HTMLElement} calcItem
 * @property {CustomEvent} calcEvent
 * @property {HTMLElement|null} uploader
 */
class SmartInputRow {
  /**
   * @constructor
   * @param {HTMLElement} el
   */
  constructor(el) {
    this.el = el;

    // 行削除
    this.remover = this.el.querySelector('.js-smartinput-remove');
    this.removeEvent = new CustomEvent('rowremove');
    this.handleRemove();

    // 数値変更
    this.calcItem = this.el.querySelector('.js-smartinput-calc');
    if (this.calcItem) {
      this.calcEvent = new CustomEvent('calcchange');
      this.handleCalc();
    }

    // ファイルアップロード
    this.uploader = this.el.querySelector('.js-smartinput-uploader');
    if (this.uploader) {
      this.handleUpload();
    }
  }

  /**
   * 削除ボタンを押したときの処理
   */
  handleRemove() {
    this.remover.addEventListener('click', () => {
      // 行削除イベントを発行
      // 削除処理は親である SmartInput クラスが行う
      this.el.dispatchEvent(this.removeEvent);
    });
  }

  /**
   * 数値変更処理
   */
  handleCalc() {
    this.calcItem.addEventListener('keyup', () => {
      // 数値変更イベントを発行
      // 合計値の計算は親である SmartInput クラスが行う
      this.el.dispatchEvent(this.calcEvent);
    });
  }

  /**
   * 削除ボタン非活性化
   */
  disableRemove() {
    this.remover.setAttribute('disabled', 'disabled');
  }

  /**
   * 削除ボタン活性化
   */
  enableRemove() {
    this.remover.removeAttribute('disabled');
  }

  /**
   * ファイルアップロード処理
   */
  handleUpload() {
    const fileInput = this.el.querySelector('.js-smartinput-file');

    if (!fileInput) {
      return false;
    }

    this.uploader.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', e => {
      if (e.target.files && e.target.files.length > 0) {
        this.uploader.classList.add('is-active');
      } else {
        this.uploader.classList.remove('is-active');
      }
    });
  }
}

export default SmartInput;
