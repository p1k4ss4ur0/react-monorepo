import ReactSwitch from 'react-switch';

import {useProvider} from '@provider';

export default function Switch({onChange, checked}) {
  const {settings} = useProvider();

  return (
    <ReactSwitch
      onChange={onChange}
      checked={checked}
      checkedIcon={<div />}
      uncheckedIcon={<div />}
      handleDiameter={25}
      height={20}
      width={40}
      onColor={settings.theme.primary}
    />
  );
}
