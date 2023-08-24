import HeaderTitle from './HeaderTitle';
import HeaderSearchBar from './HeaderSearchBar';
import HeaderTriggerButton from './HeaderTriggerButton';

import {useProvider} from '@provider';

export default function Header() {
  const {settings, state, setState} = useProvider();

  const openDrawer = () => setState({...state, drawer: {open: true}});

  return (
    <div
      style={{...styles.container, backgroundColor: settings.theme.background}}>
      <HeaderTitle />
      <HeaderSearchBar />
      <HeaderTriggerButton />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '99%',
    alignItems: 'center',
    padding: 10,
  },
};
