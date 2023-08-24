import Icon from '@components/atoms/Icon';

import {useProvider} from '@provider';
import Title from '@components/atoms/Title';

export default function HeaderTitle() {
  const {settings} = useProvider();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,
        paddingRight: 20,
        paddingLeft: 5,
        cursor: 'pointer',
      }}>
      <Icon
        name='Rainbow'
        size='48'
        color={settings.theme.primary}
        style={styles.icon}
      />
      <Title style={{fontSize: 22, color: settings.theme.text}}>
        Collections
      </Title>
    </div>
  );
}

const styles = {
  icon: {
    marginRight: 10,
  },
};
