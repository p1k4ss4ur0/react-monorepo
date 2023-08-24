import Modal from '@components/molecules/Modal';

import Button from '@components/molecules/Button';
import Input from '@components/atoms/Input';
import Text from '@components/atoms/Text';

interface Modal {
  title: string;
  submit: string;
  onSubmit: (event?: any) => void;
  value: any;
  onChange: (value: any) => any;
  open: boolean;
  onRequestClose: () => void;
}

export default function TextInputDialog({
  title,
  value,
  onChange,
  submit,
  onSubmit,
  open,
  onRequestClose,
}: Modal) {
  const handleOnClick = () => {
    onSubmit();
  };

  return (
    <Modal open={open} onRequestClose={onRequestClose}>
      <Text style={styles.title}>{title}</Text>
      <form onSubmit={onSubmit}>
        <Input
          title='Collection name'
          value={value}
          onChange={onChange}
          focusable
        />
        <Button title={submit} onClick={handleOnClick} />
      </form>
    </Modal>
  );
}

const styles = {
  title: {
    fontSize: 20,
  },
};
