import MicroModal from 'micromodal';

const defaultOption = {
  disableScroll: true,
  disableFocus: true,
  // awaitCloseAnimation: true,
  openTrigger: 'data-modal-open',
  closeTrigger: 'data-modal-close'
};

function getOption(option) {
  const modalOption = Object.assign({}, defaultOption, option);

  modalOption.onShow = () => {
    disableScroll();

    if (typeof option.onShow === 'function') {
      option.onShow();
    }
  };

  modalOption.onClose = () => {
    enableScroll();

    if (typeof option.onClose === 'function') {
      option.onClose();
    }
  };

  return modalOption;
}

/**
 * MicroModal のラッパー
 * @class
 */
class Modal {
  static init(option = {}) {
    MicroModal.init(getOption(option));
  }

  static show(id, option = {}) {
    MicroModal.show(id, getOption(option));
  }

  static close(id, option = {}) {
    MicroModal.close(id, getOption(option));
  }
}

function disableScroll() {
  // モーダルを開いた時の背景のスクロール位置を維持
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
}

function enableScroll() {
  // モーダルを閉じた時の背景のスクロール位置を維持
  const top = document.body.style.top;
  document.body.style = '';
  window.scrollTo(0, parseInt(top || '0') * -1);
}

export default Modal;
