import {useRef} from 'react';

import {useProvider} from '@provider';

import Text from '@components/atoms/Text';

interface IButton {
  title: string;
  style?: any;
  onClick?: () => void;
}

export default function Button({title, onClick}: IButton) {
  const {settings} = useProvider();

  const ref = useRef(null);

  return (
    <div
      style={{...styles.container, backgroundColor: settings.theme.primary}}
      onClick={onClick}
      ref={ref}>
      <Text
        style={{...styles.text, color: settings.theme.background}}>
        {title}
      </Text>
    </div>
  );
}

const styles = {
  container: {
    cursor: 'default',
    width: 80,
    height: 40,
    marginRight: 0,
    borderRadius: 3,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  text: {
    fontWeight: '500',
  },
};
