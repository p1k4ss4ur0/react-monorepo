import {useRef, useEffect} from 'react';

import {useProvider} from '@provider';

import Icon from '@components/atoms/Icon';

interface IInput {
  title?: string;
  icon?: string;
  value?: any;
  onChange?: (value: any) => any;
  placeholder?: string;
  style?: any;
  focusable?: boolean;
}

export default function Input({
  title,
  icon,
  value,
  onChange,
  placeholder,
  style,
  focusable,
}: IInput) {
  const {settings} = useProvider();

  const ref = useRef();

  useEffect(() => {
    // @ts-ignore
    if (focusable) ref.current?.focus();
  }, []);

  return (
    <div
      style={{
        backgroundColor: settings.theme.foreground,
        ...styles.container,
        ...style,
      }}>
      <input
        // @ts-ignore
        ref={ref}
        title={title}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={styles.input}
        autoComplete='off'
      />
      {icon && (
        <Icon
          name={icon}
          color={settings.theme.black}
          style={styles.icon}
          size='24'
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    width: 600,
    borderRadius: 2,
    paddingTop: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    margin: 10,
    outline: 'none',
    borderWidth: 0,
    fontSize: 18,
    display: 'flex',
    width: '100%',
    backgroundColor: 'transparent',
  },
  icon: {
    marginRight: 10,
  },
};
