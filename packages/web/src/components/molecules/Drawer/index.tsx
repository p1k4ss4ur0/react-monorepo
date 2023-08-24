import Drawer from 'react-modern-drawer';

import 'react-modern-drawer/dist/index.css';

import Switch from '@components/atoms/Switch';

import DrawerItem from './DrawerItem';

import {useProvider} from '@provider';

import themes from 'src/theme';

export default function DrawerMenu() {
  const {settings, setSettings, state, setState} = useProvider();

  const onClose = () =>
    setState({
      ...state,
      drawer: {
        open: false,
      },
    });

  const handleTheme = () => {
    const theme = settings.theme.dark ? themes.light : themes.dark;
    document.body.style.backgroundColor = theme.background;
    setSettings({
      ...settings,
      theme,
    });
  };

  return (
    <Drawer
      open={state.drawer.open}
      onClose={onClose}
      style={{...styles.container, backgroundColor: settings.theme.background}}
      direction='right'>
      <DrawerItem
        icon='Palette'
        title='Theme'
        component={
          <Switch onChange={handleTheme} checked={settings.theme.dark} />
        }
      />
    </Drawer>
  );
}

const styles = {
  container: {
    width: '10%',
    padding: 10,
  },
};
