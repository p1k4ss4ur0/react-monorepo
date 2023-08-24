import {useState} from 'react';

import {useProvider} from '@provider';

import Icon from '@components/atoms/Icon';

export default function HeaderTriggerButton() {
  const {settings, state, setState} = useProvider();

  const [hover, sethover] = useState(false);

  const activeHover = () => sethover(true);

  const disableHover = () => sethover(false);

  const openDrawer = () => setState({...state, drawer: {open: true}});

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: hover ? settings.theme.foreground : undefined,
      }}
      onMouseEnter={activeHover}
      onMouseLeave={disableHover}
      onClick={openDrawer}>
      <div style={styles.icon}>
        <Icon
          name='Menu'
          color={hover ? settings.theme.black : settings.theme.white}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  icon: {
    padding: 8,
  },
};
