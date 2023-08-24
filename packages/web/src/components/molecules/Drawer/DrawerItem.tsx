import {useProvider} from '@provider';

import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';

interface Draweritem {
  icon: string;
  title: string;
  component?: React.ReactElement;
}

export default function DrawerItem({icon, title, component}: Draweritem) {
  const {settings} = useProvider();

  return (
    <div
      style={{...styles.container, backgroundColor: settings.theme.black}}>
      <div style={styles.left}>
        <Icon
          name={icon}
          color={settings.theme.text}
          style={styles.icon}
          size='28'
        />
        <Text style={styles.title}>{title}</Text>
      </div>
      <div style={styles.right}>{component}</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    padding: 5,
    borderRadius: 2,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  left: {
    display: 'flex',
    width: '50%',
    paddingLeft: 10,
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '50%',
    paddingRight: 10,
  },
};
