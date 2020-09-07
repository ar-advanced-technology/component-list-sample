import loaded from './utils/loaded';
import Modal from './Modal';
import DatePicker from './DatePicker';
import SmartInput from './SmartInput';

loaded(() => {
  Modal.init();
  DatePicker.initAll('.form-date input');
  SmartInput.initAll('.js-smartinput');
});
