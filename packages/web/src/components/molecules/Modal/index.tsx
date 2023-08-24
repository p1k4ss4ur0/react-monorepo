import Modal from 'react-modal';

import {useProvider} from '@provider';

export default function ModalComp({children, open, onRequestClose}) {
  const {settings} = useProvider();

  return (
    <Modal
      isOpen={open}
      style={{
        ...styles,
        content: {
          ...styles.content,
          backgroundColor: settings.theme.background,
          borderColor: settings.theme.white,
        },
      }}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      shouldCloseOnOverlayClick>
      {children}
    </Modal>
  );
}

const styles = {
  overlay: {
    backgroundColor: '#0008',
  },
  content: {
    borderWidth: 1,
    top: '10%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};
