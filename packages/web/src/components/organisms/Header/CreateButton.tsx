import Icon from '@components/atoms/Icon';

import {Tooltip} from 'react-tooltip';

import {useProvider} from '@provider';

export default function CreateButton() {
  const {settings, state, setState} = useProvider();

  const openTextInputDialog = () =>
    setState({
      ...state,
      textInputDialog: {
        open: true,
      },
    });

  return (
    <>
      <div
        style={{
          ...styles.container,
          backgroundColor: settings.theme.foreground,
        }}
        onClick={openTextInputDialog}
        data-tooltip-id='tooltip'
        data-tooltip-content='Create collection'
        data-tooltip-place='top'>
        <Icon name='Plus' color={settings.theme.black} size='24' />
      </div>
      <Tooltip id='tooltip' style={{fontFamily: 'Segoe UI'}} />
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 2,
  },
};
